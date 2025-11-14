// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

// Rajhans brand colors
const BRAND = {
  orange: '#FF8C00',
  white: '#FFFFFF',
  black: '#0A0A0A',
  softWhiteText: '#FFFFFFA8',
  borderGray: '#E5E5E5'
};

const SidebarContainer = styled.aside`
  width: 260px;
  background: ${BRAND.black};
  border-right: 1px solid ${BRAND.borderGray};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  transition: all 0.25s ease;
  color: ${BRAND.softWhiteText};
`;

const Logo = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.onDark || '#FFFFFF'};
  border-bottom: 1px solid ${(props) => props.theme.colors.border || 'rgba(255,255,255,0.03)'};
`;

const Nav = styled.nav`
  padding: ${(props) => props.theme.spacing.md};
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  padding: 14px; /* 14–16px padding as requested */
  margin-bottom: ${(props) => props.theme.spacing.xs};
  border-radius: 8px; /* rounded corners */
  text-decoration: none;
  color: ${(props) => (props.$active ? BRAND.white : BRAND.softWhiteText)};
  font-weight: 500;
  transition: background 0.25s ease, color 0.25s ease, border-left 0.25s ease;
  position: relative;

  /* default icon color via child span */
  & > span {
    color: ${(props) => (props.$active ? BRAND.orange : BRAND.softWhiteText)};
    transition: color 0.25s ease;
  }

  background: ${(props) => (props.$active ? 'rgba(255,138,61,0.20)' : 'transparent')};
  border-left: ${(props) => (props.$active ? `4px solid ${BRAND.orange}` : '4px solid transparent')};

  &:hover {
    background: rgba(255,140,0,0.15);
    color: ${BRAND.white};
    & > span { color: ${BRAND.orange}; }
  }
`;

const Icon = styled.span`
  font-size: 1.25rem;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  padding: 12px 14px;
  margin: ${(props) => props.theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${BRAND.orange};
  background: transparent;
  color: ${BRAND.orange};
  font-weight: 600;
  cursor: pointer;
  width: calc(100% - 2rem);
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: ${BRAND.orange};
    color: ${BRAND.white};
    border-color: ${BRAND.orange};
  }
`;

const Sidebar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/trucks",  label: "Trucks" },
    { path: "/drivers",  label: "Drivers" },
    { path: "/trips", label: "Trips" },
    { path: "/fuel", label: "Fuel Management" },
    { path: "/maintenance", label: "Maintenance" },
    { path: "/salaries", label: "Salaries" },
    { path: "/expenses", label: "Expenses" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <SidebarContainer theme={theme}>
      <Logo theme={theme}>TMS</Logo>
      <Nav theme={theme}>
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            theme={theme}
            $active={location.pathname === item.path}
          >
            <Icon>{item.icon}</Icon>
            {item.label}
          </NavItem>
        ))}
      </Nav>
      <LogoutButton theme={theme} onClick={handleLogout}>
        {/* <Icon>🚪</Icon> */}
        Logout
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
