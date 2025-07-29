const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const OwnerModel = require("../models/Owner");

const JWT_SECRET = process.env.JWT_SECRET;

// Owner registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await OwnerModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await OwnerModel.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Owner login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await OwnerModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
