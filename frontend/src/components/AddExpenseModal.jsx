// src/components/AddExpenseModal.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Input, Select, Button, Alert } from "./ui";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

const AddExpenseModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trucks, setTrucks] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    category: "fuel",
    description: "",
    amount: "",
    truckId: "",
    driverId: "",
    paymentMethod: "cash",
    paidTo: "",
    invoiceNumber: "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
    invoice: null,
  });

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const [trucksRes, driversRes] = await Promise.all([
        axios.get("http://localhost:5000/api/trucks", { headers }),
        axios.get("http://localhost:5000/api/drivers", { headers }),
      ]);

      setTrucks(trucksRes.data.data.trucks);
      setDrivers(driversRes.data.data.drivers);
    } catch (err) {
      setError("Failed to load data");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "invoice") {
      setFormData((prev) => ({ ...prev, invoice: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await onSubmit(formData);
      setFormData({
        category: "fuel",
        description: "",
        amount: "",
        truckId: "",
        driverId: "",
        paymentMethod: "cash",
        paidTo: "",
        invoiceNumber: "",
        date: new Date().toISOString().split("T")[0],
        notes: "",
        invoice: null,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Expense"
      size="lg"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Add Expense
          </Button>
        </>
      }
    >
      <Form theme={theme} onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}

        <FormGrid theme={theme}>
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            options={[
              { value: "fuel", label: "Fuel" },
              { value: "maintenance", label: "Maintenance" },
              { value: "toll", label: "Toll" },
              { value: "salary", label: "Salary" },
              { value: "insurance", label: "Insurance" },
              { value: "permit", label: "Permit" },
              { value: "other", label: "Other" },
            ]}
          />

          <Input
            type="number"
            label="Amount (₹)"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            step="0.01"
          />

          <FullWidth>
            <Input
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FullWidth>

          <Select
            label="Truck (Optional)"
            name="truckId"
            value={formData.truckId}
            onChange={handleChange}
            options={[
              { value: "", label: "None" },
              ...trucks.map((truck) => ({
                value: truck._id,
                label: `${truck.truckNumber} - ${truck.modelName}`,
              })),
            ]}
          />

          <Select
            label="Driver (Optional)"
            name="driverId"
            value={formData.driverId}
            onChange={handleChange}
            options={[
              { value: "", label: "None" },
              ...drivers.map((driver) => ({
                value: driver._id,
                label: driver.name,
              })),
            ]}
          />

          <Select
            label="Payment Method"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            options={[
              { value: "cash", label: "Cash" },
              { value: "card", label: "Card" },
              { value: "bank-transfer", label: "Bank Transfer" },
              { value: "upi", label: "UPI" },
              { value: "cheque", label: "Cheque" },
            ]}
          />

          <Input
            label="Paid To"
            name="paidTo"
            value={formData.paidTo}
            onChange={handleChange}
          />

          <Input
            label="Invoice Number"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
          />

          <Input
            type="date"
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <FullWidth>
            <Input
              type="file"
              label="Invoice Document (Optional)"
              name="invoice"
              onChange={handleChange}
              accept="image/*,application/pdf"
            />
          </FullWidth>

          <FullWidth>
            <Input
              as="textarea"
              label="Notes (Optional)"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
            />
          </FullWidth>
        </FormGrid>
      </Form>
    </Modal>
  );
};

export default AddExpenseModal;
