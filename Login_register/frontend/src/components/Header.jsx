// src/components/Header.jsx
import React from "react";
import "../layout.css";

function Header({ toggleSidebar }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
        <img src="/logo-dark2.jpg" alt="Logo" className="header-logo" />
        <h4 className="header-title">Rajhans Transport</h4>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;
