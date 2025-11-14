import React, { useEffect, useState } from "react";
import { authFetch, getOwnerToken } from "../api";
import "../styles/ownertrips.css";

export default function OwnerDriverTrips() {
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedTruck, setSelectedTruck] = useState("");
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [newTrip, setNewTrip] = useState({
    driverId: "",
    truckId: "",
    startLocation: "",
    endLocation: "",
    startTime: "",
    endTime: "",
    distanceKm: "",
    cargoType: "",
    cargoWeight: "",
    fuelUsed: "",
    notes: "",
    status: "started"
  });

  // Fetch drivers and trucks on mount
  useEffect(() => {
    authFetch("/api/drivers", { headers: { Authorization: `Bearer ${getOwnerToken()}` } })
      .then(res => res.json())
      .then(data => setDrivers(data))
      .catch(() => setDrivers([]));

    authFetch("/api/trucks", { headers: { Authorization: `Bearer ${getOwnerToken()}` } })
      .then(res => res.json())
      .then(data => setTrucks(data))
      .catch(() => setTrucks([]));
  }, []);

  // When driver changes, auto-select assigned truck if available
  useEffect(() => {
    if (!selectedDriver) {
      setSelectedTruck("");
      setTrips([]);
      setNewTrip(trip => ({ ...trip, driverId: "", truckId: "" }));
      return;
    }
    setNewTrip(trip => ({ ...trip, driverId: selectedDriver }));
    const driver = drivers.find(d => d._id === selectedDriver);
    if (driver && driver.truckId) {
      setSelectedTruck(driver.truckId);
      setNewTrip(trip => ({ ...trip, truckId: driver.truckId }));
    } else {
      setSelectedTruck("");
      setNewTrip(trip => ({ ...trip, truckId: "" }));
    }
  }, [selectedDriver, drivers]);

  // When truck changes, update newTrip
  useEffect(() => {
    setNewTrip(trip => ({ ...trip, truckId: selectedTruck }));
  }, [selectedTruck]);

  // Fetch trips when driver or truck changes
  useEffect(() => {
    if (!selectedDriver) {
      setTrips([]);
      return;
    }
    setLoading(true);
    let url = `/api/admin/trips?driverId=${selectedDriver}`;
    if (selectedTruck) url += `&truckId=${selectedTruck}`;
    authFetch(url, { token: getOwnerToken() })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setTrips(data);
        else setTrips([]);
      })
      .catch(() => setTrips([]))
      .finally(() => setLoading(false));
  }, [selectedDriver, selectedTruck]);

  // Filter trips client-side
  const filteredTrips = trips.filter(trip => {
    let ok = true;
    if (statusFilter && trip.status !== statusFilter) ok = false;
    if (dateFrom && new Date(trip.startTime) < new Date(dateFrom)) ok = false;
    if (dateTo && new Date(trip.startTime) > new Date(dateTo)) ok = false;
    return ok;
  });

  // Validate required fields before submit
  const validateTrip = () => {
    const {
      driverId, truckId, startLocation, endLocation, startTime, endTime,
      distanceKm, cargoType, cargoWeight
    } = newTrip;
    return (
      driverId && truckId && startLocation && endLocation &&
      startTime && endTime && distanceKm && cargoType && cargoWeight
    );
  };

  const handleAddTrip = async (e) => {
    e.preventDefault();
    if (!validateTrip()) {
      alert("Please fill all required fields.");
      return;
    }
    const res = await authFetch("/api/admin/trips", {
      method: "POST",
      token: getOwnerToken(),
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTrip)
    });
    if (res.ok) {
      setNewTrip({
        driverId: "",
        truckId: "",
        startLocation: "",
        endLocation: "",
        startTime: "",
        endTime: "",
        distanceKm: "",
        cargoType: "",
        cargoWeight: "",
        fuelUsed: "",
        notes: "",
        status: "started"
      });
      // Refresh trips
      let url = `/api/admin/trips?driverId=${selectedDriver}`;
      if (selectedTruck) url += `&truckId=${selectedTruck}`;
      authFetch(url, { token: getOwnerToken() })
        .then(res => res.json())
        .then(data => Array.isArray(data) && setTrips(data));
      alert("Trip added!");
    } else {
      const err = await res.json();
      alert(err.message || "Failed to add trip");
    }
  };

  return (
    <>
      <h2 style={{ color: "#ff9800", marginBottom: "1.5rem" }}>Driver Trips</h2>
      {/* Add Trip Form */}
      <form className="add-trip-form" onSubmit={handleAddTrip} style={{ marginBottom: "2rem", background: "#181818", padding: "1rem", borderRadius: "8px" }}>
        <label>
          Driver*:
          <select
            value={newTrip.driverId}
            onChange={e => {
              setSelectedDriver(e.target.value);
              setNewTrip(trip => ({ ...trip, driverId: e.target.value }));
            }}
            required
            style={{ marginRight: "1rem" }}
          >
            <option value="">-- Select Driver --</option>
            {drivers.map(d => (
              <option key={d._id} value={d._id}>{d.name} ({d.email})</option>
            ))}
          </select>
        </label>
        <label>
          Truck*:
          <select
            value={newTrip.truckId}
            onChange={e => {
              setSelectedTruck(e.target.value);
              setNewTrip(trip => ({ ...trip, truckId: e.target.value }));
            }}
            required
            style={{ marginRight: "1rem" }}
          >
            <option value="">-- Select Truck --</option>
            {trucks.map(t => (
              <option key={t._id} value={t._id}>{t.truckNumber} ({t.model})</option>
            ))}
          </select>
        </label>
        <input
          type="text"
          placeholder="Start Location*"
          value={newTrip.startLocation}
          onChange={e => setNewTrip({ ...newTrip, startLocation: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="End Location*"
          value={newTrip.endLocation}
          onChange={e => setNewTrip({ ...newTrip, endLocation: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          placeholder="Start Date & Time*"
          value={newTrip.startTime}
          onChange={e => setNewTrip({ ...newTrip, startTime: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          placeholder="End Date & Time*"
          value={newTrip.endTime}
          onChange={e => setNewTrip({ ...newTrip, endTime: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Distance (km)*"
          value={newTrip.distanceKm}
          onChange={e => setNewTrip({ ...newTrip, distanceKm: e.target.value })}
          min="0"
          required
        />
        <input
          type="text"
          placeholder="Cargo Type*"
          value={newTrip.cargoType}
          onChange={e => setNewTrip({ ...newTrip, cargoType: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Cargo Weight (tons or kg)*"
          value={newTrip.cargoWeight}
          onChange={e => setNewTrip({ ...newTrip, cargoWeight: e.target.value })}
          min="0"
          required
        />
        <input
          type="number"
          placeholder="Fuel Used (liters)"
          value={newTrip.fuelUsed}
          onChange={e => setNewTrip({ ...newTrip, fuelUsed: e.target.value })}
          min="0"
        />
        <input
          type="text"
          placeholder="Notes"
          value={newTrip.notes}
          onChange={e => setNewTrip({ ...newTrip, notes: e.target.value })}
        />
        <select
          value={newTrip.status}
          onChange={e => setNewTrip({ ...newTrip, status: e.target.value })}
          required
        >
          <option value="started">Started</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button type="submit" style={{ background: "#ff9800", color: "#181818", marginLeft: "1rem" }}>Add Trip</button>
      </form>
      <div className="trips-filters">
        <label>
          Driver:
          <select value={selectedDriver} onChange={e => setSelectedDriver(e.target.value)}>
            <option value="">-- Select Driver --</option>
            {drivers.map(d => (
              <option key={d._id} value={d._id}>{d.name} ({d.email})</option>
            ))}
          </select>
        </label>
        <label>
          Truck:
          <select value={selectedTruck} onChange={e => setSelectedTruck(e.target.value)}>
            <option value="">-- Select Truck --</option>
            {trucks.map(t => (
              <option key={t._id} value={t._id}>{t.truckNumber} ({t.model})</option>
            ))}
          </select>
        </label>
        <label>
          Status:
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="">All</option>
            <option value="started">Started</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>
        <label>
          From:
          <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
        </label>
        <label>
          To:
          <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} />
        </label>
      </div>
      {!selectedDriver ? (
        <div className="placeholder">Please select a driver to view trips.</div>
      ) : loading ? (
        <div className="placeholder">Loading trips...</div>
      ) : (
        <table className="trips-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>From → To</th>
              <th>Distance (km)</th>
              <th>Driver Name</th>
              <th>Truck No.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrips.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>No trips found.</td>
              </tr>
            ) : (
              filteredTrips.map(trip => (
                <tr key={trip._id}>
                  <td>{new Date(trip.startTime).toLocaleString()}</td>
                  <td>{trip.startLocation} → {trip.endLocation}</td>
                  <td>{trip.distanceKm}</td>
                  <td>{trip.driver?.name || ""}</td>
                  <td>{trip.truck?.truckNumber || ""}</td>
                  <td>{trip.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </>
  );
}