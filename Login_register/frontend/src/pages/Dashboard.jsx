import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import '../styles/Dashboard.css';
import { FaTruck, FaUserTie } from 'react-icons/fa';

function Dashboard() {
  const [summary, setSummary] = useState({ truckCount: 0, driverCount: 0 });

  useEffect(() => {
    let intervalId;
    const fetchSummary = async () => {
      try {
        const res = await axios.get('/api/dashboard/summary');
        // Uncomment the next line to debug your API response:
        // console.log('Dashboard summary response:', res.data);
        setSummary(res.data);
      } catch (error) {
        console.error('Error fetching dashboard summary:', error);
      }
    };
    fetchSummary();
    intervalId = setInterval(fetchSummary, 5000); // fetch every 5 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>
          <span className="dashboard-header-icon"></span>
          Dashboard Summary
        </h1>
      </div>

      <div className="summary-cards">
        {/* Truck Card */}
        <div className="summary-card truck-card">
          <div className="summary-card-icon">
            <FaTruck />
          </div>
          <div className="card-title">Total Trucks</div>
          <div className="card-number">{summary.truckCount ?? 0}</div>
        </div>

        {/* Driver Card */}
        <div className="summary-card driver-card">
          <div className="summary-card-icon">
            <FaUserTie />
          </div>
          <div className="card-title">Total Drivers</div>
          <div className="card-number">{summary.driverCount ?? 0}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;