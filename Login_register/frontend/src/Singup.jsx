// src/Singup.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './auth.css'; // ✅ same CSS as Login

function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    axios.post("http://localhost:3001/register", { name, email, password })
      .then(res => {
        if (res.data.message === "Registration successful") {
          setSuccessMsg("Registered successfully! Redirecting...");
          setTimeout(() => navigate("/login"), 2000);
        } else {
          setErrorMsg(res.data.message);
        }
      })
      .catch(err => {
        setErrorMsg(err.response?.data?.message || "Something went wrong.");
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="text-center mb-4">
          <img src="/logo-light1.jpg" alt="Rajhans Logo" className="auth-logo" />
        </div>
        <h2 className="text-center mb-3">Sign Up</h2>

        {/* Reserved space for error/success messages */}
        <div style={{ height: '44px', marginBottom: '15px' }}>
          {errorMsg && (
            <div className="alert alert-danger p-1 m-0 text-center">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="alert alert-success p-1 m-0 text-center">
              {successMsg}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
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

          <button type="submit" className="btn btn-orange w-100 mb-3">Register</button>

          <div className="text-center">
            <p>Already have an account?</p>
            <Link to="/login" className="btn btn-outline-light w-100">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
