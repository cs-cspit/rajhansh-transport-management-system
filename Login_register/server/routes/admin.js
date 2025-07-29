const express = require('express');
const router = express.Router();
const Truck = require('../models/truck');    
const Driver = require('../models/Driver');   

// GET /api/admin/counts
router.get('/counts', async (req, res) => {
  try {
    const truckCount = await Truck.countDocuments();
    const driverCount = await Driver.countDocuments();

    res.json({
      truckCount,
      driverCount,
    });
  } catch (err) {
    console.error('Error in /api/admin/counts:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
