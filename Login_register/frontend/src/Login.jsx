// src/Login.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './auth.css'; // ✅ custom styles

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        if (result.data.message === "Success") {
          localStorage.setItem('token', result.data.token || 'fake-token');
          navigate('/');
        } else {
          setErrorMsg(result.data.message);
        }
      })
      .catch(err => {
        setErrorMsg(err.response?.data?.message || "Login failed. Please try again.");
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="text-center mb-4">
          <img src="/logo-light1.jpg" alt="Rajhans Logo" className="auth-logo" />
        </div>
        <h2 className="text-center mb-3">Login</h2>

        {/* Reserved space for error message */}
        <div style={{ height: '22px', marginBottom: '20px' }}>
          {errorMsg && <div className="alert alert-danger p-1 m-0 text-center">{errorMsg}</div>}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="vansh@example.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-orange w-100 mb-3">Login</button>

          <div className="text-center">
            <p>Don't have an account?</p>
            <Link to="/register" className="btn btn-outline-light w-100">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
