// src/components/Footer.jsx
import React from "react";
import '../styles/Layout.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Rajhans Transport. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
