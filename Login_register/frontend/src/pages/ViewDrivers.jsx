import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';
import '../styles/ViewDrivers.css';
import {
  FaUserTie,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaExclamationCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

function ViewDrivers() {
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // Use an object for message: { type: 'success' | 'error', text: string }
  const [message, setMessage] = useState({ type: '', text: '' });
  const [editDriverId, setEditDriverId] = useState(null);
  const [editData, setEditData] = useState({});
  const [deleteDriverId, setDeleteDriverId] = useState(null);

  const recordsPerPage = 5;

  useEffect(() => {
    fetchDrivers();
    fetchTrucks();
  }, []);

  const fetchDrivers = async () => {
    try {
      const res = await axios.get('/api/drivers');
      setDrivers(res.data);
    } catch (err) {
      setMessage({ type: 'error', text: 'Error fetching drivers.' });
    }
  };

  const fetchTrucks = async () => {
    try {
      const res = await axios.get('/api/trucks');
      setTrucks(res.data);
    } catch (err) {
      setMessage({ type: 'error', text: 'Error fetching trucks.' });
    }
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`/api/drivers/${deleteDriverId}`);
      setMessage({ type: 'success', text: 'Driver deleted successfully.' });
      fetchDrivers();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to delete driver.' });
    } finally {
      setDeleteDriverId(null);
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  const handleEdit = (driver) => {
    setEditDriverId(driver._id);
    setEditData({
      name: driver.name,
      phone: driver.phone,
      email: driver.email,
      assignedTruck: driver.assignedTruck?._id || ''
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSave = async () => {
    try {
      await axios.put(`/api/drivers/${editDriverId}`, editData);
      setEditDriverId(null);
      fetchDrivers();
      setMessage({ type: 'success', text: 'Driver updated successfully.' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to update driver.' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  const filteredDrivers = drivers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.email.toLowerCase().includes(search.toLowerCase()) ||
    d.phone.includes(search)
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentDrivers = filteredDrivers.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredDrivers.length / recordsPerPage);

  return (
    <div className="drivers-container">
      <div className="drivers-header">
        <h3 className="drivers-title">
          <FaUserTie style={{ marginRight: 8 }} />
          Drivers
        </h3>
        <Link to="/add-driver" className="drivers-add-btn">
          <FaPlus style={{ marginRight: 6 }} />
          Add Driver
        </Link>
      </div>

      {message.text && (
        <div className={`drivers-alert ${message.type}`}>
          {message.type === 'success'
            ? <FaCheckCircle style={{ marginRight: 6 }} />
            : <FaExclamationCircle style={{ marginRight: 6 }} />}
          {message.text}
        </div>
      )}

      <input
        type="text"
        className="drivers-search-input"
        placeholder=" Search by name, email, or phone"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="drivers-table-wrapper">
        <table className="drivers-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Assigned Truck</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver, index) => (
              <tr key={driver._id}>
                <td>{indexOfFirstRecord + index + 1}</td>
                <td>
                  {editDriverId === driver._id ? (
                    <input
                      type="text"
                      name="name"
                      className="drivers-edit-input"
                      value={editData.name}
                      onChange={handleEditChange}
                      required
                    />
                  ) : driver.name}
                </td>
                <td>
                  {editDriverId === driver._id ? (
                    <input
                      type="text"
                      name="phone"
                      className="drivers-edit-input"
                      value={editData.phone}
                      onChange={handleEditChange}
                      required
                      pattern="[0-9]{10}"
                      title="Enter a valid 10-digit number"
                    />
                  ) : driver.phone}
                </td>
                <td>
                  {editDriverId === driver._id ? (
                    <input
                      type="email"
                      name="email"
                      className="drivers-edit-input"
                      value={editData.email}
                      onChange={handleEditChange}
                      required
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      title="Enter a valid email"
                    />
                  ) : driver.email}
                </td>
                <td>
                  {editDriverId === driver._id ? (
                    <select
                      name="assignedTruck"
                      className="drivers-edit-input"
                      value={editData.assignedTruck}
                      onChange={handleEditChange}
                    >
                      <option value="">-- Select --</option>
                      {trucks.map((truck) => (
                        <option key={truck._id} value={truck._id}>
                          {truck.truckNumber}
                        </option>
                      ))}
                    </select>
                  ) : driver.assignedTruck?.truckNumber || 'N/A'}
                </td>
                <td>
                  {editDriverId === driver._id ? (
                    <>
                      <button className="drivers-btn drivers-btn-save" onClick={handleEditSave}>
                        <FaCheckCircle style={{ marginRight: 4 }} /> Save
                      </button>
                      <button className="drivers-btn drivers-btn-cancel" onClick={() => setEditDriverId(null)}>
                        <FaTimes style={{ marginRight: 4 }} /> Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="drivers-btn drivers-btn-edit" onClick={() => handleEdit(driver)}>
                        <FaEdit style={{ marginRight: 4 }} /> Edit
                      </button>
                      <button className="drivers-btn drivers-btn-delete" onClick={() => setDeleteDriverId(driver._id)}>
                        <FaTrash style={{ marginRight: 4 }} /> Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {currentDrivers.length === 0 && (
              <tr>
                <td colSpan="6" className="drivers-no-data">No drivers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="drivers-pagination">
          <button
            className="drivers-page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            <FaChevronLeft style={{ marginRight: 4 }} /> Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`drivers-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="drivers-page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            Next <FaChevronRight style={{ marginLeft: 4 }} />
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteDriverId && (
        <div className="drivers-modal-bg">
          <div className="drivers-modal">
            <div className="drivers-modal-header">
              <FaTrash style={{ color: "#f47c27", marginRight: 8 }} />
              Confirm Deletion
              <button className="drivers-modal-close" onClick={() => setDeleteDriverId(null)}>
                <FaTimes />
              </button>
            </div>
            <div className="drivers-modal-body">
              Are you sure you want to delete this driver?
            </div>
            <div className="drivers-modal-actions">
              <button className="drivers-btn drivers-btn-cancel" onClick={() => setDeleteDriverId(null)}>
                Cancel
              </button>
              <button className="drivers-btn drivers-btn-delete" onClick={handleDeleteConfirmed}>
                <FaTrash style={{ marginRight: 4 }} /> Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewDrivers;