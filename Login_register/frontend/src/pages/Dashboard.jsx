// src/pages/Dashboard.jsx
import React from 'react';
import { FaTruck, FaUserTie, FaGasPump, FaChartBar } from 'react-icons/fa';
import '../layout.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Rajhans Dashboard</h1>
      <p className="dashboard-subtitle">Fleet overview & performance</p>

      <div className="dashboard-cards">
        <div className="dashboard-card card-orange">
          <div className="card-icon-circle"><FaTruck /></div>
          <div className="card-text">
            <h4>Total Trucks</h4>
            <p>15</p>
          </div>
        </div>

        <div className="dashboard-card card-blue">
          <div className="card-icon-circle"><FaUserTie /></div>
          <div className="card-text">
            <h4>Drivers</h4>
            <p>10</p>
          </div>
        </div>

        <div className="dashboard-card card-green">
          <div className="card-icon-circle"><FaGasPump /></div>
          <div className="card-text">
            <h4>Fuel Logs</h4>
            <p>32</p>
          </div>
        </div>

        <div className="dashboard-card card-red">
          <div className="card-icon-circle"><FaChartBar /></div>
          <div className="card-text">
            <h4>Reports</h4>
            <p>9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
