require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();

// ------------------- MODELS ------------------- //
const OwnerModel = require("./models/Owner");
const dashboardModel = require("./models/Dashboard");

// ------------------- ROUTES ------------------- //
const truckRoutes = require("./routes/truckRoutes");
const driverRoutes = require("./routes/drivers");
const driverAuthRoutes = require('./routes/driverAuth');
const ownerAuthRoutes = require('./routes/ownerAuth');
const dashboardRoutes = require("./routes/dashboard");
const adminRoutes = require('./routes/admin');

// ------------------- MIDDLEWARE ------------------- //
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ------------------- ROUTE MOUNTING ------------------- //
app.use('/api/driver', driverAuthRoutes);
app.use('/api/owner', ownerAuthRoutes);
app.use("/api/trucks", truckRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use('/api/admin', adminRoutes);

// ------------------- ENVIRONMENT ------------------- //
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// ------------------- MONGODB CONNECTION ------------------- //
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// ------------------- OWNER AUTH ------------------- //
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

// ------------------- DEFAULT + 404 ------------------- //
app.get("/", (req, res) => {
  res.send("🚛 Rajhans Transport API is running");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ------------------- START SERVER ------------------- //
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
