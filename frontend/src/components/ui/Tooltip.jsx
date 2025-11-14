// src/components/ui/Tooltip.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textInverse};
  background: ${(props) => props.theme.colors.textPrimary};
  border-radius: ${(props) => props.theme.borderRadius.md};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  transition: opacity ${(props) => props.theme.transitions.fast},
    visibility ${(props) => props.theme.transitions.fast};
  box-shadow: ${(props) => props.theme.colors.shadowMd};

  ${(props) => {
    switch (props.$position) {
      case "top":
        return `
          bottom: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-top-color: ${props.theme.colors.textPrimary};
          }
        `;
      case "bottom":
        return `
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-bottom-color: ${props.theme.colors.textPrimary};
          }
        `;
      case "left":
        return `
          right: calc(100% + 0.5rem);
          top: 50%;
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 4px solid transparent;
            border-left-color: ${props.theme.colors.textPrimary};
          }
        `;
      case "right":
        return `
          left: calc(100% + 0.5rem);
          top: 50%;
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 4px solid transparent;
            border-right-color: ${props.theme.colors.textPrimary};
          }
        `;
      default:
        return "";
    }
  }}
`;

const Tooltip = ({ children, content, position = "top", delay = 0 }) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = () => {
    const id = setTimeout(() => {
      setVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setVisible(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <TooltipContent theme={theme} $visible={visible} $position={position}>
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};

export default Tooltip;
