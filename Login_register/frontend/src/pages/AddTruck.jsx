import { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import '../styles/AddTruck.css';
import {
  FaTruck,
  FaPlus,
  FaCalendarAlt,
  FaFilePdf,
  FaImage,
  FaCheckCircle,
  FaExclamationCircle,
  FaQrcode,
  FaDownload
} from "react-icons/fa";

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

      setQrCode(null);

      const res = await axios.post('/api/trucks', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSuccessMessage('Truck added successfully!');
      setErrorMessage('');
      setQrCode(res.data.truck?.qrCode || null);

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
      setErrorMessage('Error adding truck. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `${formData.truckNumber || 'truck'}-QR.png`;
    link.click();
  };

  return (
    <div className="addtruck-container">
      <div className="addtruck-card">
        <div className="addtruck-header">
          <FaTruck className="addtruck-header-icon" />
          Add New Truck
        </div>

        <div className="addtruck-body">
          {successMessage && (
            <div className="addtruck-alert-success">
              <FaCheckCircle style={{ marginRight: 6 }} />
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="addtruck-alert-error">
              <FaExclamationCircle style={{ marginRight: 6 }} />
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {[
              { label: 'Truck Number', name: 'truckNumber', icon: <FaPlus /> },
              { label: 'Model', name: 'model', icon: <FaTruck /> },
              { label: 'Year of Manufacture', name: 'yearOfManufacture', type: 'number', icon: <FaCalendarAlt /> },
              { label: 'Vehicle Type', name: 'vehicleType', icon: <FaTruck /> },
              { label: 'Owner Name', name: 'ownerName', icon: <FaTruck /> }
            ].map(({ label, name, type = 'text', icon }) => (
              <div className="addtruck-field" key={name}>
                <label className="addtruck-label">
                  {icon} {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="addtruck-input"
                  required
                />
              </div>
            ))}

            {[
              { label: 'PUC Expiry', name: 'pucExpiry' },
              { label: 'All India Permit Expiry', name: 'allIndiaPermitExpiry' },
              { label: 'Gujarat Permit Expiry', name: 'gujaratPermitExpiry' },
              { label: 'Insurance Expiry', name: 'insuranceExpiry' },
              { label: 'Fitness Expiry', name: 'fitnessExpiry' },
              { label: 'Road Tax Expiry', name: 'roadTaxExpiry' }
            ].map(({ label, name }) => (
              <div className="addtruck-field" key={name}>
                <label className="addtruck-label">
                  <FaCalendarAlt /> {label}
                </label>
                <input
                  type="date"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="addtruck-input"
                  min={today}
                />
              </div>
            ))}

            {[
              { label: 'PUC File (PDF)', name: 'pucFile', accept: 'application/pdf', icon: <FaFilePdf /> },
              { label: 'All India Permit File (PDF)', name: 'permitAllIndiaFile', accept: 'application/pdf', icon: <FaFilePdf /> },
              { label: 'Gujarat Permit File (PDF)', name: 'permitGujaratFile', accept: 'application/pdf', icon: <FaFilePdf /> },
              { label: 'Insurance File (PDF)', name: 'insuranceFile', accept: 'application/pdf', icon: <FaFilePdf /> },
              { label: 'Fitness File (PDF)', name: 'fitnessFile', accept: 'application/pdf', icon: <FaFilePdf /> },
              { label: 'RC File (PDF)', name: 'rcFile', accept: 'application/pdf', icon: <FaFilePdf /> },
              { label: 'Truck Image (Image)', name: 'truckImage', accept: 'image/*', icon: <FaImage /> }
            ].map(({ label, name, accept, icon }) => (
              <div className="addtruck-field" key={name}>
                <label className="addtruck-label">
                  {icon} {label}
                </label>
                <input
                  type="file"
                  name={name}
                  onChange={handleFileChange}
                  className="addtruck-input"
                  accept={accept}
                />
              </div>
            ))}

            {preview && (
              <div className="addtruck-preview">
                <img src={preview} alt="Truck Preview" width="250" className="addtruck-img-preview" />
              </div>
            )}

            <button type="submit" className="addtruck-btn-save">
              <FaPlus style={{ marginRight: 6 }} />
              Add Truck
            </button>
          </form>

          {qrCode && (
            <div className="addtruck-qr-section">
              <h5 className="addtruck-qr-title">
                <FaQrcode style={{ marginRight: 6 }} />
                QR Code for Truck:
              </h5>
              <img src={qrCode} alt="QR Code" width="200" className="mb-2" />
              <br />
              <button onClick={handleDownload} className="addtruck-btn-save">
                <FaDownload style={{ marginRight: 6 }} />
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