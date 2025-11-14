// src/components/MaintenanceStatsCard.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Card } from "./ui";

const StatsCard = styled(Card)`
  padding: ${(props) => props.theme.spacing.lg};
  cursor: default;

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
    const { theme, $variant } = props;
    switch ($variant) {
      case "primary":
        return theme.colors.primaryLight;
      case "success":
        return theme.colors.successLight;
      case "warning":
        return theme.colors.warningLight;
      case "danger":
        return theme.colors.dangerLight;
      case "info":
        return theme.colors.infoLight;
      case "secondary":
        return theme.colors.secondaryLight;
      default:
        return theme.colors.background;
    }
  }};
`;

const TextContent = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const MaintenanceStatsCard = ({ title, value, icon, variant = "primary" }) => {
  const { theme } = useTheme();

  return (
    <StatsCard theme={theme} hoverable>
      <CardContent theme={theme}>
        <IconWrapper theme={theme} $variant={variant}>
          {icon}
        </IconWrapper>
        <TextContent>
          <StatLabel theme={theme}>{title}</StatLabel>
          <StatValue theme={theme}>{value}</StatValue>
        </TextContent>
      </CardContent>
    </StatsCard>
  );
};

export default MaintenanceStatsCard;
