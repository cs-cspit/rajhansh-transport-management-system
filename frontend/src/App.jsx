// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";


// Layout Components
import Layout from "./components/Layout";
import DriverLayout from "./components/DriverLayout";

// Auth Pages
import OwnerLogin from "./pages/OwnerLogin";
import DriverLogin from "./pages/DriverLogin";
import OwnerSignup from "./pages/OwnerSignup";

// Owner Pages
import Dashboard from "./pages/Dashboard";
import TruckList from "./pages/TruckList";
import AddTruck from "./pages/AddTruck";
import ViewDrivers from "./pages/ViewDrivers";
import AddDriver from "./pages/AddDriver";
import Trips from "./pages/Trips";
import FuelManagement from "./pages/FuelManagement";
import MaintenanceManagement from "./pages/MaintenanceManagement";
import SalaryManagement from "./pages/SalaryManagement";
import ExpenseManagement from "./pages/ExpenseManagement";

// Driver Pages
import DriverDashboard from "./pages/DriverDashboard";
import DriverProfile from "./pages/DriverProfile";
import MyTrips from "./pages/MyTrips";
import DriverFuelLogs from "./pages/DriverFuelLogs";
import DriverMaintenance from "./pages/DriverMaintenance";

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token) {
    return (
      <Navigate to={role === "driver" ? "/driver-login" : "/login"} replace />
    );
  }

  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Public Route Component (redirect if already logged in)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (token) {
    return (
      <Navigate
        to={userRole === "driver" ? "/driver-dashboard" : "/dashboard"}
        replace
      />
    );
  }

  return children;
};

// Wrapper component to provide styled-components theme
const AppContent = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <OwnerLogin />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <OwnerSignup />
              </PublicRoute>
            }
          />
          <Route
            path="/driver-login"
            element={
              <PublicRoute>
                <DriverLogin />
              </PublicRoute>
            }
          />

          {/* Owner Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/trucks"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <TruckList />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/trucks/add"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <AddTruck />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/drivers"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <ViewDrivers />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-driver"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <AddDriver />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/trips"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <Trips />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/fuel"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <FuelManagement />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/maintenance"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <MaintenanceManagement />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/salaries"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <SalaryManagement />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/expenses"
            element={
              <ProtectedRoute role="owner">
                <Layout>
                  <ExpenseManagement />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Driver Protected Routes */}
          <Route
            path="/driver-dashboard"
            element={
              <ProtectedRoute role="driver">
                <DriverLayout>
                  <DriverDashboard />
                </DriverLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/driver-profile"
            element={
              <ProtectedRoute role="driver">
                <DriverLayout>
                  <DriverProfile />
                </DriverLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-trips"
            element={
              <ProtectedRoute role="driver">
                <DriverLayout>
                  <MyTrips />
                </DriverLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/driver-fuel-logs"
            element={
              <ProtectedRoute role="driver">
                <DriverLayout>
                  <DriverFuelLogs />
                </DriverLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/driver-maintenance"
            element={
              <ProtectedRoute role="driver">
                <DriverLayout>
                  <DriverMaintenance />
                </DriverLayout>
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
