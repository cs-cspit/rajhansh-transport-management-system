// src/components/Header.jsx
import React from "react";        
import '../styles/layout.css'; // Use lowercase to match your file

function Header({ toggleSidebar }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="header">
      {/* Left: Sidebar toggle + Logo + Name */}
      <div className="header-left">
        <button
          onClick={toggleSidebar}
          className="menu-toggle"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <img
          src="/logo-dark2.jpg"
          alt="Rajhans Logo"
          className="header-logo"
        />
        <span className="header-title">
          Rajhans Transport
        </span>
      </div>
      {/* Right: Logout */}
      <button
        onClick={handleLogout}
        className="logout-btn"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;  