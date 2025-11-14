// server/models/Owner.js
const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    companyName: {
      // ✅ Add this for compatibility
      type: String,
      default: null,
    },
    contactNumber: {
      // ✅ Add this for compatibility
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // ✅ Add timestamps
  }
);

// ✅ IMPORTANT: Use "Owner" with capital O
const OwnerModel = mongoose.model("Owner", OwnerSchema);
module.exports = OwnerModel;
