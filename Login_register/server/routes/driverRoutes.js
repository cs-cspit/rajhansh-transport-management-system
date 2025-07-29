const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');
const Truck = require('../models/Truck');
const bcrypt = require('bcrypt');

// ✅ GET /api/drivers → List all drivers with assigned truck
router.get('/', async (req, res) => {
  try {
    const drivers = await Driver.find().populate('assignedTruck', 'truckNumber');
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching drivers' });
  }
});

// ✅ POST /api/drivers → Create a new driver
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, password, assignedTruck } = req.body;

    if (!name || !phone || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingEmail = await Driver.findOne({ email });
    const existingPhone = await Driver.findOne({ phone });

    if (existingEmail) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    if (existingPhone) {
      return res.status(409).json({ message: 'Phone already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDriver = new Driver({
      name,
      phone,
      email,
      password: hashedPassword,
      assignedTruck: assignedTruck || null
    });

    await newDriver.save();

    res.status(201).json({ message: '✅ Driver created successfully', driver: newDriver });
  } catch (err) {
    console.error('❌ Error creating driver:', err);
    res.status(500).json({ message: 'Error creating driver', error: err.message });
  }
});

// ✅ POST /api/drivers/login → Driver login with name and password
router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    const driver = await Driver.findOne({ name }).populate('assignedTruck');
    if (!driver) return res.status(404).json({ message: 'Driver not found' });

    const isMatch = await bcrypt.compare(password, driver.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    res.json({
      message: '✅ Login successful',
      driver
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

module.exports = router;
