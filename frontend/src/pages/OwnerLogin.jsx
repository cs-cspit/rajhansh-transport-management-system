// src/pages/OwnerLogin.jsx
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
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primaryGradientStart} 0%, ${(props) => props.theme.colors.primaryGradientEnd} 100%);
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
  font-size: 4rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

const LogoSubtext = styled.p`
  font-size: 0.9375rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: ${(props) => props.theme.spacing.xs} 0 0 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`;

const ForgotPassword = styled(Link)`
  text-align: right;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  margin-top: -${(props) => props.theme.spacing.sm};

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  margin: ${(props) => props.theme.spacing.lg} 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.colors.border};
  }
`;

const DividerText = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const SignupPrompt = styled.div`
  text-align: center;
  font-size: 0.9375rem;
  color: ${(props) => props.theme.colors.textSecondary};

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DriverLoginLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: 500;
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.colors.surfaceHover};
  }
`;

const OwnerLogin = () => {
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
        "http://localhost:5000/api/auth/owner/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Store token and user role
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("userRole", "owner");
      localStorage.setItem("user", JSON.stringify(response.data.data.owner));

      // Navigate to dashboard
      navigate("/dashboard");
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
          {/* <LogoIcon>🚛</LogoIcon> */}
          <LogoText theme={theme}>TMS Owner Portal</LogoText>
          <LogoSubtext theme={theme}>Transport Management System</LogoSubtext>
        </Logo>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form theme={theme} onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="owner@example.com"
            required
            leftIcon={
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
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

        <Divider theme={theme}>
          <DividerText theme={theme}>or</DividerText>
        </Divider>

        <SignupPrompt theme={theme}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </SignupPrompt>

        <DriverLoginLink theme={theme} to="/driver-login">
          Driver Login
        </DriverLoginLink>
      </LoginCard>
    </Container>
  );
};

export default OwnerLogin;
