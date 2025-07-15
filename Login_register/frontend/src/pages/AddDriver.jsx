// src/pages/AddDriver.jsx
import { useState, useEffect } from 'react';
import axios from '../axiosConfig';

function AddDriver() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    assignedTruck: '',
  });

  const [trucks, setTrucks] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('/api/trucks')
      .then((res) => setTrucks(res.data))
      .catch((err) => console.error("Failed to load trucks:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.password || !formData.assignedTruck) {
      setMessage("Please fill all required fields");
      setMessageType("danger");
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/drivers', formData);
      setMessage('✅ Driver added successfully!');
      setMessageType('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        password: '',
        assignedTruck: '',
      });

      // ✅ Auto-remove success message after 3 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    } catch (err) {
      console.error("❌ Error adding driver:", err);
      const serverMsg = err?.response?.data?.message || 'Failed to add driver. Please try again.';
      setMessage(serverMsg);
      setMessageType('danger');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4">Add New Driver</h3>

        {/* ✅ Reserved space for message */}
        <div style={{ minHeight: '50px' }}>
          {message && (
            <div className={`alert alert-${messageType}`} role="alert">
              {message}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Driver Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter driver name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Set Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Assign Truck</label>
            <select
              name="assignedTruck"
              className="form-select"
              value={formData.assignedTruck}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Truck --</option>
              {trucks.map((truck) => (
                <option key={truck._id} value={truck._id}>
                  {truck.truckNumber} - {truck.model}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Saving...' : 'Add Driver'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDriver;
