import React, { useState } from "react";
import { authFetch } from "../api";

const initialState = {
  startLocation: "",
  endLocation: "",
  startTime: "",
  endTime: "",
  distanceKm: "",
  cargoType: "",
  notes: "",
};

export default function AddTripForm({ onTripAdded }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authFetch("/api/driver/trips", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          distanceKm: Number(form.distanceKm),
        }),
      });
      if (res.status === 201) {
        alert("Trip added");
        setForm(initialState);
        onTripAdded && onTripAdded();
      } else {
        const data = await res.json();
        alert(data.message || "Failed to add trip");
      }
    } catch {
      alert("Network error");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, marginBottom: 24 }}>
      <h3>Add Trip</h3>
      <input name="startLocation" placeholder="Start Location" value={form.startLocation} onChange={handleChange} required />
      <input name="endLocation" placeholder="End Location" value={form.endLocation} onChange={handleChange} required />
      <input name="startTime" type="datetime-local" value={form.startTime} onChange={handleChange} required />
      <input name="endTime" type="datetime-local" value={form.endTime} onChange={handleChange} required />
      <input name="distanceKm" type="number" min={0} placeholder="Distance (km)" value={form.distanceKm} onChange={handleChange} required />
      <input name="cargoType" placeholder="Cargo Type" value={form.cargoType} onChange={handleChange} />
      <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
      <button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Trip"}</button>
    </form>
  );
}