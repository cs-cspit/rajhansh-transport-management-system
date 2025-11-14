// src/pages/DriverFuelLogs.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Card, Button, Table, Badge, Alert } from "../components/ui";
import axios from "axios";
import AddFuelLogModal from "../components/AddDriverFuelLogModal";

const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
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
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled(Card)`
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.primary || "#FF8C00"};
  color: #FFFFFF;
  border-radius: ${(props) => props.theme.borderRadius.xl || "1rem"};
  box-shadow: ${(props) => props.theme.colors.shadowMd || "0 10px 30px rgba(0,0,0,0.15)"};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
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

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const DriverFuelLogs = () => {
  const { theme } = useTheme();
  const [fuelLogs, setFuelLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchFuelLogs();
  }, []);

  const fetchFuelLogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await axios.get(
        `http://localhost:5000/api/fuel?driverId=${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFuelLogs(response.data.data.fuelLogs);
      calculateStats(response.data.data.fuelLogs);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch fuel logs");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (logs) => {
    const totalLogs = logs.length;
    const totalFuel = logs.reduce((sum, log) => sum + log.quantityLiters, 0);
    const totalCost = logs.reduce((sum, log) => sum + log.totalCost, 0);
    const avgEfficiency =
      logs.reduce((sum, log) => sum + (log.fuelEfficiency || 0), 0) / totalLogs;

    setStats({
      totalLogs,
      totalFuel: totalFuel.toFixed(2),
      totalCost: totalCost.toFixed(2),
      avgEfficiency: avgEfficiency.toFixed(2),
    });
  };

  const handleAddFuelLog = async (fuelData) => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post(
        "http://localhost:5000/api/fuel",
        { ...fuelData, driverId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setShowAddModal(false);
      fetchFuelLogs();
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to add fuel log");
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { variant: "warning", text: "Pending" },
      verified: { variant: "success", text: "Verified" },
      rejected: { variant: "danger", text: "Rejected" },
    };
    const config = statusMap[status] || statusMap.pending;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  if (loading) return <Loader>Loading fuel logs...</Loader>;

  return (
    <Container>
      <Header>
        <Title theme={theme}>My Fuel Logs</Title>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          + Add Fuel Log
        </Button>
      </Header>

      {error && <Alert variant="danger">{error}</Alert>}

      {stats && (
        <StatsGrid>
          <StatCard>
            {/* <StatIcon>📝</StatIcon> */}
            <StatLabel>Total Logs</StatLabel>
            <StatValue>{stats.totalLogs}</StatValue>
          </StatCard>

          <StatCard>
            {/* <StatIcon>⛽</StatIcon> */}
            <StatLabel>Total Fuel</StatLabel>
            <StatValue>{stats.totalFuel} L</StatValue>
          </StatCard>

          <StatCard>
            {/* <StatIcon>💰</StatIcon> */}
            <StatLabel>Total Cost</StatLabel>
            <StatValue>₹{stats.totalCost}</StatValue>
          </StatCard>

          <StatCard>
            {/* <StatIcon>📊</StatIcon> */}
            <StatLabel>Avg Efficiency</StatLabel>
            <StatValue>{stats.avgEfficiency} km/L</StatValue>
          </StatCard>
        </StatsGrid>
      )}

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Date</Table.Header>
              <Table.Header>Truck</Table.Header>
              <Table.Header>Station</Table.Header>
              <Table.Header>Quantity</Table.Header>
              <Table.Header>Cost</Table.Header>
              <Table.Header>Efficiency</Table.Header>
              <Table.Header>Status</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body
            empty={fuelLogs.length === 0}
            emptyMessage="No fuel logs found"
          >
            {fuelLogs.map((log) => (
              <Table.Row key={log._id}>
                <Table.Cell>
                  {new Date(log.filledAt).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{log.truckId?.truckNumber || "N/A"}</Table.Cell>
                <Table.Cell>{log.fuelStation?.name || "N/A"}</Table.Cell>
                <Table.Cell>{log.quantityLiters.toFixed(2)} L</Table.Cell>
                <Table.Cell>₹{log.totalCost.toFixed(2)}</Table.Cell>
                <Table.Cell>
                  {log.fuelEfficiency ? `${log.fuelEfficiency} km/L` : "N/A"}
                </Table.Cell>
                <Table.Cell>
                  {getStatusBadge(log.verificationStatus)}
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
    </Container>
  );
};

export default DriverFuelLogs;
