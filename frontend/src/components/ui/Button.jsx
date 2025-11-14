// src/components/ui/Button.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const StyledButton = styled.button`
  padding: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "0.5rem 1rem";
      case "lg":
        return "0.875rem 2rem";
      default:
        return "0.75rem 1.5rem";
    }
  }};
  font-size: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "0.875rem";
      case "lg":
        return "1rem";
      default:
        return "0.9375rem";
    }
  }};
  font-weight: 500;
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all ${(props) => props.theme.transitions.fast};
  font-family: inherit;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  /* Variant styles */
  ${(props) => {
    const { theme } = props;
    switch (props.$variant) {
      case "primary":
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.textInverse};
          box-shadow: ${theme.colors.shadowSm};
          border: 1px solid ${theme.colors.primary};
          &:hover:not(:disabled) {
            filter: brightness(0.98);
            transform: translateY(-1px);
            box-shadow: ${theme.colors.shadowMd};
          }
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
      case "secondary":
        return `
          background: ${theme.colors.surface};
          color: ${theme.colors.textPrimary};
          border: 1px solid ${theme.colors.border};
          &:hover:not(:disabled) {
            background: ${theme.colors.surfaceHover};
          }
        `;
      case "success":
        return `
          background: ${theme.colors.success};
          color: ${theme.colors.textInverse};
          &:hover:not(:disabled) { transform: translateY(-1px); }
        `;
      case "danger":
        return `
          background: ${theme.colors.danger};
          color: ${theme.colors.textInverse};
          &:hover:not(:disabled) { transform: translateY(-1px); }
        `;
      case "outline":
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover:not(:disabled) {
            background: ${theme.colors.surfaceHover};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${theme.colors.textPrimary};
          &:hover:not(:disabled) {
            background: ${theme.colors.surfaceHover};
          }
        `;
      default:
        return `
          background: ${theme.colors.surface};
          color: ${theme.colors.textPrimary};
          border: 1px solid ${theme.colors.border};
          &:hover:not(:disabled) {
            background: ${theme.colors.surfaceHover};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Full width */
  ${(props) =>
    props.$fullWidth &&
    `
    width: 100%;
  `}

  /* Loading state */
  ${(props) =>
    props.$loading &&
    `
    pointer-events: none;
    opacity: 0.7;
  `}
`;

const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Button = ({
  children,
  variant = "default",
  size = "md",
  fullWidth = false,
  loading = false,
  icon,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      theme={theme}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading && <Spinner />}
      {!loading && icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;
