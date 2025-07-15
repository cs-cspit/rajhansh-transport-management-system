import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

function ViewDrivers() {
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState('');
  const [editDriverId, setEditDriverId] = useState(null);
  const [editData, setEditData] = useState({});
  const [deleteDriverId, setDeleteDriverId] = useState(null); // ✅ for confirmation modal

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
      console.error("Error fetching drivers:", err);
    }
  };

  const fetchTrucks = async () => {
    try {
      const res = await axios.get('/api/trucks');
      setTrucks(res.data);
    } catch (err) {
      console.error("Error fetching trucks:", err);
    }
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`/api/drivers/${deleteDriverId}`);
      setMessage('✅ Driver deleted successfully.');
      fetchDrivers();
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to delete driver.');
    } finally {
      setDeleteDriverId(null);
      setTimeout(() => setMessage(''), 3000);
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
      setMessage('✅ Driver updated successfully.');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to update driver.');
      setTimeout(() => setMessage(''), 3000);
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
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-warning">👨‍✈️ Drivers</h3>
        <Link to="/add-driver" className="btn btn-primary fw-bold">+ Add Driver</Link>
      </div>

      {message && (
        <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-danger'} fw-bold text-center`}>
          {message}
        </div>
      )}

      <input
        type="text"
        className="form-control mb-3"
        placeholder="🔍 Search by name, email, or phone"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
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
                      className="form-control"
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
                      className="form-control"
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
                      className="form-control"
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
                      className="form-select"
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
                      <button className="btn btn-success btn-sm me-2" onClick={handleEditSave}>Save</button>
                      <button className="btn btn-secondary btn-sm" onClick={() => setEditDriverId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(driver)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => setDeleteDriverId(driver._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {currentDrivers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted">No drivers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button className="page-link" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>Previous</button>
            </li>

            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 && 'active'}`}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
              <button className="page-link" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>Next</button>
            </li>
          </ul>
        </div>
      )}

      {/* ✅ Delete Confirmation Modal */}
      {deleteDriverId && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={() => setDeleteDriverId(null)}></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this driver?
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setDeleteDriverId(null)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleDeleteConfirmed}>Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewDrivers;
