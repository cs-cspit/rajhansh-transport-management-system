const express = require("express");
const router = express.Router();
const Driver = require("../models/Driver");

// ✅ CREATE: Add a new driver
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, password, assignedTruck } = req.body;

    // Basic validation
    if (!name || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for existing email or phone
    const existingEmail = await Driver.findOne({ email });
    const existingPhone = await Driver.findOne({ phone });

    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" });
    }

    if (existingPhone) {
      return res.status(409).json({ message: "Phone number already registered" });
    }

    // Create and save driver
    const newDriver = new Driver({
      name,
      phone,
      email,
      password,
      assignedTruck: assignedTruck || null
    });

    await newDriver.save();
    return res.status(201).json({ message: "✅ Driver created successfully" });
  } catch (err) {
    console.error("❌ Error creating driver:", err);
    return res.status(500).json({ message: "Error creating driver", error: err.message });
  }
});

// ✅ READ: Get all drivers
router.get("/", async (req, res) => {
  try {
    const drivers = await Driver.find().populate("assignedTruck", "truckNumber");
    res.json(drivers);
  } catch (error) {
    console.error("❌ Error in GET /api/drivers:", error);
    res.status(500).json({ message: "Error fetching drivers", error: error.message });
  }
});

// ✅ UPDATE: Update a driver
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, email, assignedTruck } = req.body;

    // Validate fields
    if (!name || !phone || !email) {
      return res.status(400).json({ message: "Name, phone, and email are required." });
    }

    const updatedDriver = await Driver.findByIdAndUpdate(
      req.params.id,
      {
        name,
        phone,
        email,
        assignedTruck: assignedTruck || null
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.json({ message: "✅ Driver updated successfully", driver: updatedDriver });
  } catch (error) {
    console.error("❌ Error in PUT /api/drivers/:id:", error);
    res.status(500).json({ message: "Error updating driver", error: error.message });
  }
});

// ✅ DELETE: Delete a driver
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Driver.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Driver not found" });
    res.json({ message: "🗑️ Driver deleted successfully" });
  } catch (error) {
    console.error("❌ Error in DELETE /api/drivers/:id:", error);
    res.status(500).json({ message: "Error deleting driver", error: error.message });
  }
});

module.exports = router;
