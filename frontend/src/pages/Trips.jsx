// src/pages/DriverTrips.jsx (This is actually OWNER's trips page - should be renamed to Trips.jsx)
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import {
  FaRoute,
  FaPlus,
  FaCheckCircle,
  FaTimes,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const Container = styled.div`
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: ${(props) =>
    props.$gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const FilterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.$variant === "primary" &&
    `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
  `}

  ${(props) =>
    props.$variant === "success" &&
    `
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  `}

  ${(props) =>
    props.$variant === "danger" &&
    `
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
    }
  `}
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background: #f8fafc;
  color: #64748b;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

const Td = styled.td`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #334155;
`;

const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  ${(props) => {
    if (props.$status === "ongoing")
      return "background: #dbeafe; color: #1e40af;";
    if (props.$status === "completed")
      return "background: #d1fae5; color: #065f46;";
    if (props.$status === "cancelled")
      return "background: #fee2e2; color: #991b1b;";
    return "";
  }}
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #64748b;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
`;

function Trips() {
  const { theme } = useTheme();
  const [trips, setTrips] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    fetchTrips();
    fetchStats();
  }, [filters]);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const params = new URLSearchParams();
      if (filters.status) params.append("status", filters.status);
      if (filters.startDate) params.append("startDate", filters.startDate);
      if (filters.endDate) params.append("endDate", filters.endDate);

      const response = await axios.get(
        `http://localhost:5000/api/trips?${params}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTrips(response.data.data.trips);
      setError(null);
    } catch (err) {
      console.error("Error fetching trips:", err);
      setError(err.response?.data?.message || "Failed to fetch trips");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const params = new URLSearchParams();
      if (filters.startDate) params.append("startDate", filters.startDate);
      if (filters.endDate) params.append("endDate", filters.endDate);

      const response = await axios.get(
        `http://localhost:5000/api/trips/stats?${params}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setStats(response.data.data.stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleDeleteTrip = async (tripId) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/trips/${tripId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchTrips();
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete trip");
    }
  };

  if (loading) {
    return <LoadingContainer>Loading trips...</LoadingContainer>;
  }

  return (
    <Container>
      <Header>
        <Title theme={theme}>
          <FaRoute /> Trips Management
        </Title>
      </Header>

      {error && (
        <div
          style={{
            background: "#fee2e2",
            color: "#991b1b",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {error}
        </div>
      )}

      {stats && (
        <StatsGrid>
          <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
            <StatLabel>Total Trips</StatLabel>
            <StatValue>{stats.totalTrips}</StatValue>
          </StatCard>

            <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
            <StatLabel>Ongoing</StatLabel>
            <StatValue>{stats.ongoingTrips}</StatValue>
          </StatCard>

            <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
            <StatLabel>Completed</StatLabel>
            <StatValue>{stats.completedTrips}</StatValue>
          </StatCard>

            <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
            <StatLabel>Total Distance</StatLabel>
            <StatValue>{(stats.totalDistance || 0).toFixed(0)} km</StatValue>
          </StatCard>
        </StatsGrid>
      )}

      <FilterSection>
        <Select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
        >
          <option value="">All Status</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </Select>

        <Input
          type="date"
          value={filters.startDate}
          onChange={(e) => handleFilterChange("startDate", e.target.value)}
          placeholder="Start Date"
        />

        <Input
          type="date"
          value={filters.endDate}
          onChange={(e) => handleFilterChange("endDate", e.target.value)}
          placeholder="End Date"
        />

        <Button
          $variant="primary"
          onClick={() => setFilters({ status: "", startDate: "", endDate: "" })}
        >
          Clear Filters
        </Button>
      </FilterSection>

      {trips.length === 0 ? (
        <EmptyState>
          <h3>No trips found</h3>
          <p>There are no trips matching your filters.</p>
        </EmptyState>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Date</Th>
              <Th>Truck</Th>
              <Th>Driver</Th>
              <Th>Route</Th>
              <Th>Distance</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <tr key={trip._id}>
                <Td>{index + 1}</Td>
                <Td>{new Date(trip.startTime).toLocaleDateString()}</Td>
                <Td>{trip.truckId?.truckNumber || "N/A"}</Td>
                <Td>{trip.driverId?.name || "N/A"}</Td>
                <Td>
                  {trip.source} → {trip.destination}
                </Td>
                <Td>
                  {trip.actualDistance || trip.distance
                    ? `${trip.actualDistance || trip.distance} km`
                    : "N/A"}
                </Td>
                <Td>
                  <Badge $status={trip.status}>{trip.status}</Badge>
                </Td>
                <Td>
                  {trip.status !== "completed" && (
                    <Button
                      $variant="danger"
                      onClick={() => handleDeleteTrip(trip._id)}
                      style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Trips;
