// src/components/AddDriverFuelLogModal.jsx
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

const AddDriverFuelLogModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assignedTruck, setAssignedTruck] = useState(null);
  const [formData, setFormData] = useState({
    truckId: "",
    fuelStation: {
      name: "",
      location: "",
    },
    fuelType: "diesel",
    quantityLiters: "",
    pricePerLiter: "",
    odometerReading: "",
    paymentMethod: "cash",
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

    if (name.startsWith("fuelStation.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        fuelStation: {
          ...prev.fuelStation,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
      await onSubmit(formData);
      setFormData({
        truckId: assignedTruck._id,
        fuelStation: { name: "", location: "" },
        fuelType: "diesel",
        quantityLiters: "",
        pricePerLiter: "",
        odometerReading: "",
        paymentMethod: "cash",
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
      title="Add Fuel Log"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Add Fuel Log
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
          <Input
            label="Fuel Station Name"
            name="fuelStation.name"
            value={formData.fuelStation.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Station Location"
            name="fuelStation.location"
            value={formData.fuelStation.location}
            onChange={handleChange}
            required
          />

          <Input
            type="number"
            label="Quantity (Liters)"
            name="quantityLiters"
            value={formData.quantityLiters}
            onChange={handleChange}
            required
            step="0.01"
          />

          <Input
            type="number"
            label="Price per Liter (₹)"
            name="pricePerLiter"
            value={formData.pricePerLiter}
            onChange={handleChange}
            required
            step="0.01"
          />

          <Input
            type="number"
            label="Odometer Reading (km)"
            name="odometerReading"
            value={formData.odometerReading}
            onChange={handleChange}
            required
          />

          <Select
            label="Payment Method"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            options={[
              { value: "cash", label: "Cash" },
              { value: "card", label: "Card" },
              { value: "upi", label: "UPI" },
              { value: "fuel-card", label: "Fuel Card" },
            ]}
          />
        </FormGrid>

        <Input
          as="textarea"
          label="Notes (Optional)"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
        />
      </Form>
    </Modal>
  );
};

export default AddDriverFuelLogModal;
