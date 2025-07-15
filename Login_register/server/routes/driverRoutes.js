const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');
const Truck = require('../models/Truck');

// GET /api/drivers → List all drivers with assigned truck
router.get('/', async (req, res) => {
  try {
    const drivers = await Driver.find().populate('assignedTruck', 'truckNumber');
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching drivers' });
  }
});

module.exports = router;
