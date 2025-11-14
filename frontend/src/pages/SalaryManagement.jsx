// src/pages/SalaryManagement.jsx
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
  Input,
} from "../components/ui";
import { salaryApi } from "../api/salaryApi";
import GenerateSalaryModal from "../components/GenerateSalaryModal";
import SalaryDetailsModal from "../components/SalaryDetailsModal";

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

const StatCard = styled(Card)`
  padding: ${(props) => props.theme.spacing.lg};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

const SalaryManagement = () => {
  const { theme } = useTheme();
  const [salaries, setSalaries] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    fetchSalaries();
    fetchStats();
  }, [filters]);

  const fetchSalaries = async () => {
    try {
      setLoading(true);
      const response = await salaryApi.getAllSalaries(filters);
      setSalaries(response.data.salaries);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch salaries");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await salaryApi.getSalaryStats({
        month: filters.month,
        year: filters.year,
      });
      setStats(response.data.stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerateSalary = async (salaryData) => {
    try {
      await salaryApi.generateSalary(salaryData);
      setShowGenerateModal(false);
      fetchSalaries();
      fetchStats();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to generate salary"
      );
    }
  };

  const handleApprove = async (id) => {
    if (window.confirm("Are you sure you want to approve this salary?")) {
      try {
        await salaryApi.approveSalary(id);
        fetchSalaries();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to approve salary");
      }
    }
  };

  const handleMarkPaid = async (id) => {
    if (window.confirm("Mark this salary as paid?")) {
      try {
        await salaryApi.markSalaryAsPaid(id, {
          paymentMethod: "bank-transfer",
          transactionReference: `TXN-${Date.now()}`,
        });
        fetchSalaries();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to mark as paid");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this salary record?")) {
      try {
        await salaryApi.deleteSalary(id);
        fetchSalaries();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete salary");
      }
    }
  };

  const handleViewDetails = (salary) => {
    setSelectedSalary(salary);
    setShowDetailsModal(true);
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { variant: "warning", text: "Pending" },
      approved: { variant: "info", text: "Approved" },
      paid: { variant: "success", text: "Paid" },
      rejected: { variant: "danger", text: "Rejected" },
    };
    const config = statusMap[status] || statusMap.pending;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>💰 Salary Management</Title>
        <ButtonGroup theme={theme}>
          <Button variant="secondary" onClick={() => window.print()}>
            📄 Export Report
          </Button>
          <Button variant="primary" onClick={() => setShowGenerateModal(true)}>
            + Generate Salary
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
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Total Salaries</StatLabel>
            <StatValue theme={theme}>{stats.totalSalaries}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Total Paid</StatLabel>
            <StatValue theme={theme}>₹{stats.totalPaid.toFixed(2)}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Avg Salary</StatLabel>
            <StatValue theme={theme}>₹{stats.avgSalary.toFixed(2)}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Pending Approval</StatLabel>
            <StatValue theme={theme}>{stats.pending}</StatValue>
          </StatCard>
        </StatsGrid>
      )}

      <FilterSection theme={theme}>
        <Select
          label="Month"
          value={filters.month}
          onChange={(e) => handleFilterChange("month", e.target.value)}
          options={monthNames.map((name, index) => ({
            value: index + 1,
            label: name,
          }))}
        />
        <Select
          label="Year"
          value={filters.year}
          onChange={(e) => handleFilterChange("year", e.target.value)}
          options={years.map((year) => ({
            value: year,
            label: year.toString(),
          }))}
        />
        <Select
          label="Status"
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          options={[
            { value: "", label: "All" },
            { value: "pending", label: "Pending" },
            { value: "approved", label: "Approved" },
            { value: "paid", label: "Paid" },
            { value: "rejected", label: "Rejected" },
          ]}
        />
      </FilterSection>

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Driver</Table.Header>
              <Table.Header>Month/Year</Table.Header>
              <Table.Header>Base Salary</Table.Header>
              <Table.Header>Bonuses</Table.Header>
              <Table.Header>Deductions</Table.Header>
              <Table.Header>Net Salary</Table.Header>
              <Table.Header>Status</Table.Header>
              <Table.Header>Actions</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body loading={loading} empty={salaries.length === 0}>
            {salaries.map((salary) => (
              <Table.Row key={salary._id}>
                <Table.Cell>{salary.driverId?.name || "N/A"}</Table.Cell>
                <Table.Cell>
                  {monthNames[salary.month - 1]} {salary.year}
                </Table.Cell>
                <Table.Cell>₹{salary.baseSalary.toFixed(2)}</Table.Cell>
                <Table.Cell>
                  ₹
                  {(
                    salary.tripBonus +
                    salary.performanceBonus +
                    salary.overtimeAmount
                  ).toFixed(2)}
                </Table.Cell>
                <Table.Cell>₹{salary.totalDeductions.toFixed(2)}</Table.Cell>
                <Table.Cell>
                  <strong>₹{salary.netSalary.toFixed(2)}</strong>
                </Table.Cell>
                <Table.Cell>{getStatusBadge(salary.status)}</Table.Cell>
                <Table.Cell>
                  <ActionButtons theme={theme}>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleViewDetails(salary)}
                    >
                      View
                    </Button>
                    {salary.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleApprove(salary._id)}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => handleDelete(salary._id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                    {salary.status === "approved" && (
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => handleMarkPaid(salary._id)}
                      >
                        Mark Paid
                      </Button>
                    )}
                  </ActionButtons>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      {showGenerateModal && (
        <GenerateSalaryModal
          isOpen={showGenerateModal}
          onClose={() => setShowGenerateModal(false)}
          onSubmit={handleGenerateSalary}
        />
      )}

      {showDetailsModal && (
        <SalaryDetailsModal
          isOpen={showDetailsModal}
          onClose={() => setShowDetailsModal(false)}
          salary={selectedSalary}
        />
      )}
    </Container>
  );
};

export default SalaryManagement;
