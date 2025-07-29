const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Truck = require('../models/truck');

// 🔧 Ensure upload folders exist
const ensureFolderExists = (folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
};

const uploadPaths = {
  pucFile: 'uploads/puc',
  permitAllIndiaFile: 'uploads/permitAllIndia',
  permitGujaratFile: 'uploads/permitGujarat',
  insuranceFile: 'uploads/insurance',
  fitnessFile: 'uploads/fitness',
  rcFile: 'uploads/rc',
  truckImage: 'uploads/images'
};

Object.values(uploadPaths).forEach(ensureFolderExists);

// ✅ Multer config
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    return cb(null, true);
  }
  cb(new Error(`Invalid file type for ${file.fieldname}`), false);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = uploadPaths[file.fieldname] || 'uploads/others';
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, name);
  }
});

const upload = multer({ storage, fileFilter });

const fileFields = [
  { name: 'pucFile' },
  { name: 'permitAllIndiaFile' },
  { name: 'permitGujaratFile' },
  { name: 'insuranceFile' },
  { name: 'fitnessFile' },
  { name: 'rcFile' },
  { name: 'truckImage' }
];

// ✅ POST /api/trucks → Add new truck
router.post('/', upload.fields(fileFields), async (req, res) => {
  try {
    const {
      truckNumber, model, yearOfManufacture, vehicleType, ownerName,
      pucExpiry, allIndiaPermitExpiry, gujaratPermitExpiry,
      insuranceExpiry, fitnessExpiry, roadTaxExpiry
    } = req.body;

    if (!truckNumber || !model || !ownerName) {
      return res.status(400).json({ error: 'truckNumber, model, and ownerName are required.' });
    }

    const files = req.files || {};

    const newTruck = new Truck({
      truckNumber,
      model,
      yearOfManufacture,
      vehicleType,
      ownerName,
      pucExpiry,
      allIndiaPermitExpiry,
      gujaratPermitExpiry,
      insuranceExpiry,
      fitnessExpiry,
      roadTaxExpiry,
      pucFile: files.pucFile?.[0]?.filename || '',
      permitAllIndiaFile: files.permitAllIndiaFile?.[0]?.filename || '',
      permitGujaratFile: files.permitGujaratFile?.[0]?.filename || '',
      insuranceFile: files.insuranceFile?.[0]?.filename || '',
      fitnessFile: files.fitnessFile?.[0]?.filename || '',
      rcFile: files.rcFile?.[0]?.filename || '',
      truckImage: files.truckImage?.[0]?.filename || ''
    });

    // ✅ Generate QR Code
    const detailUrl = `http://localhost:3000/truck-dashboard/${newTruck._id}`;
    const qrCodeDataURL = await QRCode.toDataURL(detailUrl);

    newTruck.qrCode = qrCodeDataURL;
    await newTruck.save();

    res.status(201).json({
      message: '✅ Truck added successfully',
      truck: newTruck,
      qrCodeUrl: qrCodeDataURL
    });
  } catch (error) {
    console.error('❌ Error adding truck:', error.message);
    if (error.code === 11000) {
      return res.status(400).json({ error: '❌ Duplicate truckNumber not allowed.' });
    }
    res.status(500).json({ error: error.message || 'Failed to add truck' });
  }
});

// ✅ GET /api/trucks → Get all trucks
router.get('/', async (req, res) => {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (err) {
    console.error("❌ Failed to fetch trucks:", err);
    res.status(500).json({ error: 'Failed to fetch trucks' });
  }
});

// ✅ GET /api/trucks/:id → Get truck by ID
router.get('/:id', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);
    if (!truck) return res.status(404).json({ error: 'Truck not found' });

    res.json(truck);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ GET /api/trucks/:id/qrcode → Get QR code
router.get('/:id/qrcode', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);
    if (!truck) return res.status(404).json({ error: 'Truck not found' });

    const qrCodeUrl = await QRCode.toDataURL(`http://localhost:3000/truck-dashboard/${truck._id}`);
    res.json({ qrCodeUrl });
  } catch (err) {
    console.error("❌ QR code fetch error:", err);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

// ✅ GET /api/trucks/scan/:qrCode → Find truck by QR code (for driver QR scan)
router.get('/scan/:qrCode', async (req, res) => {
  try {
    const truck = await Truck.findOne({ qrCode: req.params.qrCode });
    if (!truck) {
      return res.status(404).json({ message: 'Truck not found' });
    }
    res.json(truck);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ PUT /api/trucks/:id → Update truck
router.put('/:id', upload.fields(fileFields), async (req, res) => {
  try {
    const updateData = req.body;
    const files = req.files || {};

    for (const field in files) {
      updateData[field] = files[field]?.[0]?.filename;
    }

    const updatedTruck = await Truck.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedTruck) {
      return res.status(404).json({ error: 'Truck not found' });
    }

    res.json({ message: '✅ Truck updated successfully', truck: updatedTruck });
  } catch (error) {
    console.error("❌ Error updating truck:", error.message);
    res.status(500).json({ error: 'Failed to update truck' });
  }
});

// ✅ DELETE /api/trucks/:id → Delete truck
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Truck.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Truck not found' });

    res.json({ message: '✅ Truck deleted successfully' });
  } catch (err) {
    console.error("❌ Error deleting truck:", err.message);
    res.status(500).json({ error: 'Failed to delete truck' });
  }
});

module.exports = router;