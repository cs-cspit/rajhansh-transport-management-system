// src/components/AddMaintenanceModal.jsx
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

const PartsSection = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: ${(props) => props.theme.spacing.md};
  margin: ${(props) => props.theme.spacing.md} 0;
`;

const PartRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: end;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const AddMaintenanceModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trucks, setTrucks] = useState([]);
  const [formData, setFormData] = useState({
    truckId: "",
    maintenanceType: "regular",
    category: "engine",
    priority: "medium",
    issueDescription: "",
    diagnosis: "",
    laborCost: "",
    odometerReading: "",
    serviceProvider: {
      name: "",
      location: "",
      contactNumber: "",
    },
    estimatedCompletionDate: "",
    notes: "",
    images: [],
    invoice: null,
  });
  const [parts, setParts] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchTrucks();
    }
  }, [isOpen]);

  const fetchTrucks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/trucks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrucks(response.data.data.trucks);
    } catch (err) {
      setError("Failed to load trucks");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name.startsWith("serviceProvider.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        serviceProvider: {
          ...prev.serviceProvider,
          [field]: value,
        },
      }));
    } else if (name === "images") {
      setFormData((prev) => ({ ...prev, images: Array.from(files) }));
    } else if (name === "invoice") {
      setFormData((prev) => ({ ...prev, invoice: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddPart = () => {
    setParts([
      ...parts,
      { partName: "", partNumber: "", quantity: 1, cost: 0 },
    ]);
  };

  const handlePartChange = (index, field, value) => {
    const updatedParts = [...parts];
    updatedParts[index][field] = value;
    setParts(updatedParts);
  };

  const handleRemovePart = (index) => {
    setParts(parts.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitData = {
        ...formData,
        partsReplaced: parts.filter((p) => p.partName && p.cost > 0),
      };

      await onSubmit(submitData);

      // Reset form
      setFormData({
        truckId: "",
        maintenanceType: "regular",
        category: "engine",
        priority: "medium",
        issueDescription: "",
        diagnosis: "",
        laborCost: "",
        odometerReading: "",
        serviceProvider: { name: "", location: "", contactNumber: "" },
        estimatedCompletionDate: "",
        notes: "",
        images: [],
        invoice: null,
      });
      setParts([]);
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
      title="Add Maintenance Log"
      size="xl"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Add Maintenance
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
            label="Maintenance Type"
            name="maintenanceType"
            value={formData.maintenanceType}
            onChange={handleChange}
            options={[
              { value: "regular", label: "Regular" },
              { value: "emergency", label: "Emergency" },
              { value: "preventive", label: "Preventive" },
              { value: "breakdown", label: "Breakdown" },
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
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
              { value: "critical", label: "Critical" },
            ]}
          />

          <FullWidth>
            <Input
              as="textarea"
              label="Issue Description"
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleChange}
              required
              rows={3}
            />
          </FullWidth>

          <Input
            type="number"
            label="Odometer Reading (km)"
            name="odometerReading"
            value={formData.odometerReading}
            onChange={handleChange}
            required
          />

          <Input
            type="number"
            label="Labor Cost (₹)"
            name="laborCost"
            value={formData.laborCost}
            onChange={handleChange}
            step="0.01"
          />

          <Input
            label="Service Provider"
            name="serviceProvider.name"
            value={formData.serviceProvider.name}
            onChange={handleChange}
          />

          <Input
            label="Provider Location"
            name="serviceProvider.location"
            value={formData.serviceProvider.location}
            onChange={handleChange}
          />

          <Input
            label="Provider Contact"
            name="serviceProvider.contactNumber"
            value={formData.serviceProvider.contactNumber}
            onChange={handleChange}
          />

          <Input
            type="date"
            label="Estimated Completion"
            name="estimatedCompletionDate"
            value={formData.estimatedCompletionDate}
            onChange={handleChange}
          />
        </FormGrid>

        <PartsSection theme={theme}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h4>Parts Replaced</h4>
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={handleAddPart}
            >
              + Add Part
            </Button>
          </div>

          {parts.map((part, index) => (
            <PartRow key={index} theme={theme}>
              <Input
                placeholder="Part Name"
                value={part.partName}
                onChange={(e) =>
                  handlePartChange(index, "partName", e.target.value)
                }
              />
              <Input
                placeholder="Part #"
                value={part.partNumber}
                onChange={(e) =>
                  handlePartChange(index, "partNumber", e.target.value)
                }
              />
              <Input
                type="number"
                placeholder="Qty"
                value={part.quantity}
                onChange={(e) =>
                  handlePartChange(index, "quantity", parseInt(e.target.value))
                }
                min="1"
              />
              <Input
                type="number"
                placeholder="Cost (₹)"
                value={part.cost}
                onChange={(e) =>
                  handlePartChange(index, "cost", parseFloat(e.target.value))
                }
                step="0.01"
              />
              <Button
                type="button"
                size="sm"
                variant="danger"
                onClick={() => handleRemovePart(index)}
              >
                ✕
              </Button>
            </PartRow>
          ))}
        </PartsSection>

        <FormGrid theme={theme}>
          <Input
            type="file"
            label="Images (Optional)"
            name="images"
            onChange={handleChange}
            accept="image/*"
            multiple
          />

          <Input
            type="file"
            label="Invoice (Optional)"
            name="invoice"
            onChange={handleChange}
            accept="image/*,application/pdf"
          />

          <FullWidth>
            <Input
              as="textarea"
              label="Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={2}
            />
          </FullWidth>
        </FormGrid>
      </Form>
    </Modal>
  );
};

export default AddMaintenanceModal;
