// src/components/ui/Card.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const StyledCard = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.colors.shadowSm};
  overflow: hidden;
  transition: all ${(props) => props.theme.transitions.normal};
  animation: fadeIn 0.3s ease-in-out;

  ${(props) =>
    props.$hoverable &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${props.theme.colors.shadowLg};
      border-color: ${props.theme.colors.primary};
    }
  `}

  ${(props) =>
    props.$padding &&
    `
    padding: ${props.theme.spacing[props.$padding] || props.theme.spacing.lg};
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardHeader = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  ${(props) =>
    props.$noBorder &&
    `
    border-bottom: none;
  `}
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0.5rem 0 0 0;
`;

const CardBody = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
`;

const CardFooter = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.background};

  ${(props) =>
    props.$noBorder &&
    `
    border-top: none;
    background: transparent;
  `}
`;

const Card = ({
  children,
  hoverable = false,
  padding,
  className = "",
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <StyledCard
      theme={theme}
      $hoverable={hoverable}
      $padding={padding}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};

Card.Header = ({ children, noBorder = false }) => {
  const { theme } = useTheme();
  return (
    <CardHeader theme={theme} $noBorder={noBorder}>
      {children}
    </CardHeader>
  );
};

Card.Title = ({ children }) => {
  const { theme } = useTheme();
  return <CardTitle theme={theme}>{children}</CardTitle>;
};

Card.Description = ({ children }) => {
  const { theme } = useTheme();
  return <CardDescription theme={theme}>{children}</CardDescription>;
};

Card.Body = ({ children }) => {
  const { theme } = useTheme();
  return <CardBody theme={theme}>{children}</CardBody>;
};

Card.Footer = ({ children, noBorder = false }) => {
  const { theme } = useTheme();
  return (
    <CardFooter theme={theme} $noBorder={noBorder}>
      {children}
    </CardFooter>
  );
};

export default Card;
