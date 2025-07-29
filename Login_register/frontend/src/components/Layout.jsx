// src/components/Layout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="layout-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="layout-main">
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <Sidebar />
        </div>
        <div className="layout-content" onClick={() => sidebarOpen && setSidebarOpen(false)}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
