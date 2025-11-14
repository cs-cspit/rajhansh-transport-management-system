// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/database");
const { errorHandler } = require("./middleware/errorHandler");

// Import routes
const authRoutes = require("./routes/authRoutes");
const truckRoutes = require("./routes/truckRoutes");
const driverRoutes = require("./routes/driverRoutes");
const tripRoutes = require("./routes/tripRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const fuelRoutes = require("./routes/fuelRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const salaryRoutes = require("./routes/salaryRoutes");
const expenseRoutes = require("./routes/expenseRoutes");


// Initialize app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Serve static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/trucks", truckRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/fuel", fuelRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/salaries", salaryRoutes);
app.use("/api/expenses", expenseRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
// app.all("*", (req, res) => {
//   res.status(404).json({
//     status: "fail",
//     message: `Route ${req.originalUrl} not found`,
//   });
// });

// Global error handler
// app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("💥 UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

module.exports = app;
