import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';
import axios from '../axiosConfig';

function TruckQRScan() {
  const [qrResult, setQrResult] = useState('');
  const [truck, setTruck] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (data) => {
    if (data && data !== qrResult) {
      setQrResult(data);
      setError('');
      try {
        // If your QR code contains just the qrCode string:
        // const res = await axios.get(`/api/trucks/scan/${data}`);
        // If your QR code contains a URL, extract the qrCode or truckId as needed:
        // Example: http://localhost:3000/truck-dashboard/12345
        const qrCode = data; // Adjust this if you encode something else
        const res = await axios.get(`/api/trucks/scan/${encodeURIComponent(qrCode)}`);
        setTruck(res.data);
      } catch (err) {
        setTruck(null);
        setError('Truck not found or invalid QR code.');
      }
    }
  };

  const handleError = (err) => {
    setError('Camera error: ' + err.message);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center' }}>
      <h2>Scan Truck QR Code</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <div style={{ color: 'red', marginTop: 16 }}>{error}</div>}
      {truck && (
        <div style={{ marginTop: 24, textAlign: 'left', background: '#fff3e0', padding: 18, borderRadius: 8 }}>
          <h3 style={{ color: '#f47c27' }}>Truck Details</h3>
          <div><b>Truck Number:</b> {truck.truckNumber}</div>
          <div><b>Model:</b> {truck.model}</div>
          <div><b>Owner:</b> {truck.ownerName}</div>
          {/* Add more truck fields as needed */}
        </div>
      )}
    </div>
  );
}

export default TruckQRScan;