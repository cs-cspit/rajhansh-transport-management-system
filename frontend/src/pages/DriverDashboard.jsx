// src/pages/DriverDashboard.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const WelcomeSection = styled.div`
  background: ${"#FF8C00"};
  border-radius: ${(props) => props.theme?.borderRadius?.xl || "1rem"};
  padding: 2rem;
  color: #ffffff;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(255, 140, 0, 0.18);
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WelcomeText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

const WelcomeSubtext = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: ${(props) => {
    const v = props.$variant || "primary";
    if (v === "primary") return "#FF8C00"; // brand orange
    if (v === "light") return "#FFF4E6"; // soft orange/cream
    if (v === "dark") return "#1A1A1A"; // brand black
    if (v === "white") return "#FFFFFF";
    return "#FF8C00";
  }};
  border-radius: ${(props) => props.theme?.borderRadius?.xl || "1rem"};
  padding: 2rem;
  color: ${(props) => (props.$variant === "white" || props.$variant === "light" ? "#1A1A1A" : "#FFFFFF")};
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.6s ease-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
    animation: pulse 6s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
  }
`;

const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
`;

const ProfileSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 4px;
    height: 24px;
    background: #FF8C00;
    border-radius: 2px;
  }
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProfileLabel = styled.div`
  font-size: 0.875rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const ProfileValue = styled.div`
  font-size: 1.125rem;
  color: #2d3748;
  font-weight: 600;
`;

const ProfileInput = styled.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  ${(props) =>
    props.$variant === "primary" &&
    `
    background: #FF8C00;
    color: white;
    box-shadow: 0 6px 20px rgba(255, 140, 0, 0.22);

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 26px rgba(255, 140, 0, 0.28);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}

  ${(props) =>
    props.$variant === "secondary" &&
    `
    background: #e2e8f0;
    color: #2d3748;

    &:hover:not(:disabled) {
      background: #cbd5e0;
    }
  `}
`;

const SuccessMessage = styled.div`
  background: #c6f6d5;
  border: 2px solid #9ae6b4;
  color: #22543d;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ErrorMessage = styled.div`
  background: #fed7d7;
  border: 2px solid #fc8181;
  color: #742a2a;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid #e2e8f0;
    border-top-color: #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function DriverDashboard() {
  const { theme } = useTheme();
  const [driver, setDriver] = useState(null);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchDriver();
  }, []);

  const fetchDriver = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(
        `http://localhost:5000/api/drivers/${user.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setDriver(res.data.data.driver);
      setForm({
        name: res.data.data.driver.name || "",
        email: res.data.data.driver.email || "",
        phone: res.data.data.driver.phone || "",
      });
    } catch (err) {
      setError("Failed to load driver profile");
    }
  };

  const handleEdit = () => setEditing(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.put(
        `http://localhost:5000/api/drivers/${user.id}`,
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setDriver(res.data.data.driver);
      setEditing(false);
      setError("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Failed to update profile");
    }
    setSaving(false);
  };

  if (error && !driver) return <ErrorMessage>{error}</ErrorMessage>;
  if (!driver) return <Loader>Loading your dashboard...</Loader>;

  return (
    <Container>
      <WelcomeSection>
        <WelcomeText>Welcome back, {driver.name}!</WelcomeText>
        <WelcomeSubtext>Here's your dashboard overview</WelcomeSubtext>
      </WelcomeSection>

      <StatsGrid>
        <StatCard $variant="primary" $delay="0s">
          <StatIcon></StatIcon>
          <StatLabel>Assigned Truck</StatLabel>
          <StatValue>
            {driver.assignedTruck?.truckNumber || "Not Assigned"}
          </StatValue>
        </StatCard>

        <StatCard $variant="light" $delay="0.1s">
          <StatIcon></StatIcon>
          <StatLabel>Total Trips</StatLabel>
          <StatValue>{driver.trips?.length || 0}</StatValue>
        </StatCard>

        <StatCard $variant="white" $delay="0.2s">
          <StatIcon></StatIcon>
          <StatLabel>Experience</StatLabel>
          <StatValue>{driver.experienceYears || 0} Years</StatValue>
        </StatCard>

        <StatCard $variant="dark" $delay="0.3s">
          <StatIcon></StatIcon>
          <StatLabel>Status</StatLabel>
          <StatValue>{driver.status || "Active"}</StatValue>
        </StatCard>
      </StatsGrid>

      <ProfileSection>
        <SectionTitle>Profile Information</SectionTitle>

        {success && (
          <SuccessMessage>Profile updated successfully!</SuccessMessage>
        )}

        {error && driver && <ErrorMessage>{error}</ErrorMessage>}

        {editing ? (
          <form onSubmit={handleSave}>
            <ProfileGrid>
              <ProfileItem>
                <ProfileLabel>Full Name</ProfileLabel>
                <ProfileInput
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </ProfileItem>

              <ProfileItem>
                <ProfileLabel>Email Address</ProfileLabel>
                <ProfileInput
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </ProfileItem>

              <ProfileItem>
                <ProfileLabel>Phone Number</ProfileLabel>
                <ProfileInput
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </ProfileItem>

              <ProfileItem>
                <ProfileLabel>License Number</ProfileLabel>
                <ProfileValue>{driver.licenseNumber}</ProfileValue>
              </ProfileItem>
            </ProfileGrid>

            <ButtonGroup>
              <Button type="submit" $variant="primary" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                $variant="secondary"
                onClick={() => setEditing(false)}
                disabled={saving}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </form>
        ) : (
          <>
            <ProfileGrid>
              <ProfileItem>
                <ProfileLabel>Full Name</ProfileLabel>
                <ProfileValue>{driver.name}</ProfileValue>
              </ProfileItem>

              <ProfileItem>
                <ProfileLabel>Email Address</ProfileLabel>
                <ProfileValue>{driver.email}</ProfileValue>
              </ProfileItem>

              <ProfileItem>
                <ProfileLabel>Phone Number</ProfileLabel>
                <ProfileValue>{driver.phone}</ProfileValue>
              </ProfileItem>

              <ProfileItem>
                <ProfileLabel>License Number</ProfileLabel>
                <ProfileValue>{driver.licenseNumber}</ProfileValue>
              </ProfileItem>

              {driver.address && (
                <ProfileItem>
                  <ProfileLabel>Address</ProfileLabel>
                  <ProfileValue>{driver.address}</ProfileValue>
                </ProfileItem>
              )}
            </ProfileGrid>

            <ButtonGroup>
              <Button $variant="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            </ButtonGroup>
          </>
        )}
      </ProfileSection>
    </Container>
  );
}

export default DriverDashboard;
