// src/pages/MaintenanceManagement.jsx
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
  Tooltip,
} from "../components/ui";
import { maintenanceApi } from "../api/maintenanceApi";
import AddMaintenanceModal from "../components/AddMaintenanceModal";
import MaintenanceStatsCard from "../components/MaintenanceStatsCard";
import PredictiveMaintenanceModal from "../components/PredictiveMaintenanceModal";
import CompleteMaintenanceModal from "../components/CompleteMaintenanceModal";

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

const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
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

const MaintenanceManagement = () => {
  const { theme } = useTheme();
  const [maintenanceLogs, setMaintenanceLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPredictiveModal, setShowPredictiveModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    maintenanceType: "",
    category: "",
    priority: "",
  });

  useEffect(() => {
    fetchMaintenanceLogs();
    fetchStats();
  }, [filters]);

  const fetchMaintenanceLogs = async () => {
    try {
      setLoading(true);
      const response = await maintenanceApi.getAllMaintenanceLogs(filters);
      setMaintenanceLogs(response.data.maintenanceLogs);
      setError(null);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch maintenance logs"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await maintenanceApi.getMaintenanceStats(filters);
      setStats(response.data.stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddMaintenance = async (maintenanceData) => {
    try {
      await maintenanceApi.createMaintenanceLog(maintenanceData);
      setShowAddModal(false);
      fetchMaintenanceLogs();
      fetchStats();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to create maintenance log"
      );
    }
  };

  const handleComplete = (log) => {
    setSelectedLog(log);
    setShowCompleteModal(true);
  };

  const handleCompleteSubmit = async (completionData) => {
    try {
      await maintenanceApi.completeMaintenance(selectedLog._id, completionData);
      setShowCompleteModal(false);
      fetchMaintenanceLogs();
      fetchStats();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to complete maintenance"
      );
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this maintenance log?")
    ) {
      try {
        await maintenanceApi.deleteMaintenanceLog(id);
        fetchMaintenanceLogs();
        fetchStats();
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to delete maintenance log"
        );
      }
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      scheduled: { variant: "info", text: "Scheduled" },
      "in-progress": { variant: "warning", text: "In Progress" },
      completed: { variant: "success", text: "Completed" },
      cancelled: { variant: "danger", text: "Cancelled" },
    };
    const config = statusMap[status] || statusMap.scheduled;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  const getPriorityBadge = (priority) => {
    const priorityMap = {
      low: { variant: "default", text: "Low" },
      medium: { variant: "info", text: "Medium" },
      high: { variant: "warning", text: "High" },
      critical: { variant: "danger", text: "Critical" },
    };
    const config = priorityMap[priority] || priorityMap.medium;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  const getTypeBadge = (type) => {
    const typeMap = {
      regular: { variant: "primary", text: "Regular" },
      emergency: { variant: "danger", text: "Emergency" },
      preventive: { variant: "success", text: "Preventive" },
      breakdown: { variant: "warning", text: "Breakdown" },
    };
    const config = typeMap[type] || typeMap.regular;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>Maintenance Management</Title>
        <ButtonGroup theme={theme}>
          <Button
            variant="secondary"
            onClick={() => setShowPredictiveModal(true)}
          >
            Predictive Analysis
          </Button>
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            + Add Maintenance
          </Button>
        </ButtonGroup>
      </Header>

      {error && (
        <Alert variant="danger" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {stats && (
        <StatsGrid theme={theme}>
          <MaintenanceStatsCard
            title="Total Logs"
            value={stats.totalLogs}
            // icon="📝"
            variant="primary"
          />
          <MaintenanceStatsCard
            title="Total Cost"
            value={`₹${stats.totalCost.toFixed(2)}`}
            // icon="💰"
            variant="success"
          />
          <MaintenanceStatsCard
            title="Avg Cost"
            value={`₹${stats.avgCost.toFixed(2)}`}
            // icon="📊"
            variant="info"
          />
          <MaintenanceStatsCard
            title="In Progress"
            value={stats.inProgress}
            // icon="⚙️"
            variant="warning"
          />
          <MaintenanceStatsCard
            title="Scheduled"
            value={stats.scheduled}
            // icon="📅"
            variant="secondary"
          />
          <MaintenanceStatsCard
            title="Completed"
            value={stats.completed}
            // icon="✅"
            variant="success"
          />
        </StatsGrid>
      )}

      <FilterSection theme={theme}>
        <Select
          label="Status"
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          options={[
            { value: "", label: "All" },
            { value: "scheduled", label: "Scheduled" },
            { value: "in-progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "cancelled", label: "Cancelled" },
          ]}
        />
        <Select
          label="Maintenance Type"
          value={filters.maintenanceType}
          onChange={(e) =>
            handleFilterChange("maintenanceType", e.target.value)
          }
          options={[
            { value: "", label: "All" },
            { value: "regular", label: "Regular" },
            { value: "emergency", label: "Emergency" },
            { value: "preventive", label: "Preventive" },
            { value: "breakdown", label: "Breakdown" },
          ]}
        />
        <Select
          label="Category"
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          options={[
            { value: "", label: "All" },
            { value: "engine", label: "Engine" },
            { value: "transmission", label: "Transmission" },
            { value: "brakes", label: "Brakes" },
            { value: "tires", label: "Tires" },
            { value: "electrical", label: "Electrical" },
            { value: "body", label: "Body" },
            { value: "other", label: "Other" },
          ]}
        />
        <Select
          label="Priority"
          value={filters.priority}
          onChange={(e) => handleFilterChange("priority", e.target.value)}
          options={[
            { value: "", label: "All" },
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
            { value: "critical", label: "Critical" },
          ]}
        />
      </FilterSection>

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Date</Table.Header>
              <Table.Header>Truck</Table.Header>
              <Table.Header>Type</Table.Header>
              <Table.Header>Category</Table.Header>
              <Table.Header>Issue</Table.Header>
              <Table.Header>Priority</Table.Header>
              <Table.Header>Cost</Table.Header>
              <Table.Header>Status</Table.Header>
              <Table.Header>Actions</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body loading={loading} empty={maintenanceLogs.length === 0}>
            {maintenanceLogs.map((log) => (
              <Table.Row key={log._id}>
                <Table.Cell>
                  {new Date(log.startDate).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{log.truckId?.truckNumber || "N/A"}</Table.Cell>
                <Table.Cell>{getTypeBadge(log.maintenanceType)}</Table.Cell>
                <Table.Cell>
                  {log.category.charAt(0).toUpperCase() + log.category.slice(1)}
                </Table.Cell>
                <Table.Cell>
                  <Tooltip content={log.issueDescription}>
                    {log.issueDescription.length > 30
                      ? `${log.issueDescription.substring(0, 30)}...`
                      : log.issueDescription}
                  </Tooltip>
                </Table.Cell>
                <Table.Cell>{getPriorityBadge(log.priority)}</Table.Cell>
                <Table.Cell>₹{log.totalCost.toFixed(2)}</Table.Cell>
                <Table.Cell>{getStatusBadge(log.status)}</Table.Cell>
                <Table.Cell>
                  <ActionButtons theme={theme}>
                    {log.status === "in-progress" && (
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => handleComplete(log)}
                      >
                        Complete
                      </Button>
                    )}
                    {log.status !== "completed" && (
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
        <AddMaintenanceModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddMaintenance}
        />
      )}

      {showPredictiveModal && (
        <PredictiveMaintenanceModal
          isOpen={showPredictiveModal}
          onClose={() => setShowPredictiveModal(false)}
        />
      )}

      {showCompleteModal && (
        <CompleteMaintenanceModal
          isOpen={showCompleteModal}
          onClose={() => setShowCompleteModal(false)}
          maintenanceLog={selectedLog}
          onSubmit={handleCompleteSubmit}
        />
      )}
    </Container>
  );
};

export default MaintenanceManagement;
