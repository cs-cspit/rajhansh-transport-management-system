const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Truck = require('../models/truck');

// Ensure folders exist
const ensureFolderExists = (folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
};

const uploadPaths = {
  pucFile: 'uploads/puc',
  permitAllIndiaFile: 'uploads/permitAllIndia',
  permitGujaratFile: 'uploads/permitGujarat',
  insuranceFile: 'uploads/insurance',
  fitnessFile: 'uploads/fitness',
  rcFile: 'uploads/rc'
};

Object.values(uploadPaths).forEach(ensureFolderExists);

// Allow only PDFs
const fileFilter = (req, file, cb) => {
  const isPDF = file.mimetype === 'application/pdf';
  if (isPDF) return cb(null, true);
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
  { name: 'rcFile' }
];

// ✅ POST /api/trucks → Add truck and generate QR
router.post('/', upload.fields(fileFields), async (req, res) => {
  try {
    const {
      truckNumber, model, yearOfManufacture, vehicleType, ownerName,
      pucExpiry, allIndiaPermitExpiry, gujaratPermitExpiry,
      insuranceExpiry, fitnessExpiry, roadTaxExpiry
    } = req.body;

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
      rcFile: files.rcFile?.[0]?.filename || ''
    });

    await newTruck.save();

    const host = req.headers.host || 'localhost:3001';
    const detailUrl = `http://${host}/trucks/${newTruck._id}`;

    const qrCodeDataURL = await QRCode.toDataURL(detailUrl);
    newTruck.qrCode = qrCodeDataURL;
    await newTruck.save();

    res.status(201).json({
      message: '✅ Truck added successfully',
      truck: newTruck,
    });
  } catch (error) {
    console.error('❌ Error adding truck:', error.message);
    res.status(500).json({ error: error.message || 'Failed to add truck' });
  }
});

// ✅ GET /api/trucks → View all trucks
router.get('/', async (req, res) => {
  try {
    const trucks = await Truck.find().sort({ createdAt: -1 });
    res.json(trucks);
  } catch (error) {
    console.error('❌ Error fetching trucks:', error.message);
    res.status(500).json({ error: 'Failed to fetch trucks' });
  }
});

// ✅ GET /api/trucks/:id → Get single truck
router.get('/:id', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);
    if (!truck) return res.status(404).json({ message: 'Truck not found' });
    res.json(truck);
  } catch (error) {
    console.error('❌ Error fetching truck by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch truck' });
  }
});

// ✅ PUT /api/trucks/:id → Update truck
router.put('/:id', upload.fields(fileFields), async (req, res) => {
  try {
    const files = req.files || {};
    const updates = {
      ...req.body,
      pucFile: files.pucFile?.[0]?.filename,
      permitAllIndiaFile: files.permitAllIndiaFile?.[0]?.filename,
      permitGujaratFile: files.permitGujaratFile?.[0]?.filename,
      insuranceFile: files.insuranceFile?.[0]?.filename,
      fitnessFile: files.fitnessFile?.[0]?.filename,
      rcFile: files.rcFile?.[0]?.filename
    };

    Object.keys(updates).forEach((key) => {
      if (updates[key] === undefined) delete updates[key];
    });

    const updatedTruck = await Truck.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedTruck) return res.status(404).json({ message: 'Truck not found' });

    res.json({ message: '✅ Truck updated successfully', truck: updatedTruck });
  } catch (error) {
    console.error('❌ Error updating truck:', error.message);
    res.status(500).json({ message: 'Failed to update truck' });
  }
});

// ✅ DELETE /api/trucks/:id → Delete truck
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Truck.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Truck not found' });
    }
    res.json({ message: '✅ Truck deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting truck:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
