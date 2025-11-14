// src/components/PredictiveMaintenanceModal.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Select, Button, Alert, Loader, Badge, Card } from "./ui";
import { maintenanceApi } from "../api/maintenanceApi";
import axios from "axios";

const PredictionCard = styled(Card)`
  padding: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.md};
  border-left: 4px solid
    ${(props) => {
      if (props.$urgency > 80) return props.theme.colors.danger;
      if (props.$urgency > 50) return props.theme.colors.warning;
      return props.theme.colors.success;
    }};
`;

const PredictionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const Category = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
  text-transform: capitalize;
`;

const UrgencyScore = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

const Score = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => {
    if (props.$score > 80) return props.theme.colors.danger;
    if (props.$score > 50) return props.theme.colors.warning;
    return props.theme.colors.success;
  }};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.md};
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

const EmptyState = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing.xxl};
  color: ${(props) => props.theme.colors.textSecondary};
`;

const PredictiveMaintenanceModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trucks, setTrucks] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState("");
  const [predictions, setPredictions] = useState(null);

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

  const handleAnalyze = async () => {
    if (!selectedTruck) {
      setError("Please select a truck");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await maintenanceApi.getPredictiveMaintenance(
        selectedTruck
      );
      setPredictions(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to generate predictions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Predictive Maintenance Analysis"
      size="lg"
    >
      {error && <Alert variant="danger">{error}</Alert>}

      <Select
        label="Select Truck"
        value={selectedTruck}
        onChange={(e) => setSelectedTruck(e.target.value)}
        options={trucks.map((truck) => ({
          value: truck._id,
          label: `${truck.truckNumber} - ${truck.modelName}`,
        }))}
      />

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Button
          variant="primary"
          onClick={handleAnalyze}
          loading={loading}
          fullWidth
        >
          Analyze Maintenance Patterns
        </Button>
      </div>

      {loading && <Loader text="Analyzing maintenance history..." />}

      {predictions && !predictions.hasSufficientData && (
        <EmptyState theme={theme}>
          <p>{predictions.message}</p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
            At least 3 completed maintenance records are required for
            prediction.
          </p>
        </EmptyState>
      )}

      {predictions && predictions.hasSufficientData && (
        <div>
          {predictions.predictions.length === 0 ? (
            <EmptyState theme={theme}>
              No maintenance predictions available for this truck.
            </EmptyState>
          ) : (
            predictions.predictions.map((pred, index) => (
              <PredictionCard
                key={index}
                theme={theme}
                $urgency={pred.urgencyScore}
              >
                <PredictionHeader theme={theme}>
                  <Category theme={theme}>{pred.category}</Category>
                  <UrgencyScore theme={theme}>
                    <Score theme={theme} $score={pred.urgencyScore}>
                      {pred.urgencyScore}%
                    </Score>
                    <Badge
                      variant={
                        pred.priority === "high"
                          ? "danger"
                          : pred.priority === "medium"
                          ? "warning"
                          : "success"
                      }
                    >
                      {pred.priority.toUpperCase()}
                    </Badge>
                  </UrgencyScore>
                </PredictionHeader>

                <InfoGrid theme={theme}>
                  <InfoItem>
                    <InfoLabel theme={theme}>Last Maintenance</InfoLabel>
                    <InfoValue theme={theme}>
                      {new Date(pred.lastMaintenanceDate).toLocaleDateString()}
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel theme={theme}>Days Since Last</InfoLabel>
                    <InfoValue theme={theme}>
                      {pred.daysSinceLast} days
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel theme={theme}>Avg Interval</InfoLabel>
                    <InfoValue theme={theme}>
                      {pred.avgDaysBetween} days
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel theme={theme}>Predicted Next Date</InfoLabel>
                    <InfoValue theme={theme}>
                      {new Date(pred.predictedNextDate).toLocaleDateString()}
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel theme={theme}>Frequency</InfoLabel>
                    <InfoValue theme={theme}>{pred.frequency} times</InfoValue>
                  </InfoItem>
                </InfoGrid>
              </PredictionCard>
            ))
          )}
        </div>
      )}
    </Modal>
  );
};

export default PredictiveMaintenanceModal;
