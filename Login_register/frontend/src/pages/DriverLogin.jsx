// src/pages/DriverLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';

function DriverLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/driver/login', {
        email,
        password,
      });

      localStorage.setItem('driverToken', res.data.token);
      localStorage.setItem('driverId', res.data.driver._id);
      localStorage.setItem('driverName', res.data.driver.name);
      localStorage.setItem('assignedTruck', res.data.driver.assignedTruck || '');

      window.location.href = `/truck-dashboard/${res.data.driver.assignedTruck || 'none'}`;
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Driver Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleLogin}>
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default DriverLogin;
