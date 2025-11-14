// src/components/ui/Badge.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "0.125rem 0.5rem";
      case "lg":
        return "0.5rem 1rem";
      default:
        return "0.25rem 0.75rem";
    }
  }};
  font-size: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "0.75rem";
      case "lg":
        return "1rem";
      default:
        return "0.875rem";
    }
  }};
  font-weight: 500;
  border-radius: ${(props) => props.theme.borderRadius.full};
  white-space: nowrap;
  transition: all ${(props) => props.theme.transitions.fast};

  ${(props) => {
    const { theme } = props;
    switch (props.$variant) {
      case "success":
        return `
          background: ${theme.colors.successLight};
          color: ${theme.colors.success};
        `;
      case "warning":
        return `
          background: ${theme.colors.warningLight};
          color: ${theme.colors.warning};
        `;
      case "danger":
        return `
          background: ${theme.colors.dangerLight};
          color: ${theme.colors.danger};
        `;
      case "info":
        return `
          background: ${theme.colors.infoLight};
          color: ${theme.colors.info};
        `;
      case "primary":
        return `
          background: ${theme.colors.primaryLight};
          color: ${theme.colors.primary};
        `;
      case "secondary":
        return `
          background: ${theme.colors.secondaryLight};
          color: ${theme.colors.secondary};
        `;
      default:
        return `
          background: ${theme.colors.background};
          color: ${theme.colors.textSecondary};
          border: 1px solid ${theme.colors.border};
        `;
    }
  }}

  ${(props) =>
    props.$dot &&
    `
    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: currentColor;
    }
  `}
`;

const Badge = ({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <StyledBadge
      theme={theme}
      $variant={variant}
      $size={size}
      $dot={dot}
      className={className}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;
