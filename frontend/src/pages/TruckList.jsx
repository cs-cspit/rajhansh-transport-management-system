// src/pages/TruckList.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import {
  FaTruck,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFilter,
  FaUserPlus,
  FaTimes,
} from "react-icons/fa";

const Container = styled.div`
  padding: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem 0.875rem;
  gap: 0.5rem;
  transition: all 0.2s ease;
  min-width: 250px;

  &:focus-within {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 0.875rem;
  flex: 1;
  background: transparent;
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  background: #334155;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #1e293b;
    transform: translateY(-1px);
    color: white;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background: ${(props) =>
    props.$gradient || "linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))"};
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const FilterSection = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.875rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Select = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #94a3b8;
  }
`;

const TrucksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
`;

const TruckCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const TruckImage = styled.div`
  width: 100%;
  height: 120px;
  background: ${(props) =>
    props.$hasImage
      ? `url(${props.$image}) center/cover`
      : "linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  position: relative;
  overflow: hidden;

  /* thin orange line at top of the image area */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, var(--brand-orange), var(--brand-orange-dark));
  }

  /* svg icon color when showing FaTruck */
  & > svg {
    color: var(--brand-white);
    width: 48px;
    height: 48px;
    z-index: 1;
  }
`;

const TruckBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${(props) => {
    if (props.$status === "active") return "var(--brand-orange-light)";
    if (props.$status === "maintenance") return "var(--brand-orange-light)";
    if (props.$status === "in-transit") return "var(--brand-orange-light)";
    return "var(--border-light)";
  }};
  color: ${(props) => (props.$status === "active" ? "var(--brand-orange-dark)" : "var(--brand-white)")};
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const TruckContent = styled.div`
  padding: 1rem;
`;

const TruckNumber = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
`;

const TruckModel = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.75rem;
`;

const TruckInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.7rem;
  color: #475569;
`;

const ExpiryWarning = styled.div`
  background: #fef3c7;
  color: #78350f;
  padding: 0.375rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
  border: 1px solid #fde68a;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f1f5f9;
`;

const ActionButton = styled.button`
  padding: 0.5rem 0.25rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
  font-size: 0.7rem;

  ${(props) =>
    props.$variant === "view" &&
    `
    background: #f1f5f9;
    color: #475569;
    &:hover {
      background: #e2e8f0;
    }
  `}

  ${(props) =>
    props.$variant === "edit" &&
    `
    background: #dbeafe;
    color: #1e40af;
    &:hover {
      background: #bfdbfe;
    }
  `}

  ${(props) =>
    props.$variant === "assign" &&
    `
    background: #d1fae5;
    color: #065f46;
    &:hover {
      background: #a7f3d0;
    }
  `}

  ${(props) =>
    props.$variant === "delete" &&
    `
    background: #fee2e2;
    color: #991b1b;
    &:hover {
      background: #fecaca;
    }
  `}
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #1e293b;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DriverOption = styled.div`
  padding: 1rem;
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#e2e8f0")};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.$selected ? "#f0f4ff" : "white")};

  &:hover {
    border-color: #667eea;
  }
`;

const DriverName = styled.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const DriverInfo = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ModalButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.$primary &&
    `
    background: #334155;
    color: white;
    &:hover {
      background: #1e293b;
    }
  `}

  ${(props) =>
    !props.$primary &&
    `
    background: #f1f5f9;
    color: #475569;
    &:hover {
      background: #e2e8f0;
    }
  `}
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1rem;
  color: #64748b;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.3;
`;

function TruckList() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [trucks, setTrucks] = useState([]);
  const [filteredTrucks, setFilteredTrucks] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    fetchTrucks();
    fetchDrivers();
  }, []);

  useEffect(() => {
    filterTrucks();
  }, [trucks, search, statusFilter]);

  const fetchTrucks = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/trucks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Trucks response:", res.data);
      setTrucks(res.data.data.trucks);
    } catch (err) {
      console.error("Error fetching trucks", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDrivers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/drivers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDrivers(res.data.data.drivers);
    } catch (err) {
      console.error("Error fetching drivers", err);
    }
  };

  const filterTrucks = () => {
    let filtered = trucks;

    if (statusFilter !== "all") {
      filtered = filtered.filter((truck) => truck.status === statusFilter);
    }

    if (search) {
      filtered = filtered.filter(
        (truck) =>
          truck.truckNumber.toLowerCase().includes(search.toLowerCase()) ||
          truck.modelName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredTrucks(filtered);
  };

  const handleView = (truckId) => {
    // Navigate to truck details page
    navigate(`/trucks/${truckId}`);
  };

  const handleEdit = (truckId) => {
    // Navigate to edit truck page
    navigate(`/trucks/edit/${truckId}`);
  };

  const handleAssignDriver = (truck) => {
    setSelectedTruck(truck);
    setSelectedDriver(truck.assignedDriver?._id || null);
    setShowAssignModal(true);
  };

  const handleAssignSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/trucks/${selectedTruck._id}/assign-driver`,
        { driverId: selectedDriver },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setShowAssignModal(false);
      fetchTrucks();
      alert("Driver assigned successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to assign driver");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this truck?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/api/trucks/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchTrucks();
      } catch (err) {
        alert("Failed to delete truck");
      }
    }
  };

  const isExpiringSoon = (date) => {
    if (!date) return false;
    const expiryDate = new Date(date);
    const today = new Date();
    const daysUntilExpiry = Math.ceil(
      (expiryDate - today) / (1000 * 60 * 60 * 24)
    );
    return daysUntilExpiry <= 30 && daysUntilExpiry >= 0;
  };

  const stats = {
    total: trucks.length,
    active: trucks.filter((t) => t.status === "active").length,
    inTransit: trucks.filter((t) => t.status === "in-transit").length,
    maintenance: trucks.filter((t) => t.status === "maintenance").length,
  };

  if (loading) {
    return <LoadingContainer>Loading trucks...</LoadingContainer>;
  }

  return (
    <Container>
      <Header>
        <Title theme={theme}>
          <FaTruck size={20} /> Fleet Management
        </Title>
        <HeaderActions>
          <SearchBar>
            <FaSearch color="#94a3b8" size={14} />
            <SearchInput
              type="text"
              placeholder="Search trucks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchBar>
          <Button to="/trucks/add">
            <FaPlus size={14} /> Add
          </Button>
        </HeaderActions>
      </Header>

      <StatsGrid>
        <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
          <StatLabel>Total</StatLabel>
          <StatValue>{stats.total}</StatValue>
        </StatCard>

        <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
          <StatLabel>Active</StatLabel>
          <StatValue>{stats.active}</StatValue>
        </StatCard>

        <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
          <StatLabel>In Transit</StatLabel>
          <StatValue>{stats.inTransit}</StatValue>
        </StatCard>

        <StatCard $gradient="linear-gradient(140deg, var(--brand-orange), var(--brand-orange-dark))">
          <StatLabel>Maintenance</StatLabel>
          <StatValue>{stats.maintenance}</StatValue>
        </StatCard>
      </StatsGrid>

      <FilterSection>
        <FaFilter color="#64748b" size={14} />
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="in-transit">In Transit</option>
          <option value="maintenance">Maintenance</option>
          <option value="inactive">Inactive</option>
        </Select>
      </FilterSection>

      {filteredTrucks.length === 0 ? (
        <EmptyState>
          <EmptyIcon>🚛</EmptyIcon>
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem 0" }}>
            No trucks found
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#94a3b8", margin: 0 }}>
            Try adjusting your search or filters
          </p>
        </EmptyState>
      ) : (
        <TrucksGrid>
          {filteredTrucks.map((truck) => (
            <TruckCard key={truck._id}>
              <TruckImage
                $hasImage={!!truck.truckImage}
                $image={
                  truck.truckImage
                    ? `http://localhost:5000/uploads/${truck.truckImage}`
                    : null
                }
              >
                {!truck.truckImage && <FaTruck />}
                <TruckBadge $status={truck.status}>{truck.status}</TruckBadge>
              </TruckImage>

              <TruckContent>
                <TruckNumber>{truck.truckNumber}</TruckNumber>
                <TruckModel>
                  {truck.modelName} • {truck.capacity} kg
                </TruckModel>

                {(isExpiringSoon(truck.pucExpiryDate) ||
                  isExpiringSoon(truck.insuranceExpiryDate) ||
                  isExpiringSoon(truck.fitnessExpiryDate)) && (
                  <ExpiryWarning>
                    <FaExclamationTriangle size={10} />
                    Expiring soon
                  </ExpiryWarning>
                )}

                <TruckInfo>
                  <InfoRow>
                    <FaCalendarAlt color="#94a3b8" size={10} />
                    PUC:{" "}
                    {truck.pucExpiryDate
                      ? new Date(truck.pucExpiryDate).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "2-digit" }
                        )
                      : "N/A"}
                  </InfoRow>
                  <InfoRow>
                    <FaCalendarAlt color="#94a3b8" size={10} />
                    Ins:{" "}
                    {truck.insuranceExpiryDate
                      ? new Date(truck.insuranceExpiryDate).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "2-digit" }
                        )
                      : "N/A"}
                  </InfoRow>
                  {truck.assignedDriver ? (
                    <InfoRow>
                      <FaCheckCircle color="#22c55e" size={10} />
                      {truck.assignedDriver.name}
                    </InfoRow>
                  ) : (
                    <InfoRow style={{ color: "#94a3b8" }}>
                      No driver assigned
                    </InfoRow>
                  )}
                </TruckInfo>

                <Actions>
                  <ActionButton
                    $variant="view"
                    onClick={() => handleView(truck._id)}
                  >
                    <FaEye size={12} />
                  </ActionButton>
                  <ActionButton
                    $variant="edit"
                    onClick={() => handleEdit(truck._id)}
                  >
                    <FaEdit size={12} />
                  </ActionButton>
                  <ActionButton
                    $variant="assign"
                    onClick={() => handleAssignDriver(truck)}
                  >
                    <FaUserPlus size={12} />
                  </ActionButton>
                  <ActionButton
                    $variant="delete"
                    onClick={() => handleDelete(truck._id)}
                  >
                    <FaTrash size={12} />
                  </ActionButton>
                </Actions>
              </TruckContent>
            </TruckCard>
          ))}
        </TrucksGrid>
      )}

      {/* Assign Driver Modal */}
      {showAssignModal && (
        <ModalOverlay onClick={() => setShowAssignModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                Assign Driver to {selectedTruck?.truckNumber}
              </ModalTitle>
              <CloseButton onClick={() => setShowAssignModal(false)}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              {drivers.length === 0 ? (
                <p>No drivers available</p>
              ) : (
                drivers.map((driver) => (
                  <DriverOption
                    key={driver._id}
                    $selected={selectedDriver === driver._id}
                    onClick={() => setSelectedDriver(driver._id)}
                  >
                    <DriverName>{driver.name}</DriverName>
                    <DriverInfo>
                      {/* 📞 {driver.phone} • 🪪 {driver.licenseNumber} */}
                      {driver.assignedTruck &&
                        driver.assignedTruck._id !== selectedTruck?._id && (
                          <span style={{ color: "#f59e0b" }}>
                            {" "}
                            • Already assigned
                          </span>
                        )}
                    </DriverInfo>
                  </DriverOption>
                ))
              )}
            </ModalBody>

            <ModalActions>
              <ModalButton onClick={() => setShowAssignModal(false)}>
                Cancel
              </ModalButton>
              <ModalButton
                $primary
                onClick={handleAssignSubmit}
                disabled={!selectedDriver}
              >
                Assign Driver
              </ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default TruckList;
