import { useEffect, useState } from "react";
import "../styles/ViewTrucks.css";
import { FaTimes, FaSave, FaSpinner } from "react-icons/fa";
import axios from "../axiosConfig";

function EditTruckModal({ truckId, onClose, onUpdated }) {
  const [formData, setFormData] = useState({
    truckNumber: "",
    model: "",
    yearOfManufacture: "",
    vehicleType: "",
    ownerName: "",
    pucExpiry: "",
    allIndiaPermitExpiry: "",
    gujaratPermitExpiry: "",
    insuranceExpiry: "",
    fitnessExpiry: "",
    roadTaxExpiry: ""
  });

  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTruck = async () => {
      try {
        const res = await axios.get(`/api/trucks/${truckId}`);
        const truck = res.data;

        setFormData({
          truckNumber: truck.truckNumber || "",
          model: truck.model || "",
          yearOfManufacture: truck.yearOfManufacture || "",
          vehicleType: truck.vehicleType || "",
          ownerName: truck.ownerName || "",
          pucExpiry: truck.pucExpiry?.split("T")[0] || "",
          allIndiaPermitExpiry: truck.allIndiaPermitExpiry?.split("T")[0] || "",
          gujaratPermitExpiry: truck.gujaratPermitExpiry?.split("T")[0] || "",
          insuranceExpiry: truck.insuranceExpiry?.split("T")[0] || "",
          fitnessExpiry: truck.fitnessExpiry?.split("T")[0] || "",
          roadTaxExpiry: truck.roadTaxExpiry?.split("T")[0] || ""
        });
      } catch (err) {
        setError("Error fetching truck details.");
      }
    };

    fetchTruck();
  }, [truckId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const updateData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        updateData.append(key, value);
      });
      Object.entries(files).forEach(([key, file]) => {
        if (file) updateData.append(key, file);
      });

      await axios.put(`/api/trucks/${truckId}`, updateData);

      onUpdated("✅ Truck updated successfully.");
      onClose();
    } catch (err) {
      setError("❌ Failed to update truck.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-truck-modal-bg">
      <div className="edit-truck-modal">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className="edit-truck-modal-title">
            <span style={{ color: "#f47c27", marginRight: 8 }}>✏️</span>
            Edit Truck
          </h4>
          <button
            type="button"
            className="edit-truck-modal-close"
            onClick={onClose}
            title="Close"
          >
            <FaTimes />
          </button>
        </div>

        {error && (
          <div className="trucks-alert-error alert" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="edit-truck-label">Truck Number</label>
              <input
                type="text"
                name="truckNumber"
                className="edit-truck-input"
                value={formData.truckNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Model</label>
              <input
                type="text"
                name="model"
                className="edit-truck-input"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Year of Manufacture</label>
              <input
                type="number"
                name="yearOfManufacture"
                className="edit-truck-input"
                value={formData.yearOfManufacture}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Vehicle Type</label>
              <input
                type="text"
                name="vehicleType"
                className="edit-truck-input"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                className="edit-truck-input"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">PUC Expiry</label>
              <input
                type="date"
                name="pucExpiry"
                className="edit-truck-input"
                value={formData.pucExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">All India Permit Expiry</label>
              <input
                type="date"
                name="allIndiaPermitExpiry"
                className="edit-truck-input"
                value={formData.allIndiaPermitExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Gujarat Permit Expiry</label>
              <input
                type="date"
                name="gujaratPermitExpiry"
                className="edit-truck-input"
                value={formData.gujaratPermitExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Insurance Expiry</label>
              <input
                type="date"
                name="insuranceExpiry"
                className="edit-truck-input"
                value={formData.insuranceExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Fitness Expiry</label>
              <input
                type="date"
                name="fitnessExpiry"
                className="edit-truck-input"
                value={formData.fitnessExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="edit-truck-label">Road Tax Expiry</label>
              <input
                type="date"
                name="roadTaxExpiry"
                className="edit-truck-input"
                value={formData.roadTaxExpiry}
                onChange={handleChange}
              />
            </div>

            {/* File Inputs */}
            <div className="col-md-12">
              <label className="edit-truck-label">Truck Image</label>
              <input
                type="file"
                name="truckImage"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">PUC File</label>
              <input
                type="file"
                name="pucFile"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">All India Permit File</label>
              <input
                type="file"
                name="permitAllIndiaFile"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">Gujarat Permit File</label>
              <input
                type="file"
                name="permitGujaratFile"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">Insurance File</label>
              <input
                type="file"
                name="insuranceFile"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">Fitness File</label>
              <input
                type="file"
                name="fitnessFile"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="edit-truck-label">RC File</label>
              <input
                type="file"
                name="rcFile"
                className="edit-truck-input"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="edit-truck-modal-actions">
            <button
              type="button"
              className="edit-truck-btn-cancel"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="edit-truck-btn-save"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="fa-spin" style={{ marginRight: 6 }} />
                  Saving...
                </>
              ) : (
                <>
                  <FaSave style={{ marginRight: 6 }} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTruckModal;