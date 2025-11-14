// src/components/AddTripModal.jsx
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

const AddTripModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assignedTruck, setAssignedTruck] = useState(null);
  const [formData, setFormData] = useState({
    truckId: "",
    source: "",
    destination: "",
    distance: "",
    notes: "",
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
      setError("No truck assigned to you. Please contact admin.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await onSubmit(formData);
      setFormData({
        truckId: assignedTruck._id,
        source: "",
        destination: "",
        distance: "",
        notes: "",
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
      title="Start New Trip"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Start Trip
          </Button>
        </>
      }
    >
      <Form theme={theme} onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}

        {assignedTruck ? (
          <Alert variant="info">
            <strong>Assigned Truck:</strong> {assignedTruck.truckNumber} -{" "}
            {assignedTruck.modelName}
          </Alert>
        ) : (
          <Alert variant="warning">
            No truck assigned. Please contact your administrator.
          </Alert>
        )}

        <FormGrid theme={theme}>
          <Input
            label="Source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="Starting location"
            required
          />

          <Input
            label="Destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination location"
            required
          />
        </FormGrid>

        <Input
          type="number"
          label="Estimated Distance (km)"
          name="distance"
          value={formData.distance}
          onChange={handleChange}
          placeholder="250"
          step="0.1"
          required
        />

        <FullWidth>
          <Input
            as="textarea"
            label="Notes (Optional)"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Add any notes about the trip..."
          />
        </FullWidth>
      </Form>
    </Modal>
  );
};

export default AddTripModal;
