// src/components/DriverLayout.jsx
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/driverlayout.css";

function DriverLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/driver-login");
  };

  return (
    <div className="driver-root">
      <aside className="driver-sidebar">
        <div className="driver-logo-area">
          <img src="/logo-dark1.jpg" alt="Logo" className="driver-logo" />
          <span className="driver-brand">Rajhans Transport</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/driver-dashboard">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/my-trips">
                <i className="fas fa-road"></i>
                <span>Trips</span>
              </Link>
            </li>
            <li>
              <Link to="/driver-fuel-logs">
                <i className="fas fa-gas-pump"></i>
                <span>Fuel Logs</span>
              </Link>
            </li>
            <li>
              <Link to="/driver-maintenance">
                <i className="fas fa-tools"></i>
                <span>Maintenance</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/driver-profile">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </aside>
      <div className="driver-main-content">
        <header className="driver-header">
          <span>Driver Dashboard</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <main className="driver-content">{children}</main>
        <footer className="driver-footer">
          &copy; {new Date().getFullYear()} Rajhans Transport
        </footer>
      </div>
    </div>
  );
}

export default DriverLayout;
