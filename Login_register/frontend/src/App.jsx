// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/theme.css'; // or './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages & Components
import Singup from './Singup';
import Login from './Login';
import AddTruck from './pages/AddTruck';
import Dashboard from './pages/Dashboard';
import ViewTrucks from './pages/ViewTrucks';
import AddDriver from './pages/AddDriver';
import ViewDrivers from './pages/ViewDrivers';
import Layout from './components/Layout';
import TruckQRScan from './pages/TruckQRScan';
import TruckDashboard from './pages/TruckDashboard';
import DriverLogin from './pages/DriverLogin'; // ✅ Make sure this file exists!

// ✅ Route Protection Wrapper
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
        <Route path="/driver-login" element={<DriverLogin />} />

        {/* ✅ Driver QR Code Related */}
        <Route path="/scan-truck" element={<TruckQRScan />} />
        <Route path="/truck-dashboard/:truckId" element={<TruckDashboard />} />

        {/* ✅ Protected Owner Routes */}
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
          <Route path="view-drivers" element={<ViewDrivers />} />
        </Route>

        {/* ✅ Catch-all Route */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
