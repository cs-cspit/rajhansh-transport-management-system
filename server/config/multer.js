// server/config/multer.js
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const receiptDir = "uploads/receipts";

if (!fs.existsSync(receiptDir)) {
  fs.mkdirSync(receiptDir, { recursive: true });
}

const uploadPaths = {
  pucFile: "uploads/puc",
  permitAllIndiaFile: "uploads/permitAllIndia",
  permitGujaratFile: "uploads/permitGujarat",
  insuranceFile: "uploads/insurance",
  fitnessFile: "uploads/fitness",
  rcFile: "uploads/rc",
  truckImage: "uploads/images",
};

// Ensure folders exist
Object.values(uploadPaths).forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    return cb(null, true);
  }
  cb(new Error(`Invalid file type for ${file.fieldname}`), false);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = uploadPaths[file.fieldname] || "uploads/others";
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, name);
  },
});

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const fileFields = [
  { name: "pucFile" },
  { name: "permitAllIndiaFile" },
  { name: "permitGujaratFile" },
  { name: "insuranceFile" },
  { name: "fitnessFile" },
  { name: "rcFile" },
  { name: "truckImage" },
];

module.exports = { upload, fileFields };
