const express = require('express');
const jwt = require('jsonwebtoken');
const Driver = require('../models/Driver');

const router = express.Router();

// REGISTER DRIVER
router.post('/register', async (req, res) => {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.status(201).json({ success: true, driver });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// LOGIN DRIVER
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const driver = await Driver.findOne({ email });
    if (!driver) return res.status(401).json({ error: 'Invalid email or password' });

    const isMatch = await driver.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign(
      { id: driver._id, role: 'driver' },
      'your_jwt_secret', // replace with your real secret
      { expiresIn: '7d' }
    );

    res.json({
      token,
      driver: {
        _id: driver._id,
        name: driver.name,
        email: driver.email,
        phone: driver.phone,
        assignedTruck: driver.assignedTruck,
        role: driver.role,
        status: driver.status,
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
