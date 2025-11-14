// src/components/ui/Input.jsx
import React, { forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};

  ${(props) =>
    props.$required &&
    `
    &::after {
      content: ' *';
      color: ${props.theme.colors.danger};
    }
  `}
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) => {
    if (props.$leftIcon && props.$rightIcon) return "0.75rem 2.5rem";
    if (props.$leftIcon) return "0.75rem 0.75rem 0.75rem 2.5rem";
    if (props.$rightIcon) return "0.75rem 2.5rem 0.75rem 0.75rem";
    return "0.75rem";
  }};
  font-size: 0.9375rem;
  font-family: inherit;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.danger : props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$error ? props.theme.colors.danger : props.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$error
          ? props.theme.colors.dangerLight
          : props.theme.colors.primaryLight};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textTertiary};
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.9375rem;
  font-family: inherit;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.danger : props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all ${(props) => props.theme.transitions.fast};
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$error ? props.theme.colors.danger : props.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$error
          ? props.theme.colors.dangerLight
          : props.theme.colors.primaryLight};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textTertiary};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  ${(props) =>
    props.$position === "left" ? "left: 0.75rem" : "right: 0.75rem"};
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.textTertiary};
  pointer-events: ${(props) => (props.$clickable ? "auto" : "none")};
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.danger};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const HelperText = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      onRightIconClick,
      required = false,
      type = "text",
      className = "",
      as = "input",
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const Component = as === "textarea" ? StyledTextarea : StyledInput;

    return (
      <InputWrapper theme={theme} className={className}>
        {label && (
          <Label theme={theme} $required={required}>
            {label}
          </Label>
        )}

        <InputContainer>
          {leftIcon && (
            <IconWrapper theme={theme} $position="left">
              {leftIcon}
            </IconWrapper>
          )}

          <Component
            ref={ref}
            theme={theme}
            $error={error}
            $leftIcon={leftIcon}
            $rightIcon={rightIcon}
            type={type}
            {...props}
          />

          {rightIcon && (
            <IconWrapper
              theme={theme}
              $position="right"
              $clickable={!!onRightIconClick}
              onClick={onRightIconClick}
            >
              {rightIcon}
            </IconWrapper>
          )}
        </InputContainer>

        {error && (
          <ErrorMessage theme={theme}>
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </ErrorMessage>
        )}

        {!error && helperText && (
          <HelperText theme={theme}>{helperText}</HelperText>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

export default Input;
