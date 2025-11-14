// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import {
  FaTruck,
  FaUserTie,
  FaRoute,
  FaGasPump,
  FaExclamationTriangle,
} from "react-icons/fa";

const Container = styled.div`
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: ${(props) =>
    props.$gradient || `linear-gradient(135deg, ${props.theme.colors.primaryGradientStart} 0%, ${props.theme.colors.primaryGradientEnd} 100%)`};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  padding: ${(props) => props.theme.spacing.lg};
  color: ${ (props) => props.theme.colors.textInverse };
  position: relative;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
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
      rgba(255, 255, 255, 0.08) 0%,
      transparent 70%
    );
  }
`;

const StatIcon = styled.div`
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  opacity: 0.95;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.95;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textInverse};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TripList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TripItem = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  border-left: 4px solid ${(props) => props.theme.colors.primary};
`;

const TripHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TripRoute = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const TripStatus = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => {
    if (props.$status === "ongoing") return props.theme.colors.infoLight;
    if (props.$status === "completed") return props.theme.colors.successLight;
    return props.theme.colors.warningLight;
  }};
  color: ${(props) => {
    if (props.$status === "ongoing") return props.theme.colors.info;
    if (props.$status === "completed") return props.theme.colors.success;
    return props.theme.colors.warning;
  }};
`;

const TripDetail = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const AlertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AlertItem = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.warningLight};
  border-radius: 0.5rem;
  display: flex;
  align-items: start;
  gap: 0.75rem;
`;

const AlertIcon = styled.div`
  color: ${(props) => props.theme.colors.warning};
  font-size: 1.25rem;
  margin-top: 0.125rem;
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertTitle = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.25rem;
`;

const AlertText = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.danger};
  background: ${(props) => props.theme.colors.dangerLight};
  border-radius: 1rem;
`;

function Dashboard() {
  const { theme } = useTheme();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboard();
    const intervalId = setInterval(fetchDashboard, 30000); // Refresh every 30 seconds
    return () => clearInterval(intervalId);
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/dashboard/owner",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Dashboard data:", response.data);
      setDashboardData(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching dashboard:", err);
      setError(err.response?.data?.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LoadingContainer theme={theme}>Loading dashboard...</LoadingContainer>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorContainer theme={theme}>
          <h2>Error Loading Dashboard</h2>
          <p>{error}</p>
          <button onClick={fetchDashboard}>Retry</button>
        </ErrorContainer>
      </Container>
    );
  }

  const { summary, recentTrips, alerts } = dashboardData || {};

  return (
    <Container>
      <Header>
        <Title theme={theme}>Dashboard</Title>
        <Subtitle theme={theme}>
          Welcome back! Here's your fleet overview.
        </Subtitle>
      </Header>

      {/* Stats Cards */}
      <StatsGrid>
          <StatCard $gradient={`linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%)`}>
          <StatIcon>
            <FaTruck />
          </StatIcon>
          <StatLabel>Total Trucks</StatLabel>
          <StatValue>{summary?.totalTrucks || 0}</StatValue>
          <StatLabel style={{ marginTop: "0.5rem" }}>
            {summary?.activeTrucks || 0} Active •{" "}
            {summary?.maintenanceTrucks || 0} Maintenance
          </StatLabel>
        </StatCard>

        <StatCard $gradient={`linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%)`}>
          <StatIcon>
            <FaUserTie />
          </StatIcon>
          <StatLabel>Total Drivers</StatLabel>
          <StatValue>{summary?.totalDrivers || 0}</StatValue>
          <StatLabel style={{ marginTop: "0.5rem" }}>
            {summary?.activeDrivers || 0} Active
          </StatLabel>
        </StatCard>

        <StatCard $gradient={`linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%)`}>
          <StatIcon>
            <FaRoute />
          </StatIcon>
          <StatLabel>Total Trips</StatLabel>
          <StatValue>{summary?.totalTrips || 0}</StatValue>
          <StatLabel style={{ marginTop: "0.5rem" }}>
            {summary?.ongoingTrips || 0} Ongoing •{" "}
            {summary?.completedTrips || 0} Completed
          </StatLabel>
        </StatCard>

        <StatCard $gradient={`linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%)`}>
          <StatIcon>
            <FaGasPump />
          </StatIcon>
          <StatLabel>Total Distance</StatLabel>
          <StatValue>{(summary?.totalDistance || 0).toFixed(0)} km</StatValue>
          <StatLabel style={{ marginTop: "0.5rem" }}>
            Fuel: {(summary?.totalFuelUsed || 0).toFixed(0)} L
          </StatLabel>
        </StatCard>
      </StatsGrid>

      {/* Recent Trips & Alerts */}
      <ContentGrid>
        {/* Recent Trips */}
        <Card theme={theme}>
          <CardTitle theme={theme}>Recent Trips</CardTitle>
          <TripList>
            {recentTrips && recentTrips.length > 0 ? (
              recentTrips.map((trip) => (
                <TripItem key={trip._id} theme={theme}>
                  <TripHeader>
                    <TripRoute theme={theme}>
                      {trip.source} → {trip.destination}
                    </TripRoute>
                    <TripStatus theme={theme} $status={trip.status}>
                      {trip.status}
                    </TripStatus>
                  </TripHeader>
                  <TripDetail theme={theme}>
                     {trip.truckId?.truckNumber || "N/A"} • 👤{" "}
                    {trip.driverId?.name || "N/A"} •  {trip.distance || 0} km
                  </TripDetail>
                </TripItem>
              ))
            ) : (
              <TripDetail
                theme={theme}
                style={{ textAlign: "center", padding: "2rem" }}
              >
                No recent trips
              </TripDetail>
            )}
          </TripList>
        </Card>

        {/* Alerts */}
        <Card theme={theme}>
          <CardTitle theme={theme}>Alerts</CardTitle>
          <AlertList>
            {alerts?.expiringTruckDocs && alerts.expiringTruckDocs.length > 0
              ? alerts.expiringTruckDocs.map((truck) => (
                  <AlertItem key={truck._id} theme={theme}>
                    <AlertIcon theme={theme}>
                      <FaExclamationTriangle />
                    </AlertIcon>
                    <AlertContent>
                      <AlertTitle theme={theme}>{truck.truckNumber}</AlertTitle>
                      <AlertText theme={theme}>
                        Document expiring soon
                      </AlertText>
                    </AlertContent>
                  </AlertItem>
                ))
              : null}

            {alerts?.expiringDriverLicenses &&
            alerts.expiringDriverLicenses.length > 0
              ? alerts.expiringDriverLicenses.map((driver) => (
                  <AlertItem key={driver._id} theme={theme}>
                    <AlertIcon theme={theme}>
                      <FaExclamationTriangle />
                    </AlertIcon>
                    <AlertContent>
                      <AlertTitle theme={theme}>{driver.name}</AlertTitle>
                      <AlertText theme={theme}>
                        License expiring:{" "}
                        {new Date(
                          driver.licenseExpiryDate
                        ).toLocaleDateString()}
                      </AlertText>
                    </AlertContent>
                  </AlertItem>
                ))
              : null}

            {!alerts?.expiringTruckDocs?.length &&
              !alerts?.expiringDriverLicenses?.length && (
                <AlertText
                  theme={theme}
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  No alerts at this time
                </AlertText>
              )}
          </AlertList>
        </Card>
      </ContentGrid>
    </Container>
  );
}

export default Dashboard;
