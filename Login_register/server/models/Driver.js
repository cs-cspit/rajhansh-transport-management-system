const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  assignedTruck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Truck',
    required: true,
  },
  documents: [
    {
      name: String, // e.g. License, ID Card
      fileUrl: String,
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  role: {
    type: String,
    default: 'driver',
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'blocked'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for performance
driverSchema.index({ phone: 1, email: 1 });

// Hash password before saving
driverSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare password method
driverSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Driver', driverSchema);