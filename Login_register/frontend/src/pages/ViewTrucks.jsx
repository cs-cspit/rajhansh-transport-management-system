import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import EditTruckModal from "../components/EditTruckModal";
import { exportToExcel, exportToPDF } from "../utils/downloadUtils";

function ViewTrucks() {
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  useEffect(() => {
    fetchTrucks();
  }, []);

  const fetchTrucks = async () => {
    try {
      const res = await axios.get("/api/trucks");
      setTrucks(res.data);
    } catch (err) {
      console.error("Error fetching trucks:", err);
    }
  };

  const confirmDelete = (id) => {
    console.log("Confirm delete clicked for ID:", id);
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`/api/trucks/${deleteId}`);
      setStatusMessage({ type: "success", text: "✅ Truck deleted successfully." });
      setShowConfirm(false);
      setDeleteId(null);
      fetchTrucks();
      setTimeout(() => setStatusMessage({ type: "", text: "" }), 3000);
    } catch (err) {
      console.error("Error deleting truck:", err);
      setStatusMessage({ type: "error", text: "❌ Failed to delete truck." });
      setShowConfirm(false);
      setTimeout(() => setStatusMessage({ type: "", text: "" }), 3000);
    }
  };

  const handleTruckUpdated = (msg) => {
    setEditId(null);
    fetchTrucks();
    setStatusMessage({ type: "success", text: msg });
    setTimeout(() => setStatusMessage({ type: "", text: "" }), 3000);
  };

  const filteredTrucks = trucks.filter((truck) =>
    truck.truckNumber.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentTrucks = filteredTrucks.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredTrucks.length / recordsPerPage);

  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleDateString("en-IN") : "";

  const renderFileLink = (label, fileName, folder) =>
    fileName ? (
      <p>
        <strong>{label}:</strong>{" "}
        <a
          href={`http://localhost:3001/uploads/${folder}/${fileName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 View PDF
        </a>
      </p>
    ) : null;

  return (
    <div className="container mt-4 position-relative">
      <h2 className="text-warning text-center mb-3">🚛 All Registered Trucks</h2>

      {statusMessage.text && (
        <div
          className={`alert ${statusMessage.type === "success" ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {statusMessage.text}
        </div>
      )}

      <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Search by Truck Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "300px" }}
        />
        <button
          className="btn btn-success"
          onClick={() => (window.location.href = "/add-truck")}
        >
          + Add New Truck
        </button>
      </div>

      <div className="d-flex justify-content-end mb-4 gap-2 flex-wrap">
        <button
          className="btn btn-outline-primary"
          onClick={() => exportToPDF(filteredTrucks, "Truck Report", "All_Trucks")}
          disabled={filteredTrucks.length === 0}
        >
          📄 Export to PDF
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => exportToExcel(filteredTrucks, "All_Trucks")}
          disabled={filteredTrucks.length === 0}
        >
          📊 Export to Excel
        </button>
      </div>

      <div className="row g-4">
        {currentTrucks.map((truck) => (
          <div className="col-md-6 col-lg-4" key={truck._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{truck.truckNumber}</h5>
                <p><strong>Model:</strong> {truck.model}</p>
                {truck.pucExpiry && <p><strong>PUC Expiry:</strong> {formatDate(truck.pucExpiry)}</p>}
                {truck.allIndiaPermitExpiry && <p><strong>All India Permit:</strong> {formatDate(truck.allIndiaPermitExpiry)}</p>}
                {truck.gujaratPermitExpiry && <p><strong>Gujarat Permit:</strong> {formatDate(truck.gujaratPermitExpiry)}</p>}

                {/* ✅ Document Links */}
                {renderFileLink("PUC File", truck.pucFile, "puc")}
                {renderFileLink("All India Permit", truck.permitAllIndiaFile, "permitAllIndia")}
                {renderFileLink("Gujarat Permit", truck.permitGujaratFile, "permitGujarat")}
                {renderFileLink("Insurance", truck.insuranceFile, "insurance")}
                {renderFileLink("Fitness", truck.fitnessFile, "fitness")}
                {renderFileLink("RC File", truck.rcFile, "rc")}

                {/* ✅ QR Code */}
                {truck.qrCode && (
                  <div className="text-center mt-3">
                    <img src={truck.qrCode} alt="QR Code" style={{ width: "100px" }} />
                    <p className="small text-muted">Truck QR Code</p>
                  </div>
                )}

                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-primary btn-sm" onClick={() => setEditId(truck._id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => confirmDelete(truck._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredTrucks.length === 0 && (
          <p className="text-center">No trucks found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 && "active"}`}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
        >
          <div className="bg-white rounded p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
            <h5 className="mb-3">⚠️ Confirm Deletion</h5>
            <p>Are you sure you want to delete this truck?</p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleDeleteConfirmed}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Truck Modal */}
      {editId && (
        <EditTruckModal
          truckId={editId}
          onClose={() => setEditId(null)}
          onUpdated={handleTruckUpdated}
        />
      )}
    </div>
  );
}

export default ViewTrucks;
