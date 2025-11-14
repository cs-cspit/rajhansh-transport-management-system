// src/components/ReportMaintenanceModal.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Input, Select, Button, Alert } from "./ui";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReportMaintenanceModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assignedTruck, setAssignedTruck] = useState(null);
  const [formData, setFormData] = useState({
    truckId: "",
    maintenanceType: "emergency",
    category: "engine",
    priority: "high",
    issueDescription: "",
    odometerReading: "",
  });

  useEffect(() => {
    if (isOpen) {
      fetchAssignedTruck();
    }
  }, [isOpen]);

  const fetchAssignedTruck = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await axios.get(
        `http://localhost:5000/api/drivers/${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const truck = response.data.data.driver.assignedTruck;
      setAssignedTruck(truck);
      if (truck) {
        setFormData((prev) => ({ ...prev, truckId: truck._id }));
      }
    } catch (err) {
      setError("Failed to load truck information");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!assignedTruck) {
      setError("No truck assigned to you");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await onSubmit({ ...formData, reportedBy: user.id });
      setFormData({
        truckId: assignedTruck._id,
        maintenanceType: "emergency",
        category: "engine",
        priority: "high",
        issueDescription: "",
        odometerReading: "",
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
      title="Report Maintenance Issue"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Report Issue
          </Button>
        </>
      }
    >
      <Form theme={theme} onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}

        {assignedTruck ? (
          <Alert variant="info">
            <strong>Truck:</strong> {assignedTruck.truckNumber} -{" "}
            {assignedTruck.modelName}
          </Alert>
        ) : (
          <Alert variant="warning">No truck assigned</Alert>
        )}

        <FormGrid theme={theme}>
          <Select
            label="Issue Type"
            name="maintenanceType"
            value={formData.maintenanceType}
            onChange={handleChange}
            options={[
              { value: "emergency", label: "Emergency" },
              { value: "breakdown", label: "Breakdown" },
              { value: "regular", label: "Regular" },
            ]}
          />

          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
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
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "critical", label: "Critical" },
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />

          <Input
            type="number"
            label="Current Odometer (km)"
            name="odometerReading"
            value={formData.odometerReading}
            onChange={handleChange}
            required
          />
        </FormGrid>

        <Input
          as="textarea"
          label="Issue Description"
          name="issueDescription"
          value={formData.issueDescription}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describe the issue in detail..."
        />
      </Form>
    </Modal>
  );
};

export default ReportMaintenanceModal;
