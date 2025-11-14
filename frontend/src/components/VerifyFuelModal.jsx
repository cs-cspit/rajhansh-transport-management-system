// src/components/VerifyFuelModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Select, Input, Button, Alert, Badge } from "./ui";

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`;

const InfoLabel = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const InfoValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const AnomalyAlert = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.dangerLight};
  border: 1px solid ${(props) => props.theme.colors.danger};
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.colors.danger};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const VerifyFuelModal = ({ isOpen, onClose, fuelLog, onSubmit }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    status: "verified",
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

  if (!fuelLog) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Verify Fuel Log"
      size="lg"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Submit Verification
          </Button>
        </>
      }
    >
      {error && <Alert variant="danger">{error}</Alert>}

      {fuelLog.isAnomaly && (
        <AnomalyAlert theme={theme}>
          <strong>Anomaly Detected:</strong> {fuelLog.anomalyReason}
        </AnomalyAlert>
      )}

      <InfoGrid theme={theme}>
        <InfoItem>
          <InfoLabel theme={theme}>Truck</InfoLabel>
          <InfoValue theme={theme}>
            {fuelLog.truckId?.truckNumber || "N/A"}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Driver</InfoLabel>
          <InfoValue theme={theme}>{fuelLog.driverId?.name || "N/A"}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Fuel Station</InfoLabel>
          <InfoValue theme={theme}>
            {fuelLog.fuelStation?.name || "N/A"}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Location</InfoLabel>
          <InfoValue theme={theme}>
            {fuelLog.fuelStation?.location || "N/A"}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Quantity</InfoLabel>
          <InfoValue theme={theme}>{fuelLog.quantityLiters} Liters</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Total Cost</InfoLabel>
          <InfoValue theme={theme}>₹{fuelLog.totalCost.toFixed(2)}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Fuel Efficiency</InfoLabel>
          <InfoValue theme={theme}>
            {fuelLog.fuelEfficiency ? `${fuelLog.fuelEfficiency} km/L` : "N/A"}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel theme={theme}>Payment Method</InfoLabel>
          <InfoValue theme={theme}>{fuelLog.paymentMethod}</InfoValue>
        </InfoItem>
      </InfoGrid>

      <Select
        label="Verification Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        options={[
          { value: "verified", label: "Verified" },
          { value: "rejected", label: "Rejected" },
        ]}
      />

      <Input
        as="textarea"
        label="Verification Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        rows={3}
        placeholder="Add notes about this verification..."
      />
    </Modal>
  );
};

export default VerifyFuelModal;
