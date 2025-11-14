// src/components/GenerateSalaryModal.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Select, Button, Alert } from "./ui";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const GenerateSalaryModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    driverId: "",
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    if (isOpen) {
      fetchDrivers();
    }
  }, [isOpen]);

  const fetchDrivers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/drivers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDrivers(response.data.data.drivers);
    } catch (err) {
      setError("Failed to load drivers");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await onSubmit({
        driverId: formData.driverId,
        month: parseInt(formData.month),
        year: parseInt(formData.year),
      });
      setFormData({
        driverId: "",
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Generate Salary"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Generate Salary
          </Button>
        </>
      }
    >
      <Form theme={theme} onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}

        <Select
          label="Select Driver"
          name="driverId"
          value={formData.driverId}
          onChange={handleChange}
          required
          options={drivers.map((driver) => ({
            value: driver._id,
            label: driver.name,
          }))}
        />

        <Select
          label="Month"
          name="month"
          value={formData.month}
          onChange={handleChange}
          options={monthNames.map((name, index) => ({
            value: index + 1,
            label: name,
          }))}
        />

        <Select
          label="Year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          options={years.map((year) => ({
            value: year,
            label: year.toString(),
          }))}
        />

        <Alert variant="info">
          Salary will be automatically calculated based on completed trips,
          bonuses, and deductions for the selected month.
        </Alert>
      </Form>
    </Modal>
  );
};

export default GenerateSalaryModal;
