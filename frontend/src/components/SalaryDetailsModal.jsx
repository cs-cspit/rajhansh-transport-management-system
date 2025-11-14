// src/components/SalaryDetailsModal.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Badge } from "./ui";

const DetailsGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.lg};
`;

const Section = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
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
  font-size: 0.9375rem;
`;

const Value = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 500;
  font-size: 0.9375rem;
`;

const TotalRow = styled(InfoRow)`
  margin-top: ${(props) => props.theme.spacing.md};
  padding-top: ${(props) => props.theme.spacing.md};
  border-top: 2px solid ${(props) => props.theme.colors.border};
  font-weight: 600;
  font-size: 1.125rem;
`;

const SalaryDetailsModal = ({ isOpen, onClose, salary }) => {
  const { theme } = useTheme();

  if (!salary) return null;

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

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { variant: "warning", text: "Pending" },
      approved: { variant: "info", text: "Approved" },
      paid: { variant: "success", text: "Paid" },
      rejected: { variant: "danger", text: "Rejected" },
    };
    const config = statusMap[status] || statusMap.pending;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Salary Details - ${salary.driverId?.name || "N/A"}`}
      size="lg"
    >
      <DetailsGrid theme={theme}>
        {/* Basic Info */}
        <Section theme={theme}>
          <SectionTitle theme={theme}>Basic Information</SectionTitle>
          <InfoRow theme={theme}>
            <Label theme={theme}>Driver Name</Label>
            <Value theme={theme}>{salary.driverId?.name || "N/A"}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Period</Label>
            <Value theme={theme}>
              {monthNames[salary.month - 1]} {salary.year}
            </Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Status</Label>
            <Value theme={theme}>{getStatusBadge(salary.status)}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Working Days</Label>
            <Value theme={theme}>{salary.totalWorkingDays} days</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Trips Completed</Label>
            <Value theme={theme}>{salary.tripsCompleted}</Value>
          </InfoRow>
        </Section>

        {/* Earnings */}
        <Section theme={theme}>
          <SectionTitle theme={theme}>Earnings</SectionTitle>
          <InfoRow theme={theme}>
            <Label theme={theme}>Base Salary</Label>
            <Value theme={theme}>₹{salary.baseSalary.toFixed(2)}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Trip Bonus</Label>
            <Value theme={theme}>₹{salary.tripBonus.toFixed(2)}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Performance Bonus</Label>
            <Value theme={theme}>₹{salary.performanceBonus.toFixed(2)}</Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Overtime</Label>
            <Value theme={theme}>₹{salary.overtimeAmount.toFixed(2)}</Value>
          </InfoRow>
          <TotalRow theme={theme}>
            <Label theme={theme}>Total Earnings</Label>
            <Value theme={theme}>₹{salary.totalEarnings.toFixed(2)}</Value>
          </TotalRow>
        </Section>

        {/* Deductions */}
        <Section theme={theme}>
          <SectionTitle theme={theme}>Deductions</SectionTitle>
          <InfoRow theme={theme}>
            <Label theme={theme}>Fuel Penalty</Label>
            <Value theme={theme}>
              ₹{salary.deductions.fuelPenalty.toFixed(2)}
            </Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Maintenance Penalty</Label>
            <Value theme={theme}>
              ₹{salary.deductions.maintenancePenalty.toFixed(2)}
            </Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Late Penalty</Label>
            <Value theme={theme}>
              ₹{salary.deductions.latePenalty.toFixed(2)}
            </Value>
          </InfoRow>
          <InfoRow theme={theme}>
            <Label theme={theme}>Other Deductions</Label>
            <Value theme={theme}>₹{salary.deductions.other.toFixed(2)}</Value>
          </InfoRow>
          <TotalRow theme={theme}>
            <Label theme={theme}>Total Deductions</Label>
            <Value theme={theme}>₹{salary.totalDeductions.toFixed(2)}</Value>
          </TotalRow>
        </Section>

        {/* Net Salary */}
        <Section theme={theme}>
          <TotalRow theme={theme}>
            <Label theme={theme} style={{ fontSize: "1.25rem" }}>
              Net Salary
            </Label>
            <Value
              theme={theme}
              style={{ fontSize: "1.5rem", color: theme.colors.success }}
            >
              ₹{salary.netSalary.toFixed(2)}
            </Value>
          </TotalRow>
        </Section>

        {/* Payment Info */}
        {salary.status === "paid" && (
          <Section theme={theme}>
            <SectionTitle theme={theme}>Payment Information</SectionTitle>
            <InfoRow theme={theme}>
              <Label theme={theme}>Payment Method</Label>
              <Value theme={theme}>
                {salary.paymentMethod.replace("-", " ").toUpperCase()}
              </Value>
            </InfoRow>
            <InfoRow theme={theme}>
              <Label theme={theme}>Paid On</Label>
              <Value theme={theme}>
                {new Date(salary.paidOn).toLocaleDateString()}
              </Value>
            </InfoRow>
            {salary.transactionReference && (
              <InfoRow theme={theme}>
                <Label theme={theme}>Transaction Ref</Label>
                <Value theme={theme}>{salary.transactionReference}</Value>
              </InfoRow>
            )}
          </Section>
        )}

        {/* Notes */}
        {salary.notes && (
          <Section theme={theme}>
            <SectionTitle theme={theme}>Notes</SectionTitle>
            <p style={{ margin: 0, color: theme.colors.textSecondary }}>
              {salary.notes}
            </p>
          </Section>
        )}
      </DetailsGrid>
    </Modal>
  );
};

export default SalaryDetailsModal;
