import React, { useEffect, useState } from "react";
import { authFetch } from "../api";

export default function MyTrips({ refreshKey }) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    authFetch("/api/driver/trips")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (!ignore) setTrips(data);
      })
      .catch(() => setTrips([]))
      .finally(() => setLoading(false));
    return () => { ignore = true; };
  }, [refreshKey]);

  if (loading) return <div>Loading trips...</div>;
  if (!trips.length) return <div>No trips found.</div>;

  return (
    <div>
      <h3>My Trips</h3>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id} style={{ marginBottom: 12 }}>
            <b>{trip.startLocation}</b> → <b>{trip.endLocation}</b> | {trip.distanceKm} km | {new Date(trip.startTime).toLocaleString()} | Truck: {trip.truck?.truckNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}