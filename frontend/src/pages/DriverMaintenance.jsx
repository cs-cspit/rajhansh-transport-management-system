// src/pages/DriverMaintenance.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Card, Button, Table, Badge, Alert } from "../components/ui";
import axios from "axios";
import ReportMaintenanceModal from "../components/ReportMaintenanceModal";

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

const DriverMaintenance = () => {
  const { theme } = useTheme();
  const [maintenanceLogs, setMaintenanceLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    fetchMaintenanceLogs();
  }, []);

  const fetchMaintenanceLogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      // Get driver's assigned truck
      const driverResponse = await axios.get(
        `http://localhost:5000/api/drivers/${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const truckId = driverResponse.data.data.driver.assignedTruck?._id;

      if (truckId) {
        const response = await axios.get(
          `http://localhost:5000/api/maintenance?truckId=${truckId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setMaintenanceLogs(response.data.data.maintenanceLogs);
        calculateStats(response.data.data.maintenanceLogs);
      }
      setError(null);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch maintenance logs"
      );
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (logs) => {
    const totalLogs = logs.length;
    const scheduled = logs.filter((log) => log.status === "scheduled").length;
    const inProgress = logs.filter(
      (log) => log.status === "in-progress"
    ).length;
    const completed = logs.filter((log) => log.status === "completed").length;

    setStats({
      totalLogs,
      scheduled,
      inProgress,
      completed,
    });
  };

  const handleReportMaintenance = async (maintenanceData) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/maintenance",
        maintenanceData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setShowReportModal(false);
      fetchMaintenanceLogs();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to report maintenance"
      );
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

  if (loading) return <Loader>Loading maintenance logs...</Loader>;

  return (
    <Container>
      <Header>
        <Title theme={theme}>Maintenance Reports</Title>
        <Button variant="primary" onClick={() => setShowReportModal(true)}>
          + Report Issue
        </Button>
      </Header>

      {error && <Alert variant="danger">{error}</Alert>}

      {stats && (
        <StatsGrid>
          <StatCard>
            <StatIcon></StatIcon>
            <StatLabel>Total Reports</StatLabel>
            <StatValue>{stats.totalLogs}</StatValue>
          </StatCard>

          <StatCard>
            <StatIcon></StatIcon>
            <StatLabel>Scheduled</StatLabel>
            <StatValue>{stats.scheduled}</StatValue>
          </StatCard>

          <StatCard>
            <StatIcon></StatIcon>
            <StatLabel>In Progress</StatLabel>
            <StatValue>{stats.inProgress}</StatValue>
          </StatCard>

          <StatCard>
            <StatIcon></StatIcon>
            <StatLabel>Completed</StatLabel>
            <StatValue>{stats.completed}</StatValue>
          </StatCard>
        </StatsGrid>
      )}

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Date</Table.Header>
              <Table.Header>Type</Table.Header>
              <Table.Header>Category</Table.Header>
              <Table.Header>Issue</Table.Header>
              <Table.Header>Priority</Table.Header>
              <Table.Header>Status</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body
            empty={maintenanceLogs.length === 0}
            emptyMessage="No maintenance reports found"
          >
            {maintenanceLogs.map((log) => (
              <Table.Row key={log._id}>
                <Table.Cell>
                  {new Date(log.startDate).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{log.maintenanceType}</Table.Cell>
                <Table.Cell>{log.category}</Table.Cell>
                <Table.Cell>
                  {log.issueDescription.length > 50
                    ? `${log.issueDescription.substring(0, 50)}...`
                    : log.issueDescription}
                </Table.Cell>
                <Table.Cell>{getPriorityBadge(log.priority)}</Table.Cell>
                <Table.Cell>{getStatusBadge(log.status)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      {showReportModal && (
        <ReportMaintenanceModal
          isOpen={showReportModal}
          onClose={() => setShowReportModal(false)}
          onSubmit={handleReportMaintenance}
        />
      )}
    </Container>
  );
};

export default DriverMaintenance;
