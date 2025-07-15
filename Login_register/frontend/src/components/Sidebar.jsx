// src/components/Sidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTruck,
  FaUserTie,
  FaChartBar,
  FaGasPump,
  FaListUl,
  FaPlus,
  FaUsers
} from "react-icons/fa";
import "../layout.css";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <div className="sidebar">
      <div className="sidebar-title">Rajhans Menu</div>
      <ul className="sidebar-list">

        {/* 🏠 Dashboard */}
        <li className={isActive("/")}>
          <Link to="/">
            <FaHome style={{ marginRight: "8px" }} />
            Dashboard
          </Link>
        </li>

        {/* 🚛 Truck Management */}
        <li className={isActive("/view-trucks")}>
          <Link to="/view-trucks">
            <FaTruck style={{ marginRight: "8px" }} />
            View Trucks
          </Link>
        </li>

        {/* 🧑‍✈️ Driver Management */}
        <li className={isActive("/view-drivers")}>
          <Link to="/view-drivers">
            <FaUsers style={{ marginRight: "8px" }} />
            View Drivers
          </Link>
        </li>

        <li className={isActive("/add-driver")}>
          <Link to="/add-driver">
            <FaPlus style={{ marginRight: "8px" }} />
            Add Driver
          </Link>
        </li>

        {/* 📊 Reports */}
        <li className={isActive("/reports")}>
          <Link to="/reports">
            <FaChartBar style={{ marginRight: "8px" }} />
            Reports
          </Link>
        </li>

        {/* ⛽ Fuel Logs */}
        <li className={isActive("/fuel")}>
          <Link to="/fuel">
            <FaGasPump style={{ marginRight: "8px" }} />
            Fuel Log
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;
