// src/components/ui/Loader.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: ${(props) => (props.$fullPage ? "0" : "3rem")};
  ${(props) =>
    props.$fullPage &&
    `
    position: fixed;
    inset: 0;
    background: ${props.theme.colors.background};
    z-index: 9999;
  `}
`;

const SpinnerContainer = styled.div`
  ${(props) => {
    const size =
      props.$size === "sm" ? "2rem" : props.$size === "lg" ? "4rem" : "3rem";
    return `width: ${size}; height: ${size};`;
  }}
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid ${(props) => props.theme.colors.border};
  border-top-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  animation: bounce 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const LoadingText = styled.div`
  font-size: 0.9375rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;
`;

const Loader = ({
  type = "spinner",
  size = "md",
  text = "",
  fullPage = false,
}) => {
  const { theme } = useTheme();

  return (
    <LoaderWrapper theme={theme} $fullPage={fullPage}>
      {type === "spinner" ? (
        <SpinnerContainer $size={size}>
          <Spinner theme={theme} />
        </SpinnerContainer>
      ) : (
        <DotsContainer>
          <Dot theme={theme} $delay={0} />
          <Dot theme={theme} $delay={0.2} />
          <Dot theme={theme} $delay={0.4} />
        </DotsContainer>
      )}

      {text && <LoadingText theme={theme}>{text}</LoadingText>}
    </LoaderWrapper>
  );
};

export default Loader;
