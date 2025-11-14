// src/components/CompleteTripModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Input, Button, Alert } from "./ui";

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

const InfoSection = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const Value = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 500;
`;

const CompleteTripModal = ({ isOpen, onClose, trip, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    actualDistance: "",
    fuelUsed: "",
    fuelCost: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!trip) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Complete Trip"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit} loading={loading}>
            Complete Trip
          </Button>
        </>
      }
    >
      <Form theme={theme}>
        {error && <Alert variant="danger">{error}</Alert>}

        <InfoSection theme={theme}>
          <InfoRow theme={theme}>
            <Label theme={theme}>Source</Label>
            <Value theme={theme}>{trip.source}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Destination</Label>
            <Value theme={theme}>{trip.destination}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Estimated Distance</Label>
            <Value theme={theme}>{trip.distance} km</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Started At</Label>
            <Value theme={theme}>
              {new Date(trip.startTime).toLocaleString()}
            </Value>
          </InfoRow>
        </InfoSection>

        <FormGrid theme={theme}>
          <Input
            type="number"
            label="Actual Distance (km)"
            name="actualDistance"
            value={formData.actualDistance}
            onChange={handleChange}
            placeholder={trip.distance}
            step="0.1"
            required
          />

          <Input
            type="number"
            label="Fuel Used (Liters)"
            name="fuelUsed"
            value={formData.fuelUsed}
            onChange={handleChange}
            placeholder="50"
            step="0.1"
            required
          />
        </FormGrid>

        <Input
          type="number"
          label="Fuel Cost (₹)"
          name="fuelCost"
          value={formData.fuelCost}
          onChange={handleChange}
          placeholder="5000"
          step="0.01"
        />

        <Input
          as="textarea"
          label="Completion Notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Any issues or notes about the trip..."
        />
      </Form>
    </Modal>
  );
};

export default CompleteTripModal;
