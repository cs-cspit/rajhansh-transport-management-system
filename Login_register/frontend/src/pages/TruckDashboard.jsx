import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';

function TruckDashboard() {
  const { truckId } = useParams();
  const [truck, setTruck] = useState(null);
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    const fetchTruckDetails = async () => {
      try {
        const res = await axios.get(`/api/trucks/${truckId}`);
        setTruck(res.data);
      } catch (err) {
        console.error('Error fetching truck details:', err);
      }
    };

    const fetchQRCode = async () => {
      try {
        const res = await axios.get(`/api/trucks/${truckId}/qrcode`);
        setQrCode(res.data.qrCodeUrl);
      } catch (err) {
        console.error('Error fetching QR code:', err);
      }
    };

    fetchTruckDetails();
    fetchQRCode();
  }, [truckId]);

  if (!truck) {
    return <div className="text-center mt-5">Loading truck data...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Truck Dashboard</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Truck Number: {truck.truckNumber}</h5>
          <p className="card-text"><strong>Model:</strong> {truck.model}</p>
          <p className="card-text"><strong>PUC Expiry:</strong> {truck.pucExpiry?.slice(0, 10)}</p>
          <p className="card-text"><strong>All India Permit Expiry:</strong> {truck.allIndiaPermitExpiry?.slice(0, 10)}</p>
          <p className="card-text"><strong>Gujarat Permit Expiry:</strong> {truck.gujaratPermitExpiry?.slice(0, 10)}</p>
          <p className="card-text"><strong>Thickness Note:</strong> {truck.thicknessNote}</p>
        </div>
      </div>

      {qrCode && (
        <div className="text-center">
          <h5>Truck QR Code</h5>
          <img src={qrCode} alt="QR Code" />
        </div>
      )}
    </div>
  );
}

export default TruckDashboard;
