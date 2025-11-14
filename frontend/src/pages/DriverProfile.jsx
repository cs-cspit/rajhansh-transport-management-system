import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import "../styles/driverStyles.css";
import {
  FaUserTie,
  FaArrowLeft,
  FaEdit,
  FaCheckCircle,
  FaTimes,
  FaExclamationCircle
} from "react-icons/fa";

function DriverProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [driver, setDriver] = useState(null);
  const [trucks, setTrucks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    phone: "",
    email: "",
    licenseNumber: "",
    experienceYears: 0,
    assignedTruck: "",
    address: ""
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  // Fetch driver details
  const fetchDriver = async () => {
    try {
      const res = await axios.get(`/api/drivers/${id}`);
      setDriver(res.data);
      setEditData({
        name: res.data.name || "",
        phone: res.data.phone || "",
        email: res.data.email || "",
        licenseNumber: res.data.licenseNumber || "",
        experienceYears: res.data.experienceYears ?? 0,
        assignedTruck: res.data.assignedTruck?._id || "",
        address: res.data.address || ""
      });
    } catch (err) {
      console.error("Error fetching driver:", err);
      setMessage({ type: "error", text: "Error loading driver details." });
    }
  };

  // Fetch all trucks
  const fetchTrucks = async () => {
    try {
      const res = await axios.get("/api/trucks");
      setTrucks(res.data || []);
    } catch (err) {
      console.error("Error fetching trucks:", err);
    }
  };

  useEffect(() => {
    fetchDriver();
    fetchTrucks();
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Save updates
  const handleSave = async () => {
    try {
      // Only require name and password if adding a new driver
      if (isAddingNewDriver) {
        if (!editData.name.trim() || !editData.password?.trim()) {
          setMessage({
            type: "error",
            text: "Name and password are required."
          });
          return;
        }
      }
      // For editing, allow partial update
      const payload = {
        name: editData.name?.trim(),
        phone: editData.phone?.trim(),
        email: editData.email?.trim().toLowerCase(),
        licenseNumber: editData.licenseNumber?.trim(),
        assignedTruck: editData.assignedTruck || null,
        experienceYears: Number(editData.experienceYears) || 0,
        address: editData.address?.trim() || "",
        ...(isAddingNewDriver && { password: editData.password?.trim() })
      };

      if (isAddingNewDriver) {
        await axios.post(`/api/drivers`, payload);
        setMessage({ type: "success", text: "Driver added successfully." });
      } else {
        await axios.put(`/api/drivers/${id}`, payload);
        setMessage({ type: "success", text: "Driver updated successfully." });
      }
      setEditMode(false);
      fetchDriver();
    } catch (err) {
      console.error("Error saving driver:", err);
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to save driver."
      });
    } finally {
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  const handleAddDriver = async () => {
    if (!editData.name.trim() || !editData.password?.trim()) {
      setMessage({
        type: "error",
        text: "Name and password are required."
      });
      return;
    }
    // ...send POST request with name and password (and any other optional fields)...
  };

  if (!driver) {
    return <div className="driver-profile-loading">Loading driver details...</div>;
  }

  return (
    <div className="driver-profile-container">
      <div className="driver-profile-header">
        <button
          className="drivers-btn drivers-btn-back"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft style={{ marginRight: 6 }} /> Back
        </button>
        <h2>
          <FaUserTie style={{ marginRight: 8 }} /> Driver Profile
        </h2>
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

      <div className="driver-profile-content">
        {/* Name */}
        <div className="driver-profile-field">
          <label>Name:</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />
          ) : (
            <span>{driver.name}</span>
          )}
        </div>

        {/* Phone */}
        <div className="driver-profile-field">
          <label>Phone:</label>
          {editMode ? (
            <input
              type="text"
              name="phone"
              value={editData.phone}
              onChange={handleChange}
            />
          ) : (
            <span>{driver.phone}</span>
          )}
        </div>

        {/* Email */}
        <div className="driver-profile-field">
          <label>Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={handleChange}
            />
          ) : (
            <span>{driver.email}</span>
          )}
        </div>

        {/* License Number */}
        <div className="driver-profile-field">
          <label>License Number:</label>
          {editMode ? (
            <input
              type="text"
              name="licenseNumber"
              value={editData.licenseNumber}
              onChange={handleChange}
            />
          ) : (
            <span>{driver.licenseNumber}</span>
          )}
        </div>

        {/* Experience Years */}
        <div className="driver-profile-field">
          <label>Experience:</label>
          {editMode ? (
            <input
              type="number"
              name="experienceYears"
              value={editData.experienceYears}
              onChange={handleChange}
              min="0"
              max="50"
            />
          ) : (
            <span>{driver.experienceYears || 0} years</span>
          )}
        </div>

        {/* Assigned Truck */}
        <div className="driver-profile-field">
          <label>Assigned Truck:</label>
          {editMode ? (
            <select
              name="assignedTruck"
              value={editData.assignedTruck}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              {trucks.map((truck) => (
                <option key={truck._id} value={truck._id}>
                  {truck.truckNumber}
                </option>
              ))}
            </select>
          ) : (
            <span>{driver.assignedTruck?.truckNumber || "N/A"}</span>
          )}
        </div>

        {/* Address */}
        <div className="driver-profile-field">
          <label>Address:</label>
          {editMode ? (
            <input
              type="text"
              name="address"
              value={editData.address}
              onChange={handleChange}
            />
          ) : (
            <span>{driver.address || "N/A"}</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="driver-profile-actions">
        {editMode ? (
          <>
            <button
              className="drivers-btn drivers-btn-save"
              onClick={handleSave}
            >
              <FaCheckCircle style={{ marginRight: 4 }} /> Save
            </button>
            <button
              className="drivers-btn drivers-btn-cancel"
              onClick={() => setEditMode(false)}
            >
              <FaTimes style={{ marginRight: 4 }} /> Cancel
            </button>
          </>
        ) : (
          <button
            className="drivers-btn drivers-btn-edit"
            onClick={() => setEditMode(true)}
          >
            <FaEdit style={{ marginRight: 4 }} /> Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default DriverProfile;

