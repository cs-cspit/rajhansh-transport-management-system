// src/components/ui/Alert.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const StyledAlert = styled.div`
  padding: 1rem 1.25rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  animation: slideInRight 0.3s ease-out;

  ${(props) => {
    const { theme } = props;
    switch (props.$variant) {
      case "success":
        return `
          background: ${theme.colors.successLight};
          border: 1px solid ${theme.colors.success};
          color: ${theme.colors.success};
        `;
      case "warning":
        return `
          background: ${theme.colors.warningLight};
          border: 1px solid ${theme.colors.warning};
          color: ${theme.colors.warning};
        `;
      case "danger":
        return `
          background: ${theme.colors.dangerLight};
          border: 1px solid ${theme.colors.danger};
          color: ${theme.colors.danger};
        `;
      case "info":
        return `
          background: ${theme.colors.infoLight};
          border: 1px solid ${theme.colors.info};
          color: ${theme.colors.info};
        `;
      default:
        return `
          background: ${theme.colors.background};
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.textSecondary};
        `;
    }
  }}

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.25rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: transparent;
  color: currentColor;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity ${(props) => props.theme.transitions.fast};

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const icons = {
  success: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const Alert = ({
  variant = "info",
  title,
  children,
  onClose,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <StyledAlert theme={theme} $variant={variant} className={className}>
      <IconWrapper>{icons[variant] || icons.info}</IconWrapper>

      <Content>
        {title && <Title>{title}</Title>}
        <Description>{children}</Description>
      </Content>

      {onClose && (
        <CloseButton theme={theme} onClick={onClose}>
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </CloseButton>
      )}
    </StyledAlert>
  );
};

export default Alert;
