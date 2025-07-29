const express = require('express');
const router = express.Router();

const Truck = require('../models/truck');   // ✅ Adjust path if needed
const Driver = require('../models/Driver'); // ✅ Adjust path if needed

// GET /api/dashboard
router.get('/', async (req, res) => {
  try {
    const truckCount = await Truck.countDocuments();
    const driverCount = await Driver.countDocuments();

    res.json({ truckCount, driverCount });
  } catch (error) {
    console.error("Dashboard summary error:", error);
    res.status(500).json({ message: "Failed to fetch summary" });
  }
});

module.exports = router;
