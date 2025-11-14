// src/pages/OwnerSignup.jsx
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
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  padding: ${(props) => props.theme.spacing.xl};
`;

const SignupCard = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.colors.shadowXl};
  padding: ${(props) => props.theme.spacing.xxl};
  width: 100%;
  max-width: 500px;
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
  font-size: 3.5rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const LogoText = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

const LogoSubtext = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: ${(props) => props.theme.spacing.xs} 0 0 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SigninPrompt = styled.div`
  text-align: center;
  font-size: 0.9375rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: ${(props) => props.theme.spacing.lg};

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const OwnerSignup = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    contactNumber: "",
    ownerName: "",  
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

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/owner/register",
        {
          name: formData.ownerName,
          email: formData.email,
          password: formData.password,
          companyName: formData.companyName,
          contactNumber: formData.contactNumber,
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
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container theme={theme}>
      <SignupCard theme={theme}>
        <Logo theme={theme}>
          {/* <LogoIcon>🚛</LogoIcon> */}
          <LogoText theme={theme}>Create Owner Account</LogoText>
          <LogoSubtext theme={theme}>Get started with TMS</LogoSubtext>
        </Logo>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form theme={theme} onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="ABC Transport Company"
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
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />

          <Input
            type="text"
            label="Owner Name"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="John Doe"
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

          <FormGrid theme={theme}>
            <Input
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="owner@company.com"
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
              type="tel"
              label="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="1234567890"
              required
              leftIcon={
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              }
            />
          </FormGrid>

          <FormGrid theme={theme}>
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

            <Input
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
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
          </FormGrid>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            loading={loading}
            size="lg"
            style={{ marginTop: "1rem" }}
          >
            Create Account
          </Button>
        </Form>

        <SigninPrompt theme={theme}>
          Already have an account? <Link to="/login">Sign in</Link>
        </SigninPrompt>
      </SignupCard>
    </Container>
  );
};

export default OwnerSignup;
