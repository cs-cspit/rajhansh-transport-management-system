// src/pages/MyTrips.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import {
  Card,
  Button,
  Table,
  Badge,
  Select,
  Alert,
  Loader,
} from "../components/ui";
import axios from "axios";
import AddTripModal from "../components/AddTripModal";
import CompleteTripModal from "../components/CompleteTripModal";

const Container = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

const FilterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const StatCard = styled(Card)`
  padding: ${(props) => props.theme.spacing.lg};
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

const TripDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`;

const Location = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Distance = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const MyTrips = () => {
  const { theme } = useTheme();
  const [trips, setTrips] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
  });

  useEffect(() => {
    fetchMyTrips();
    fetchStats();
  }, [filters]);

  const fetchMyTrips = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      const params = new URLSearchParams({
        driverId: user.id,
        ...filters,
      });

      const response = await axios.get(
        `http://localhost:5000/api/trips?${params}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response)
      setTrips(response.data.data.trips);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch trips");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await axios.get(
        `http://localhost:5000/api/trips/stats?driverId=${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response)
      setStats(response.data.data.stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddTrip = async (tripData) => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post(
        "http://localhost:5000/api/trips",
        { ...tripData, driverId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setShowAddModal(false);
      fetchMyTrips();
      fetchStats();
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to create trip");
    }
  };

  const handleCompleteTrip = (trip) => {
    setSelectedTrip(trip);
    setShowCompleteModal(true);
  };

  const handleCompleteSubmit = async (completionData) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:5000/api/trips/${selectedTrip._id}/complete`,
        completionData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setShowCompleteModal(false);
      fetchMyTrips();
      fetchStats();
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to complete trip");
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      ongoing: { variant: "info", text: "Ongoing" },
      completed: { variant: "success", text: "Completed" },
      cancelled: { variant: "danger", text: "Cancelled" },
    };
    const config = statusMap[status] || statusMap.ongoing;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>🛣️ My Trips</Title>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          + Start New Trip
        </Button>
      </Header>

      {error && (
        <Alert variant="danger" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {stats && (
        <StatsGrid theme={theme}>
          <StatCard theme={theme}>
            <StatValue theme={theme}>{stats.totalTrips}</StatValue>
            <StatLabel theme={theme}>Total Trips</StatLabel>
          </StatCard>
          <StatCard theme={theme}>
            <StatValue theme={theme}>{stats.completedTrips}</StatValue>
            <StatLabel theme={theme}>Completed</StatLabel>
          </StatCard>
          <StatCard theme={theme}>
            <StatValue theme={theme}>{stats.ongoingTrips}</StatValue>
            <StatLabel theme={theme}>Ongoing</StatLabel>
          </StatCard>
          <StatCard theme={theme}>
            <StatValue theme={theme}>
              {stats.totalDistance.toFixed(0)} km
            </StatValue>
            <StatLabel theme={theme}>Total Distance</StatLabel>
          </StatCard>
          <StatCard theme={theme}>
            <StatValue theme={theme}>
              {stats.averageFuelEfficiency
                ? `${stats.averageFuelEfficiency} km/L`
                : "N/A"}
            </StatValue>
            <StatLabel theme={theme}>Avg Fuel Efficiency</StatLabel>
          </StatCard>
        </StatsGrid>
      )}

      <FilterSection theme={theme}>
        <Select
          label="Status"
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          options={[
            { value: "", label: "All Trips" },
            { value: "ongoing", label: "Ongoing" },
            { value: "completed", label: "Completed" },
            { value: "cancelled", label: "Cancelled" },
          ]}
        />
      </FilterSection>

      <Card>
        {loading ? (
          <Loader text="Loading trips..." />
        ) : (
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Header>Date</Table.Header>
                <Table.Header>Truck</Table.Header>
                <Table.Header>Route</Table.Header>
                <Table.Header>Distance</Table.Header>
                <Table.Header>Fuel Used</Table.Header>
                <Table.Header>Status</Table.Header>
                <Table.Header>Actions</Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body
              empty={trips.length === 0}
              emptyMessage="No trips found"
            >
              {trips.map((trip) => (
                <Table.Row key={trip._id}>
                  <Table.Cell>
                    {new Date(trip.startTime).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{trip.truckId?.truckNumber || "N/A"}</Table.Cell>
                  <Table.Cell>
                    <TripDetails>
                      <Location theme={theme}>
                        {trip.source} → {trip.destination}
                      </Location>
                      {trip.distance && (
                        <Distance theme={theme}>{trip.distance} km</Distance>
                      )}
                    </TripDetails>
                  </Table.Cell>
                  <Table.Cell>
                    {trip.actualDistance
                      ? `${trip.actualDistance} km`
                      : trip.distance
                      ? `${trip.distance} km (Est.)`
                      : "N/A"}
                  </Table.Cell>
                  <Table.Cell>
                    {trip.fuelUsed ? `${trip.fuelUsed} L` : "N/A"}
                  </Table.Cell>
                  <Table.Cell>{getStatusBadge(trip.status)}</Table.Cell>
                  <Table.Cell>
                    <ActionButtons theme={theme}>
                      {trip.status === "ongoing" && (
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleCompleteTrip(trip)}
                        >
                          Complete
                        </Button>
                      )}
                      {trip.status === "completed" && (
                        <Button size="sm" variant="ghost">
                          View Details
                        </Button>
                      )}
                    </ActionButtons>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </Card>

      {showAddModal && (
        <AddTripModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddTrip}
        />
      )}

      {showCompleteModal && (
        <CompleteTripModal
          isOpen={showCompleteModal}
          onClose={() => setShowCompleteModal(false)}
          trip={selectedTrip}
          onSubmit={handleCompleteSubmit}
        />
      )}
    </Container>
  );
};

export default MyTrips;
