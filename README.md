# 🚌 Rajhansh Transport Management System

A full-featured transport management system to help logistics companies manage trucks, drivers, documents, and reports efficiently.

---

## ✅ Features Completed

### 🚛 Truck Management
- Add/Edit/Delete trucks
- Upload documents (PUC, Permit, Insurance, RC) as PDF
- Upload truck image (JPEG/PNG)
- Auto-generate QR code for each truck
- View trucks with pagination & search
- Export truck data to **PDF** and **Excel**
- Confirmation popup before deleting trucks

### 👨‍✈️ Driver Management
- Add/Edit/Delete drivers
- Assign truck to each driver
- Real-time search, pagination
- Confirmation popup before deleting drivers

---

## 🛠️ Tech Stack

| Frontend     | Backend     | Database | Tools / Libraries         |
|--------------|-------------|----------|---------------------------|
| React.js     | Node.js     | MongoDB  | QRCode Generator, Multer  |
| Bootstrap 5  | Express.js  | Mongoose | jsPDF, XLSX, Axios        |

---

## 📁 Project Structure

transportmanagementsystem/
├── Login_register/
│ ├── client/ # React frontend
│ └── server/ # Node.js + Express backend
├── uploads/ # Folder for PDF/image uploads
├── README.md # This file


---

## 🚀 Getting Started

### ⚙️ Backend Setup
```bash
cd Login_register/server
npm install
npm start

### Frontend Setup

cd Login_register/client
npm install
npm start
