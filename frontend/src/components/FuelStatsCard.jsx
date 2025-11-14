// src/components/FuelStatsCard.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Card } from "./ui";

const StatsCard = styled(Card)`
  padding: ${(props) => props.theme.spacing.lg};
  cursor: default;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  background: ${(props) => {
    const v = props.$variant || "primary";
    if (v === "primary") return props.theme.colors.primary || "#FF8C00";
    if (v === "light" || v === "secondary") return props.theme.colors.background || "#FFFFFF";
    if (v === "dark" || v === "danger") return "#1A1A1A";
    return props.theme.colors.primary || "#FF8C00";
  }};
  color: ${(props) => {
    const v = props.$variant || "primary";
    if (v === "light" || v === "secondary") return "#1A1A1A"; // black text on light
    return "#FFFFFF"; // white text on dark/orange
  }};

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  background: ${(props) => {
    const v = props.$variant || "primary";
    if (v === "primary") return "rgba(255,255,255,0.12)"; // subtle white overlay on orange
    if (v === "light" || v === "secondary") return props.theme.colors.primary || "#FF8C00"; // orange icon on white
    if (v === "dark" || v === "danger") return "rgba(255,255,255,0.08)";
    return "rgba(255,255,255,0.12)";
  }};
  color: ${(props) => (props.$variant === "light" || props.$variant === "secondary" ? "#FF8C00" : "#FFFFFF")};
`;

const TextContent = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: inherit;
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: inherit;
`;

const FuelStatsCard = ({ title, value, icon, variant = "primary" }) => {
  const { theme } = useTheme();

  return (
    <StatsCard theme={theme} $variant={variant} hoverable>
      <CardContent theme={theme}>
        <IconWrapper theme={theme} $variant={variant}>
          {icon}
        </IconWrapper>
        <TextContent>
          <StatLabel theme={theme} style={{ color: undefined }}>{title}</StatLabel>
          <StatValue theme={theme} style={{ color: undefined }}>{value}</StatValue>
        </TextContent>
      </CardContent>
    </StatsCard>
  );
};

export default FuelStatsCard;
