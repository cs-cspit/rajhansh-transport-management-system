import { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import '../styles/AddDriver.css';
import {
  FaUserTie,
  FaCheckCircle,
  FaExclamationCircle,
  FaTruck,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaPlus
} from "react-icons/fa";

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
      setMessageType("error");
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/drivers', formData);
      setMessage('Driver added successfully!');
      setMessageType('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        password: '',
        assignedTruck: '',
      });

      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    } catch (err) {
      console.error("Error adding driver:", err);
      const serverMsg = err?.response?.data?.message || 'Failed to add driver. Please try again.';
      setMessage(serverMsg);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="adddriver-container">
      <div className="adddriver-card">
        <div className="adddriver-header">
          <FaUserTie className="adddriver-header-icon" />
          Add New Driver
        </div>

        <div className="adddriver-body">
          <div style={{ minHeight: '50px' }}>
            {message && (
              <div className={`adddriver-alert ${messageType}`}>
                {messageType === 'success'
                  ? <FaCheckCircle style={{ marginRight: 6 }} />
                  : <FaExclamationCircle style={{ marginRight: 6 }} />}
                {message}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="adddriver-field">
              <label className="adddriver-label">
                <FaUserTie style={{ marginRight: 6 }} />
                Driver Name
              </label>
              <input
                type="text"
                name="name"
                className="adddriver-input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter driver name"
                required
              />
            </div>

            <div className="adddriver-field">
              <label className="adddriver-label">
                <FaPhone style={{ marginRight: 6 }} />
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="adddriver-input"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="adddriver-field">
              <label className="adddriver-label">
                <FaEnvelope style={{ marginRight: 6 }} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="adddriver-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </div>

            <div className="adddriver-field">
              <label className="adddriver-label">
                <FaLock style={{ marginRight: 6 }} />
                Set Password
              </label>
              <input
                type="password"
                name="password"
                className="adddriver-input"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="adddriver-field">
              <label className="adddriver-label">
                <FaTruck style={{ marginRight: 6 }} />
                Assign Truck
              </label>
              <select
                name="assignedTruck"
                className="adddriver-input"
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

            <button type="submit" className="adddriver-btn-save" disabled={loading}>
              <FaPlus style={{ marginRight: 6 }} />
              {loading ? 'Saving...' : 'Add Driver'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDriver;