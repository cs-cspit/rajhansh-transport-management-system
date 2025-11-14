// src/components/AddFuelLogModal.jsx
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

const AddFuelLogModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trucks, setTrucks] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    truckId: "",
    driverId: "",
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
    receipt: null,
  });

  useEffect(() => {
    if (isOpen) {
      fetchTrucksAndDrivers();
    }
  }, [isOpen]);

  const fetchTrucksAndDrivers = async () => {
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
      setError("Failed to load trucks and drivers");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name.startsWith("fuelStation.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        fuelStation: {
          ...prev.fuelStation,
          [field]: value,
        },
      }));
    } else if (name === "receipt") {
      setFormData((prev) => ({ ...prev, receipt: files[0] }));
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
        truckId: "",
        driverId: "",
        fuelStation: { name: "", location: "" },
        fuelType: "diesel",
        quantityLiters: "",
        pricePerLiter: "",
        odometerReading: "",
        paymentMethod: "cash",
        notes: "",
        receipt: null,
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
      size="lg"
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

        <FormGrid theme={theme}>
          <Select
            label="Truck"
            name="truckId"
            value={formData.truckId}
            onChange={handleChange}
            required
            options={trucks.map((truck) => ({
              value: truck._id,
              label: `${truck.truckNumber} - ${truck.modelName}`,
            }))}
          />

          <Select
            label="Driver"
            name="driverId"
            value={formData.driverId}
            onChange={handleChange}
            required
            options={drivers.map((driver) => ({
              value: driver._id,
              label: driver.name,
            }))}
          />

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

          <Select
            label="Fuel Type"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            options={[
              { value: "diesel", label: "Diesel" },
              { value: "petrol", label: "Petrol" },
              { value: "cng", label: "CNG" },
              { value: "electric", label: "Electric" },
            ]}
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
              { value: "credit", label: "Credit" },
            ]}
          />

          <FullWidth>
            <Input
              type="file"
              label="Receipt (Optional)"
              name="receipt"
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

export default AddFuelLogModal;
