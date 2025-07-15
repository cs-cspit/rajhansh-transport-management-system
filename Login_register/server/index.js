require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

// ✅ Models
const OwnerModel = require("./models/Owner");

// ✅ Routes
const truckRoutes = require("./routes/truckRoutes");
const driverRoutes = require("./routes/drivers");

const app = express();

// ------------------- MIDDLEWARE ------------------- //
app.use(cors());                  // ✅ Allow frontend requests
app.use(express.json());         // ✅ Parse incoming JSON
app.use(helmet());               // ✅ Secure HTTP headers

// ✅ Serve static files from 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ------------------- ENV ------------------- //
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// ------------------- CONNECT TO MONGODB ------------------- //
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// ------------------- AUTH ROUTES ------------------- //
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingEmail = await OwnerModel.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: "Email is already registered" });

    const existingName = await OwnerModel.findOne({ name });
    if (existingName) return res.status(400).json({ message: "Name is already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await OwnerModel.create({ name, email, password: hashedPassword });

    return res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await OwnerModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "No user found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });
    return res.status(200).json({ message: "Success", token });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

// ------------------- MAIN API ROUTES ------------------- //
app.use("/api/trucks", truckRoutes);   // ✅ TRUCK ROUTES
app.use("/api/drivers", driverRoutes); // ✅ DRIVER ROUTES

// ------------------- TEST ROUTE ------------------- //
app.get("/", (req, res) => {
  res.send("🚛 Rajhans Transport API is running");
});

// ------------------- START SERVER ------------------- //
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
