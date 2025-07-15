import { useState, useEffect } from 'react';
import axios from '../axiosConfig';

function AddTruck() {
  const [formData, setFormData] = useState({
    truckNumber: '',
    model: '',
    yearOfManufacture: '',
    vehicleType: '',
    ownerName: '',
    pucExpiry: '',
    allIndiaPermitExpiry: '',
    gujaratPermitExpiry: '',
    insuranceExpiry: '',
    fitnessExpiry: '',
    roadTaxExpiry: ''
  });

  const [files, setFiles] = useState({
    pucFile: null,
    permitAllIndiaFile: null,
    permitGujaratFile: null,
    insuranceFile: null,
    fitnessFile: null,
    rcFile: null,
    truckImage: null
  });

  const [preview, setPreview] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles({ ...files, [e.target.name]: file });

    if (e.target.name === 'truckImage' && file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const validateInputs = () => {
    if (!formData.truckNumber.trim()) return setErrorMessage('Truck number is required');
    if (!formData.model.trim()) return setErrorMessage('Model is required');
    if (!formData.yearOfManufacture || parseInt(formData.yearOfManufacture) < 1900)
      return setErrorMessage('Enter a valid year of manufacture');
    if (!formData.vehicleType.trim()) return setErrorMessage('Vehicle type is required');
    if (!formData.ownerName.trim()) return setErrorMessage('Owner name is required');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      Object.entries(files).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      setQrCode(null); // ✅ Reset QR before submitting new truck

      const res = await axios.post('/api/trucks', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSuccessMessage('✅ Truck added successfully!');
      setErrorMessage('');
      setQrCode(res.data.truck?.qrCode || null);

      // Reset
      setFormData({
        truckNumber: '',
        model: '',
        yearOfManufacture: '',
        vehicleType: '',
        ownerName: '',
        pucExpiry: '',
        allIndiaPermitExpiry: '',
        gujaratPermitExpiry: '',
        insuranceExpiry: '',
        fitnessExpiry: '',
        roadTaxExpiry: ''
      });

      setFiles({
        pucFile: null,
        permitAllIndiaFile: null,
        permitGujaratFile: null,
        insuranceFile: null,
        fitnessFile: null,
        rcFile: null,
        truckImage: null
      });

      setPreview(null);
    } catch (err) {
      setErrorMessage('❌ Error adding truck. Please try again.');
      setSuccessMessage('');
      console.error(err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `${formData.truckNumber || 'truck'}-QR.png`;
    link.click();
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-warning fw-bold fs-5 py-3">
          🚛 Add New Truck
        </div>

        <div className="card-body">
          {successMessage && (
            <div className="alert alert-success text-center fw-bold">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger text-center fw-bold">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Basic Info */}
            {[
              { label: 'Truck Number', name: 'truckNumber' },
              { label: 'Model', name: 'model' },
              { label: 'Year of Manufacture', name: 'yearOfManufacture', type: 'number' },
              { label: 'Vehicle Type', name: 'vehicleType' },
              { label: 'Owner Name', name: 'ownerName' }
            ].map(({ label, name, type = 'text' }) => (
              <div className="mb-3" key={name}>
                <label className="form-label">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            ))}

            {/* Expiry Dates */}
            {[
              { label: 'PUC Expiry', name: 'pucExpiry' },
              { label: 'All India Permit Expiry', name: 'allIndiaPermitExpiry' },
              { label: 'Gujarat Permit Expiry', name: 'gujaratPermitExpiry' },
              { label: 'Insurance Expiry', name: 'insuranceExpiry' },
              { label: 'Fitness Expiry', name: 'fitnessExpiry' },
              { label: 'Road Tax Expiry', name: 'roadTaxExpiry' }
            ].map(({ label, name }) => (
              <div className="mb-3" key={name}>
                <label className="form-label">{label}</label>
                <input
                  type="date"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="form-control"
                  min={today}
                />
              </div>
            ))}

            {/* File Uploads */}
            {[
              { label: 'PUC File (PDF)', name: 'pucFile', accept: 'application/pdf' },
              { label: 'All India Permit File (PDF)', name: 'permitAllIndiaFile', accept: 'application/pdf' },
              { label: 'Gujarat Permit File (PDF)', name: 'permitGujaratFile', accept: 'application/pdf' },
              { label: 'Insurance File (PDF)', name: 'insuranceFile', accept: 'application/pdf' },
              { label: 'Fitness File (PDF)', name: 'fitnessFile', accept: 'application/pdf' },
              { label: 'RC File (PDF)', name: 'rcFile', accept: 'application/pdf' },
              { label: 'Truck Image (Image)', name: 'truckImage', accept: 'image/*' }
            ].map(({ label, name, accept }) => (
              <div className="mb-3" key={name}>
                <label className="form-label">{label}</label>
                <input
                  type="file"
                  name={name}
                  onChange={handleFileChange}
                  className="form-control"
                  accept={accept}
                />
              </div>
            ))}

            {/* Image Preview */}
            {preview && (
              <div className="mb-3 text-center">
                <img
                  src={preview}
                  alt="Truck Preview"
                  width="250"
                  className="img-thumbnail"
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100">
              Add Truck
            </button>
          </form>

          {/* QR Code */}
          {qrCode && (
            <div className="mt-4 text-center">
              <h5>QR Code for Truck:</h5>
              <img src={qrCode} alt="QR Code" width="200" className="mb-2" />
              <br />
              <button onClick={handleDownload} className="btn btn-success">
                Download QR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddTruck;
