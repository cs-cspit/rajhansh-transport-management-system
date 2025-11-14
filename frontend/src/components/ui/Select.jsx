// src/components/ui/Select.jsx
import React, { forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const SelectWrapper = styled.div`
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

const SelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  font-size: 0.9375rem;
  font-family: inherit;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.danger : props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all ${(props) => props.theme.transitions.fast};
  cursor: pointer;
  appearance: none;

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
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${(props) => props.theme.colors.textTertiary};

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

const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      required = false,
      options = [],
      placeholder = "Select an option",
      className = "",
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();

    return (
      <SelectWrapper theme={theme} className={className}>
        {label && (
          <Label theme={theme} $required={required}>
            {label}
          </Label>
        )}

        <SelectContainer>
          <StyledSelect ref={ref} theme={theme} $error={error} {...props}>
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </StyledSelect>

          <SelectIcon theme={theme}>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </SelectIcon>
        </SelectContainer>

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
      </SelectWrapper>
    );
  }
);

Select.displayName = "Select";

export default Select;
