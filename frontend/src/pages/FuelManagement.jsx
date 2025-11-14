// src/pages/FuelManagement.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import {
  Card,
  Button,
  Table,
  Badge,
  Input,
  Select,
  Alert,
  Loader,
} from "../components/ui";
import { fuelApi } from "../api/fuelApi";
import AddFuelLogModal from "../components/AddFuelLogModal";
import FuelStatsCard from "../components/FuelStatsCard";
import VerifyFuelModal from "../components/VerifyFuelModal";

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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

const FuelManagement = () => {
  const { theme } = useTheme();
  const [fuelLogs, setFuelLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);
  const [filters, setFilters] = useState({
    verificationStatus: "",
    isAnomaly: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    fetchFuelLogs();
    fetchStats();
  }, [filters]);

  const fetchFuelLogs = async () => {
    try {
      setLoading(true);
      const response = await fuelApi.getAllFuelLogs(filters);
      setFuelLogs(response.data.fuelLogs);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch fuel logs");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fuelApi.getFuelStats(filters);
      setStats(response.data.stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddFuelLog = async (fuelData) => {
    try {
      await fuelApi.createFuelLog(fuelData);
      setShowAddModal(false);
      fetchFuelLogs();
      fetchStats();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to create fuel log"
      );
    }
  };

  const handleVerify = (log) => {
    setSelectedLog(log);
    setShowVerifyModal(true);
  };

  const handleVerifySubmit = async (verificationData) => {
    try {
      await fuelApi.verifyFuelLog(selectedLog._id, verificationData);
      setShowVerifyModal(false);
      fetchFuelLogs();
      fetchStats();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to verify fuel log"
      );
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this fuel log?")) {
      try {
        await fuelApi.deleteFuelLog(id);
        fetchFuelLogs();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete fuel log");
      }
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { variant: "warning", text: "Pending" },
      verified: { variant: "success", text: "Verified" },
      rejected: { variant: "danger", text: "Rejected" },
      anomaly: { variant: "danger", text: "Anomaly" },
    };
    const config = statusMap[status] || statusMap.pending;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>Fuel Management</Title>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          + Add Fuel Log
        </Button>
      </Header>

      {error && (
        <Alert variant="danger" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {stats && (
        <StatsGrid theme={theme}>
          <FuelStatsCard
            title="Total Fuel Logs"
            value={stats.totalLogs}
            // icon="📝"
            variant="primary"
          />
          <FuelStatsCard
            title="Total Fuel Used"
            value={`${stats.totalFuelQuantity.toFixed(2)} L`}
            // icon="⛽"
            variant="light"
          />
          <FuelStatsCard
            title="Total Cost"
            value={`₹${stats.totalCost.toFixed(2)}`}
            // icon="💰"
            variant="white"
          />
          <FuelStatsCard
            title="Avg Efficiency"
            value={stats.avgFuelEfficiency ? `${stats.avgFuelEfficiency.toFixed(2)} km/L` : 'N/A'}
            // icon="📊"
            variant="dark"
          />
          <FuelStatsCard
            title="Pending Verification"
            value={stats.pendingVerification}
            // icon="⏳"
            variant="light"
          />
          <FuelStatsCard
            title="Anomalies"
            value={stats.anomalies}
            // icon="⚠️"
            variant="dark"
          />
        </StatsGrid>
      )}

      <FilterSection theme={theme}>
        <Select
          label="Verification Status"
          value={filters.verificationStatus}
          onChange={(e) =>
            handleFilterChange("verificationStatus", e.target.value)
          }
          options={[
            { value: "", label: "All" },
            { value: "pending", label: "Pending" },
            { value: "verified", label: "Verified" },
            { value: "rejected", label: "Rejected" },
            { value: "anomaly", label: "Anomaly" },
          ]}
        />
        <Select
          label="Anomaly Filter"
          value={filters.isAnomaly}
          onChange={(e) => handleFilterChange("isAnomaly", e.target.value)}
          options={[
            { value: "", label: "All" },
            { value: "true", label: "Anomalies Only" },
            { value: "false", label: "Normal Only" },
          ]}
        />
        <Input
          type="date"
          label="Start Date"
          value={filters.startDate}
          onChange={(e) => handleFilterChange("startDate", e.target.value)}
        />
        <Input
          type="date"
          label="End Date"
          value={filters.endDate}
          onChange={(e) => handleFilterChange("endDate", e.target.value)}
        />
      </FilterSection>

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Date</Table.Header>
              <Table.Header>Truck</Table.Header>
              <Table.Header>Driver</Table.Header>
              <Table.Header>Station</Table.Header>
              <Table.Header>Quantity (L)</Table.Header>
              <Table.Header>Cost</Table.Header>
              <Table.Header>Efficiency</Table.Header>
              <Table.Header>Status</Table.Header>
              <Table.Header>Actions</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body loading={loading} empty={fuelLogs.length === 0}>
            {fuelLogs.map((log) => (
              <Table.Row key={log._id}>
                <Table.Cell>
                  {new Date(log.filledAt).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{log.truckId?.truckNumber || "N/A"}</Table.Cell>
                <Table.Cell>{log.driverId?.name || "N/A"}</Table.Cell>
                <Table.Cell>{log.fuelStation?.name || "N/A"}</Table.Cell>
                <Table.Cell>{log.quantityLiters.toFixed(2)}</Table.Cell>
                <Table.Cell>₹{log.totalCost.toFixed(2)}</Table.Cell>
                <Table.Cell>
                  {log.fuelEfficiency ? `${log.fuelEfficiency} km/L` : "N/A"}
                </Table.Cell>
                <Table.Cell>
                  {getStatusBadge(log.verificationStatus)}
                </Table.Cell>
                <Table.Cell>
                  <ActionButtons theme={theme}>
                    {log.verificationStatus === "pending" && (
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => handleVerify(log)}
                      >
                        Verify
                      </Button>
                    )}
                    {log.verificationStatus !== "verified" && (
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(log._id)}
                      >
                        Delete
                      </Button>
                    )}
                  </ActionButtons>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      {showAddModal && (
        <AddFuelLogModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddFuelLog}
        />
      )}

      {showVerifyModal && (
        <VerifyFuelModal
          isOpen={showVerifyModal}
          onClose={() => setShowVerifyModal(false)}
          fuelLog={selectedLog}
          onSubmit={handleVerifySubmit}
        />
      )}
    </Container>
  );
};

export default FuelManagement;
