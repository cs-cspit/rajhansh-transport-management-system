// src/pages/ExpenseManagement.jsx
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
import { expenseApi } from "../api/expenseApi";
import AddExpenseModal from "../components/AddExpenseModal";

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

const ExpenseManagement = () => {
  const { theme } = useTheme();
  const [expenses, setExpenses] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    fetchExpenses();
    fetchStats();
  }, [filters]);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await expenseApi.getAllExpenses(filters);
      setExpenses(response.data.expenses);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch expenses");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await expenseApi.getExpenseStats({
        startDate: filters.startDate,
        endDate: filters.endDate,
      });
      setStats(response.data.stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddExpense = async (expenseData) => {
    try {
      await expenseApi.createExpense(expenseData);
      setShowAddModal(false);
      fetchExpenses();
      fetchStats();
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to create expense"
      );
    }
  };

  const handleApprove = async (id) => {
    if (window.confirm("Are you sure you want to approve this expense?")) {
      try {
        await expenseApi.approveExpense(id);
        fetchExpenses();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to approve expense");
      }
    }
  };

  const handleMarkPaid = async (id) => {
    if (window.confirm("Mark this expense as paid?")) {
      try {
        await expenseApi.markExpenseAsPaid(id);
        fetchExpenses();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to mark as paid");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await expenseApi.deleteExpense(id);
        fetchExpenses();
        fetchStats();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete expense");
      }
    }
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

  const getCategoryBadge = (category) => {
    const categoryMap = {
      fuel: { variant: "primary", text: "Fuel" },
      maintenance: { variant: "warning", text: "Maintenance" },
      toll: { variant: "info", text: "Toll" },
      salary: { variant: "success", text: "Salary" },
      insurance: { variant: "secondary", text: "Insurance" },
      permit: { variant: "info", text: "Permit" },
      other: { variant: "default", text: "Other" },
    };
    const config = categoryMap[category] || categoryMap.other;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>💳 Expense Management</Title>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          + Add Expense
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
            <StatLabel theme={theme}>Total Expenses</StatLabel>
            <StatValue theme={theme}>{stats.totalExpenses}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Total Amount</StatLabel>
            <StatValue theme={theme}>₹{stats.totalAmount.toFixed(2)}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Avg Expense</StatLabel>
            <StatValue theme={theme}>₹{stats.avgExpense.toFixed(2)}</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatLabel theme={theme}>Pending</StatLabel>
            <StatValue theme={theme}>{stats.pending}</StatValue>
          </StatCard>
        </StatsGrid>
      )}

      <FilterSection theme={theme}>
        <Select
          label="Category"
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          options={[
            { value: "", label: "All" },
            { value: "fuel", label: "Fuel" },
            { value: "maintenance", label: "Maintenance" },
            { value: "toll", label: "Toll" },
            { value: "salary", label: "Salary" },
            { value: "insurance", label: "Insurance" },
            { value: "permit", label: "Permit" },
            { value: "other", label: "Other" },
          ]}
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
              <Table.Header>Category</Table.Header>
              <Table.Header>Description</Table.Header>
              <Table.Header>Amount</Table.Header>
              <Table.Header>Paid To</Table.Header>
              <Table.Header>Payment Method</Table.Header>
              <Table.Header>Status</Table.Header>
              <Table.Header>Actions</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body loading={loading} empty={expenses.length === 0}>
            {expenses.map((expense) => (
              <Table.Row key={expense._id}>
                <Table.Cell>
                  {new Date(expense.date).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{getCategoryBadge(expense.category)}</Table.Cell>
                <Table.Cell>{expense.description}</Table.Cell>
                <Table.Cell>
                  <strong>₹{expense.amount.toFixed(2)}</strong>
                </Table.Cell>
                <Table.Cell>{expense.paidTo || "N/A"}</Table.Cell>
                <Table.Cell>
                  {expense.paymentMethod.replace("-", " ").toUpperCase()}
                </Table.Cell>
                <Table.Cell>{getStatusBadge(expense.status)}</Table.Cell>
                <Table.Cell>
                  <ActionButtons theme={theme}>
                    {expense.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleApprove(expense._id)}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => handleDelete(expense._id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                    {expense.status === "approved" && (
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => handleMarkPaid(expense._id)}
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

      {showAddModal && (
        <AddExpenseModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddExpense}
        />
      )}
    </Container>
  );
};

export default ExpenseManagement;
