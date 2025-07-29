import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTruck, FaUserCog, FaGasPump, FaTools, FaPlus, FaChartBar, FaUser } from "react-icons/fa";
import '../styles/layout.css';

function Sidebar({ isOpen }) {
  return (
    <nav className={`sidebar${isOpen ? " open" : ""}`}>
      <div className="sidebar-title">Menu</div>
      <ul className="sidebar-list">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaHome /></span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/view-trucks" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaTruck /></span>
            Truck Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/view-drivers" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaUserCog /></span>
            Driver Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/fuel-logs" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaGasPump /></span>
            Fuel Logs
          </NavLink>
        </li>
        <li>
          <NavLink to="/maintenance" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaTools /></span>
            Maintenance
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-trip" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaPlus /></span>
            Add Trip
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaChartBar /></span>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="sidebar-icon"><FaUser /></span>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;