import { useEffect, useState } from "react";
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
        console.error("Error fetching truck:", err);
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
      console.error("❌ Error updating truck:", err);
      setError("❌ Failed to update truck.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999 }}
    >
      <div
        className="bg-white p-4 rounded shadow overflow-auto"
        style={{ maxWidth: "600px", width: "100%", maxHeight: "95vh" }}
      >
        <h5 className="text-primary mb-3">✏️ Edit Truck Details</h5>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Truck Number</label>
              <input
                type="text"
                name="truckNumber"
                className="form-control"
                value={formData.truckNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Model</label>
              <input
                type="text"
                name="model"
                className="form-control"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Year of Manufacture</label>
              <input
                type="number"
                name="yearOfManufacture"
                className="form-control"
                value={formData.yearOfManufacture}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Vehicle Type</label>
              <input
                type="text"
                name="vehicleType"
                className="form-control"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                className="form-control"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">PUC Expiry</label>
              <input
                type="date"
                name="pucExpiry"
                className="form-control"
                value={formData.pucExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">All India Permit Expiry</label>
              <input
                type="date"
                name="allIndiaPermitExpiry"
                className="form-control"
                value={formData.allIndiaPermitExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Gujarat Permit Expiry</label>
              <input
                type="date"
                name="gujaratPermitExpiry"
                className="form-control"
                value={formData.gujaratPermitExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Insurance Expiry</label>
              <input
                type="date"
                name="insuranceExpiry"
                className="form-control"
                value={formData.insuranceExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Fitness Expiry</label>
              <input
                type="date"
                name="fitnessExpiry"
                className="form-control"
                value={formData.fitnessExpiry}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Road Tax Expiry</label>
              <input
                type="date"
                name="roadTaxExpiry"
                className="form-control"
                value={formData.roadTaxExpiry}
                onChange={handleChange}
              />
            </div>

            {/* File Inputs */}
            <div className="col-md-12">
              <label className="form-label">Truck Image</label>
              <input
                type="file"
                name="truckImage"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">PUC File</label>
              <input
                type="file"
                name="pucFile"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">All India Permit File</label>
              <input
                type="file"
                name="permitAllIndiaFile"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Gujarat Permit File</label>
              <input
                type="file"
                name="permitGujaratFile"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Insurance File</label>
              <input
                type="file"
                name="insuranceFile"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Fitness File</label>
              <input
                type="file"
                name="fitnessFile"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">RC File</label>
              <input
                type="file"
                name="rcFile"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTruckModal;
