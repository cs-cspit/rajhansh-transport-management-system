const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Truck = require('../models/truck');

// 📁 Ensure folders exist
const ensureFolderExists = (folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
};

const uploadPaths = {
  pucFile: 'uploads/puc',
  permitAllIndiaFile: 'uploads/permitAllIndia',
  permitGujaratFile: 'uploads/permitGujarat',
  thicknessFile: 'uploads/thickness',
  truckImage: 'uploads/truckImages',
};

Object.values(uploadPaths).forEach(ensureFolderExists);

// 📎 File filter: Allow PDF only (except truckImage)
const fileFilter = (req, file, cb) => {
  const isTruckImage = file.fieldname === 'truckImage';
  const isPDF = file.mimetype === 'application/pdf';
  const isImage = file.mimetype.startsWith('image/');

  if (isTruckImage && isImage) return cb(null, true);
  if (!isTruckImage && isPDF) return cb(null, true);

  cb(
    new Error(
      isTruckImage
        ? 'Only image files allowed for truck image'
        : `Only PDF files allowed for ${file.fieldname}`
    ),
    false
  );
};

// 🧠 Multer config
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

// 🛠 File field config
const fileFields = [
  { name: 'pucFile', maxCount: 1 },
  { name: 'permitAllIndiaFile', maxCount: 1 },
  { name: 'permitGujaratFile', maxCount: 1 },
  { name: 'thicknessFile', maxCount: 1 },
  { name: 'truckImage', maxCount: 1 },
];

// ✅ POST /api/trucks → Add new truck
router.post('/', upload.fields(fileFields), async (req, res) => {
  try {
    const {
      truckNumber,
      model,
      pucExpiry,
      allIndiaPermitExpiry,
      gujaratPermitExpiry,
      thicknessNote
    } = req.body;

    const files = req.files || {};

    const newTruck = new Truck({
      truckNumber,
      model,
      pucExpiry,
      allIndiaPermitExpiry,
      gujaratPermitExpiry,
      thicknessNote,
      pucFile: files.pucFile?.[0]?.filename || '',
      permitAllIndiaFile: files.permitAllIndiaFile?.[0]?.filename || '',
      permitGujaratFile: files.permitGujaratFile?.[0]?.filename || '',
      thicknessFile: files.thicknessFile?.[0]?.filename || '',
      truckPhoto: files.truckImage?.[0]?.filename || '',
    });

    await newTruck.save();

    const host = req.headers.host || 'localhost:3000';
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

// ✅ GET /api/trucks → Get all trucks
router.get('/', async (req, res) => {
  try {
    const trucks = await Truck.find().sort({ createdAt: -1 });

    const updatedTrucks = trucks.map(truck => ({
      ...truck._doc,
      pucFile: truck.pucFile ? `/uploads/puc/${truck.pucFile}` : '',
      permitAllIndiaFile: truck.permitAllIndiaFile ? `/uploads/permitAllIndia/${truck.permitAllIndiaFile}` : '',
      permitGujaratFile: truck.permitGujaratFile ? `/uploads/permitGujarat/${truck.permitGujaratFile}` : '',
      thicknessFile: truck.thicknessFile ? `/uploads/thickness/${truck.thicknessFile}` : '',
      truckPhoto: truck.truckPhoto ? `/uploads/truckImages/${truck.truckPhoto}` : '',
    }));

    res.json(updatedTrucks);
  } catch (err) {
    console.error('❌ Error fetching trucks:', err);
    res.status(500).json({ error: 'Failed to fetch trucks' });
  }
});

// ✅ GET /api/trucks/:id → Get single truck
router.get('/:id', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);
    if (!truck) return res.status(404).json({ error: 'Truck not found' });

    const updatedTruck = {
      ...truck._doc,
      pucFile: truck.pucFile ? `/uploads/puc/${truck.pucFile}` : '',
      permitAllIndiaFile: truck.permitAllIndiaFile ? `/uploads/permitAllIndia/${truck.permitAllIndiaFile}` : '',
      permitGujaratFile: truck.permitGujaratFile ? `/uploads/permitGujarat/${truck.permitGujaratFile}` : '',
      thicknessFile: truck.thicknessFile ? `/uploads/thickness/${truck.thicknessFile}` : '',
      truckPhoto: truck.truckPhoto ? `/uploads/truckImages/${truck.truckPhoto}` : '',
    };

    res.json(updatedTruck);
  } catch (err) {
    console.error('❌ Error fetching truck:', err);
    res.status(500).json({ error: 'Error fetching truck' });
  }
});

// ✅ PUT /api/trucks/:id → Update truck
router.put('/:id', upload.fields(fileFields), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const files = req.files || {};

    const truck = await Truck.findById(id);
    if (!truck) return res.status(404).json({ message: 'Truck not found' });

    if (files.truckImage) updateData.truckPhoto = files.truckImage[0].filename;
    if (files.pucFile) updateData.pucFile = files.pucFile[0].filename;
    if (files.permitAllIndiaFile) updateData.permitAllIndiaFile = files.permitAllIndiaFile[0].filename;
    if (files.permitGujaratFile) updateData.permitGujaratFile = files.permitGujaratFile[0].filename;
    if (files.thicknessFile) updateData.thicknessFile = files.thicknessFile[0].filename;

    const updated = await Truck.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updated);
  } catch (err) {
    console.error('❌ Error updating truck:', err);
    res.status(500).json({ message: 'Error updating truck' });
  }
});

// ✅ DELETE /api/trucks/:id → Delete truck
router.delete('/:id', async (req, res) => {
  try {
    const truck = await Truck.findByIdAndDelete(req.params.id);
    if (!truck) return res.status(404).json({ error: 'Truck not found' });

    res.status(200).json({ message: 'Truck deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting truck:', err);
    res.status(500).json({ error: 'Error deleting truck' });
  }
});

module.exports = router;
