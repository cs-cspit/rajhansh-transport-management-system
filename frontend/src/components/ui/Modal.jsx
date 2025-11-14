// src/components/ui/Modal.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import Button from "./Button";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.colors.shadowXl};
  max-width: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "400px";
      case "lg":
        return "800px";
      case "xl":
        return "1200px";
      default:
        return "600px";
    }
  }};
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: scaleIn 0.2s ease-out;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.colors.surfaceHover};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
`;

const ModalFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  background: ${(props) => props.theme.colors.background};
`;

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlayClick = true,
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={closeOnOverlayClick ? onClose : undefined}>
      <ModalContainer
        theme={theme}
        $size={size}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <ModalHeader theme={theme}>
            <ModalTitle theme={theme}>{title}</ModalTitle>
            <CloseButton theme={theme} onClick={onClose}>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </CloseButton>
          </ModalHeader>
        )}

        <ModalBody theme={theme}>{children}</ModalBody>

        {footer && <ModalFooter theme={theme}>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
