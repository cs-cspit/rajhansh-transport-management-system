// frontend/src/pages/ViewDrivers.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';
import '../styles/ViewDrivers.css';
import "../styles/driverStyles.css";
import {
  FaUserTie, FaPlus, FaEdit, FaTrash, FaCheckCircle,
  FaExclamationCircle, FaChevronLeft, FaChevronRight,
  FaTimes, FaEye
} from "react-icons/fa";

function ViewDrivers() {
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({ type: '', text: '' });

  const [editDriverId, setEditDriverId] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    phone: '',
    email: '',
    licenseNumber: '',
    experienceYears: 0,
    assignedTruck: '',
    address: ''
  });

  const [deleteDriverId, setDeleteDriverId] = useState(null);

  const fetchDrivers = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/drivers');
      setDrivers(res.data?.data?.drivers || []);
    } catch (err) {
      console.error('Error fetching drivers:', err);
      setMessage({ type: 'error', text: 'Error fetching drivers.' });
    } finally {
      setLoading(false);
    }
  };

  const fetchTrucks = async () => {
    try {
      const res = await axios.get('/api/trucks');
      setTrucks(res.data?.data?.trucks || []);
    } catch (err) {
      console.error('Error fetching trucks:', err);
      setMessage({ type: 'error', text: 'Error fetching trucks.' });
    }
  };

  useEffect(() => {
    fetchDrivers();
    fetchTrucks();
  }, []);

  const filteredDrivers = drivers.filter((d) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      d.name?.toLowerCase().includes(q) ||
      d.email?.toLowerCase().includes(q) ||
      d.phone?.toLowerCase().includes(q) ||
      d.licenseNumber?.toLowerCase().includes(q) ||
      d.assignedTruck?.truckNumber?.toLowerCase().includes(q)
    );
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredDrivers.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (driver) => {
    setEditDriverId(driver._id);
    setEditData({
      name: driver.name || '',
      phone: driver.phone || '',
      email: driver.email || '',
      licenseNumber: driver.licenseNumber || '',
      experienceYears: driver.experienceYears || 0,
      assignedTruck: driver.assignedTruck?._id || '',
      address: driver.address || ''
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = async () => {
    try {
      if (!editData.name?.trim() || !editData.phone?.trim() || !editData.email?.trim() || !editData.licenseNumber?.trim()) {
        setMessage({ type: 'error', text: 'Name, phone, email and license number are required.' });
        return;
      }

      // Filter out unchanged fields before sending to backend
      const original = drivers.find((d) => d._id === editDriverId) || {};
      const payload = {};
      Object.keys(editData).forEach((key) => {
        if (editData[key] !== (original[key] || (key === 'assignedTruck' ? original.assignedTruck?._id : ''))) {
          payload[key] = editData[key];
        }
      });

      // Handle truck selection and type conversion
      if (payload.assignedTruck === '') {
        payload.assignedTruck = null;
      }
      if (payload.experienceYears !== undefined) {
        payload.experienceYears = Number(payload.experienceYears) || 0;
      }

      console.log("Sending update payload:", payload);
      await axios.put(`/api/drivers/${editDriverId}`, payload);

      setEditDriverId(null);
      setMessage({ type: 'success', text: 'Driver updated successfully.' });
      fetchDrivers();
    } catch (err) {
      console.error('Error updating driver:', err);
      setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to update driver.' });
    } finally {
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  const handleCancelEdit = () => {
    setEditDriverId(null);
  };

  const handleDelete = (id) => setDeleteDriverId(id);
  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`/api/drivers/${deleteDriverId}`);
      setMessage({ type: 'success', text: 'Driver deleted successfully.' });
      fetchDrivers();
    } catch (err) {
      console.error('Error deleting driver:', err);
      setMessage({ type: 'error', text: 'Failed to delete driver.' });
    } finally {
      setDeleteDriverId(null);
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  return (
    <div className="drivers-container">
      <div className="drivers-header">
        <h2>
          <FaUserTie style={{ marginRight: 8 }} /> Drivers
        </h2>
        <div className="drivers-actions">
          <Link to="/add-driver" className="drivers-btn drivers-btn-add">
            <FaPlus style={{ marginRight: 4 }} /> Add Driver
          </Link>
        </div>
      </div>

      {message.text && (
        <div
          className={`drivers-alert ${
            message.type === "success"
              ? "drivers-alert-success"
              : "drivers-alert-error"
          }`}
        >
          {message.type === "success" ? (
            <FaCheckCircle style={{ marginRight: 6 }} />
          ) : (
            <FaExclamationCircle style={{ marginRight: 6 }} />
          )}
          {message.text}
        </div>
      )}

      <input
        type="text"
        className="drivers-search-input"
        placeholder=" Search by name, email, phone, or license number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="drivers-table-wrapper">
        <table className="drivers-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>License No.</th>
              <th>Experience</th>
              <th>Assigned Truck</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            ) : currentRecords.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>
                  No drivers found
                </td>
              </tr>
            ) : (
              currentRecords.map((driver, index) => (
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
                    ) : (
                      driver.name
                    )}
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
                      />
                    ) : (
                      driver.phone
                    )}
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
                      />
                    ) : (
                      driver.email
                    )}
                  </td>
                  <td>
                    {editDriverId === driver._id ? (
                      <input
                        type="text"
                        name="licenseNumber"
                        className="drivers-edit-input"
                        value={editData.licenseNumber}
                        onChange={handleEditChange}
                        required
                      />
                    ) : (
                      driver.licenseNumber
                    )}
                  </td>
                  <td>
                    {editDriverId === driver._id ? (
                      <input
                        type="number"
                        name="experienceYears"
                        className="drivers-edit-input"
                        value={editData.experienceYears}
                        onChange={handleEditChange}
                        min="0"
                        max="50"
                      />
                    ) : (
                      `${driver.experienceYears || 0} years`
                    )}
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
                    ) : (
                      driver.assignedTruck?.truckNumber || "N/A"
                    )}
                  </td>
                  <td style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                    {editDriverId === driver._id ? (
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="drivers-btn drivers-btn-save"
                          onClick={handleEditSave}
                        >
                          <FaCheckCircle style={{ marginRight: 4 }} /> Save
                        </button>
                        <button
                          className="drivers-btn drivers-btn-cancel"
                          onClick={handleCancelEdit}
                        >
                          <FaTimes style={{ marginRight: 4 }} /> Cancel
                        </button>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          justifyContent: "center",
                        }}
                      >
                        {/* <Link to={`/driver/${driver._id}`} className="drivers-btn drivers-btn-view">
                        <FaEye />
                      </Link> */}
                        <button
                          className="drivers-btn drivers-btn-edit"
                          onClick={() => handleEdit(driver)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="drivers-btn drivers-btn-delete"
                          onClick={() => handleDelete(driver._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredDrivers.length > recordsPerPage && (
        <div className="drivers-pagination">
          <button
            className="drivers-page-btn"
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            <FaChevronLeft />
          </button>
          <span className="drivers-page-indicator">
            Page {currentPage} of{" "}
            {Math.ceil(filteredDrivers.length / recordsPerPage)}
          </span>
          <button
            className="drivers-page-btn"
            disabled={indexOfLastRecord >= filteredDrivers.length}
            onClick={() => paginate(currentPage + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {deleteDriverId && (
        <div
          className="drivers-modal-overlay"
          onClick={() => setDeleteDriverId(null)}
        >
          <div className="drivers-modal" onClick={(e) => e.stopPropagation()}>
            <h3
              style={{
                margin: "0 0 1rem 0",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#1e293b",
              }}
            >
              Delete Driver
            </h3>
            <p
              style={{
                margin: "0 0 1.5rem 0",
                fontSize: "0.9375rem",
                color: "#475569",
                lineHeight: "1.5",
              }}
            >
              Are you sure you want to delete this driver? This action cannot be
              undone.
            </p>
            <div
              className="drivers-modal-actions"
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "flex-end",
                marginTop: "1.5rem",
              }}
            >
              <button
                className="drivers-btn drivers-btn-cancel"
                onClick={() => setDeleteDriverId(null)}
                style={{
                  padding: "0.625rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Cancel
              </button>
              <button
                className="drivers-btn drivers-btn-delete"
                onClick={handleDeleteConfirmed}
                style={{
                  padding: "0.625rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaTrash /> Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewDrivers;
