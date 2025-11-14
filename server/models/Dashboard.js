// models/Dashboard.js

const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  totalTrucks: {
    type: Number,
    default: 0,
  },
  totalDrivers: {
    type: Number,
    default: 0,
  },
  totalEarnings: {
    type: Number,
    default: 0,
  },
  totalTrips: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const Dashboard = mongoose.model("Dashboard", DashboardSchema);
module.exports = Dashboard;
// This model can be used to store and retrieve dashboard statistics
// You can create a new document on server startup or update it periodically