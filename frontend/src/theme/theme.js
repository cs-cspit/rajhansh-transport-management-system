// src/theme/theme.js
export const lightTheme = {
  name: "light",
  colors: {
    // Brand colors (use the logo orange as primary)
  primary: "#FF8C00", // logo orange (user provided)
  primaryHover: "#FF7A00",
  primaryLight: "#FFB86A",

  // Secondary/intents mapped to brand orange to keep dashboard boxes consistent
  secondary: "#FF8C00",
  secondaryHover: "#FF7A00",
  secondaryLight: "#FFB86A",

  // Accent colors aligned with brand
  accent: "#FF8C00",
  accentHover: "#FF7A00",

  // Status colors aligned to brand orange to make stat cards uniform
  success: "#FF8C00",
  successLight: "#FFB86A",
  warning: "#FF8C00",
  warningLight: "#FFB86A",
  danger: "#FF8C00",
  dangerLight: "#FFB86A",
  info: "#FF8C00",
  infoLight: "#FFB86A",

  // Neutral colors
  background: "#FFFFFF",
  surface: "#FFFFFF",
  surfaceHover: "#F3F6FF",
  border: "#E5E7EB",
  borderLight: "#F3F6FF",

  // Text colors
  textPrimary: "#1A1A1A",
  textSecondary: "#333333",
  textTertiary: "#9CA3AF",
  textInverse: "#ffffff",

  // Shadows
  shadowSm: "0 4px 12px rgba(0, 0, 0, 0.08)",
  shadowMd: "0 8px 20px rgba(0, 0, 0, 0.08)",
  shadowLg: "0 12px 28px rgba(0, 0, 0, 0.10)",
  shadowXl: "0 20px 40px rgba(0, 0, 0, 0.12)",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },
};

export const darkTheme = {
  name: "dark",
  colors: {
    // Primary colors
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    primaryLight: "#1e3a8a",

    // Secondary colors
    secondary: "#8b5cf6",
    secondaryHover: "#7c3aed",
    secondaryLight: "#4c1d95",

    // Accent colors
    accent: "#fbbf24",
    accentHover: "#f59e0b",

    // Status colors
    success: "#34d399",
    successLight: "#064e3b",
    warning: "#fbbf24",
    warningLight: "#78350f",
    danger: "#f87171",
    dangerLight: "#7f1d1d",
    info: "#60a5fa",
    infoLight: "#1e3a8a",

    // Neutral colors
    background: "#0f172a",
    surface: "#1e293b",
    surfaceHover: "#334155",
    border: "#334155",
    borderLight: "#475569",

    // Text colors
    textPrimary: "#f1f5f9",
    textSecondary: "#cbd5e1",
    textTertiary: "#94a3b8",
    textInverse: "#0f172a",

    // Shadows
    shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.4)",
    shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
    shadowXl: "0 20px 25px -5px rgba(0, 0, 0, 0.6)",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },
};
