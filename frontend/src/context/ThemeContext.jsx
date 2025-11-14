// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Light Theme (Rajhans Transport brand tokens)
const lightTheme = {
  name: "light",
  colors: {
    // Brand
    primary: "#FF8C00", // Primary Brand Orange (user provided)

    // Backgrounds / surfaces
    background: "#FFFFFF",
    darkBackground: "#0A0A0A",
    surface: "#FFFFFF",
    surfaceHover: "#FFF4ED",
    border: "#E5E5E5",

    // Text
    textPrimary: "#1A1A1A",
    textSecondary: "#333333",
    textTertiary: "#6B7280",
    textInverse: "#FFFFFF",

    // Feedback
    success: "#22E2A0",
    warning: "#FFB347",
    danger: "#FF6B6B",

    // Shadows (kept minimal)
    shadowSm: "0 6px 18px rgba(10,10,10,0.06)",
    shadowMd: "0 10px 24px rgba(10,10,10,0.08)",
    shadowLg: "0 18px 40px rgba(10,10,10,0.10)",
  },

  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "32px",
  },

  borderRadius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },
};

// Dark Theme (kept minimal)
const darkTheme = {
  name: "dark",
  colors: {
    primary: "#FF8C00",

    // Backgrounds / surfaces for dark theme
    background: "#0A0A0A",
    darkBackground: "#0A0A0A",
    surface: "#0F0F0F",
    surfaceHover: "#171717",
    border: "#1F1F1F",

    // Text
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB",
    textTertiary: "#9CA3AF",
    textInverse: "#0A0A0A",

    // Feedback
    success: "#22E2A0",
    warning: "#FFB347",
    danger: "#FF6B6B",

    shadowSm: "0 6px 18px rgba(0,0,0,0.16)",
    shadowMd: "0 10px 24px rgba(0,0,0,0.20)",
    shadowLg: "0 18px 40px rgba(0,0,0,0.24)",
  },

  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
  transitions: lightTheme.transitions,
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
