// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Singup from './Singup';
import Login from './Login';
import AddTruck from './pages/AddTruck';
import Dashboard from './pages/Dashboard';
import ViewTrucks from './pages/ViewTrucks';
import AddDriver from './pages/AddDriver'; // ✅ NEW: import AddDriver
import Layout from './components/Layout';
import ViewDrivers from './pages/ViewDrivers';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/register" element={<Singup />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Routes (inside Layout with sidebar/header/footer) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-truck" element={<AddTruck />} />
          <Route path="view-trucks" element={<ViewTrucks />} />
          <Route path="add-driver" element={<AddDriver />} /> 
          {/* ✅ NEW: AddDriver route */}
          <Route path="view-drivers" element={<ViewDrivers />} />
        </Route>

        {/* ✅ Catch-all redirect */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
