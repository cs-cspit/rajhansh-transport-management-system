const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  truckNumber: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  yearOfManufacture: { type: String },
  vehicleType: { type: String },
  ownerName: { type: String },

  // 📅 Expiry Dates
  pucExpiry: { type: Date },
  allIndiaPermitExpiry: { type: Date },
  gujaratPermitExpiry: { type: Date },
  insuranceExpiry: { type: Date },
  fitnessExpiry: { type: Date },
  roadTaxExpiry: { type: Date },

  // 📎 Document Filenames
  pucFile: { type: String },
  permitAllIndiaFile: { type: String },
  permitGujaratFile: { type: String },
  insuranceFile: { type: String },
  fitnessFile: { type: String },
  rcFile: { type: String },
  truckImage: { type: String },

  // 🧾 QR Code
  qrCode: { type: String },

  // 🕒 Metadata
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Truck', truckSchema);
