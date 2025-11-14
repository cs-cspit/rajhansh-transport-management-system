// src/pages/DriverLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Button, Input, Alert } from "../components/ui";
import axios from "axios";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.darkBackground};
  padding: ${(props) => props.theme.spacing.xl};
`;

const LoginCard = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.colors.shadowXl};
  padding: ${(props) => props.theme.spacing.xxl};
  width: 100%;
  max-width: 450px;
  animation: slideInUp 0.4s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const LogoIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto ${(props) => props.theme.spacing.md} auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  font-size: 1.75rem;
`;

const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0.5rem 0 0 0;
  text-align: center;
`;

const LogoSubtext = styled.p`
  font-size: 0.9375rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: ${(props) => props.theme.spacing.xs} 0 0 0;
`;

// Use primary Button variant (gradient) for sign-in

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`;

const OwnerLoginLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: all ${(props) => props.theme.transitions.fast};
  border: 1px solid ${(props) => props.theme.colors.border};

  &:hover {
    background: ${(props) => props.theme.colors.surfaceHover};
  }
`;

const DriverLogin = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/driver/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Store token and user role
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("userRole", "driver");
      localStorage.setItem("user", JSON.stringify(response.data.data.driver));

      // Navigate to driver dashboard
      navigate("/driver-dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container theme={theme}>
      <LoginCard theme={theme}>
        <Logo theme={theme}>
          <LogoIcon></LogoIcon>
          <LogoText theme={theme}>Driver Portal</LogoText>
          <LogoSubtext theme={theme}>Transport Management System</LogoSubtext>
        </Logo>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form theme={theme} onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="driver123"
            required
            leftIcon={
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />

          <Input
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            leftIcon={
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            loading={loading}
            size="lg"
          >
            Sign In
          </Button>
        </Form>

        <OwnerLoginLink theme={theme} to="/login">
          Owner Login
        </OwnerLoginLink>
      </LoginCard>
    </Container>
  );
};

export default DriverLogin;
