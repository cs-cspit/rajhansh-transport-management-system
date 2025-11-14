const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  assignedTruck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Truck',
    default: null,       // ✅ Allows null assignment (unassigning)
    required: false,
  },
  experienceYears: {
    type: Number,
    min: 0,
    max: 50,
    default: 0,
  },
  address: {
    type: String,
    required: false,
  },
  documents: [
    {
      name: String,
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
driverSchema.index({ phone: 1, email: 1, licenseNumber: 1 });

// Hide password in output
driverSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

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
