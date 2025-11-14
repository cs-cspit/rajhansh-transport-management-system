// src/pages/AddDriver.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import {
  FaUserTie,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaTruck,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowLeft,
} from "react-icons/fa";

const Container = styled.div`
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const BackButton = styled.button`
  padding: 0.5rem;
  background: #f1f5f9;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const Alert = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;

  ${(props) =>
    props.$variant === "success" &&
    `
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #a7f3d0;
  `}

  ${(props) =>
    props.$variant === "error" &&
    `
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fca5a5;
  `}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #475569;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Required = styled.span`
  color: #ef4444;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }

  &:disabled {
    background: #f8fafc;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${(props) =>
    props.$variant === "primary" &&
    `
    background: #334155;
    color: white;
    &:hover {
      background: #1e293b;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}

  ${(props) =>
    props.$variant === "secondary" &&
    `
    background: #f1f5f9;
    color: #475569;
    &:hover {
      background: #e2e8f0;
    }
  `}
`;

function AddDriver() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [trucks, setTrucks] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    licenseNumber: "",
    experienceYears: 0,
    assignedTruck: "",
    address: "",
  });

  useEffect(() => {
    fetchTrucks();
  }, []);

  const fetchTrucks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/trucks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrucks(res.data.data.trucks);
    } catch (err) {
      console.error("Error fetching trucks:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const token = localStorage.getItem("token");

      // Prepare data
      const payload = {
        ...formData,
        experienceYears: Number(formData.experienceYears) || 0,
        assignedTruck: formData.assignedTruck || null,
      };

      await axios.post("http://localhost:5000/api/drivers", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage({ type: "success", text: "Driver added successfully!" });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        licenseNumber: "",
        experienceYears: 0,
        assignedTruck: "",
        address: "",
      });

      // Navigate back after 2 seconds
      setTimeout(() => {
        navigate("/drivers");
      }, 2000);
    } catch (err) {
      setMessage({
        type: "error",
        text:
          err.response?.data?.message ||
          "Failed to add driver. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/drivers")}>
          <FaArrowLeft />
        </BackButton>
        <Title>
          <FaUserTie /> Add New Driver
        </Title>
      </Header>

      <Card>
        {message.text && (
          <Alert $variant={message.type}>
            {message.type === "success" ? (
              <FaCheckCircle />
            ) : (
              <FaExclamationCircle />
            )}
            {message.text}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>
              <FaUserTie /> Personal Information
            </SectionTitle>
            <Grid>
              <Field>
                <Label>
                  Full Name <Required>*</Required>
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter driver name"
                  required
                />
              </Field>

              <Field>
                <Label>
                  <FaPhone /> Phone Number <Required>*</Required>
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  pattern="[0-9]{10}"
                  required
                />
              </Field>

              <Field>
                <Label>
                  <FaEnvelope /> Email <Required>*</Required>
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="driver@example.com"
                  required
                />
              </Field>

              <Field>
                <Label>
                  Password <Required>*</Required>
                </Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  minLength="6"
                  required
                />
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaIdCard /> License & Experience
            </SectionTitle>
            <Grid>
              <Field>
                <Label>
                  License Number <Required>*</Required>
                </Label>
                <Input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  placeholder="e.g., DL-123456789"
                  required
                />
              </Field>

              <Field>
                <Label>Experience (Years)</Label>
                <Input
                  type="number"
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  max="50"
                />
              </Field>

              <Field style={{ gridColumn: "span 2" }}>
                <Label>
                  <FaTruck /> Assign Truck (Optional)
                </Label>
                <Select
                  name="assignedTruck"
                  value={formData.assignedTruck}
                  onChange={handleChange}
                >
                  <option value="">-- Select Truck --</option>
                  {trucks.map((truck) => (
                    <option key={truck._id} value={truck._id}>
                      {truck.truckNumber} - {truck.modelName}
                      {truck.assignedDriver && " (Already Assigned)"}
                    </option>
                  ))}
                </Select>
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaMapMarkerAlt /> Address
            </SectionTitle>
            <Field>
              <Label>Full Address</Label>
              <Textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete address"
              />
            </Field>
          </Section>

          <Actions>
            <Button
              type="button"
              $variant="secondary"
              onClick={() => navigate("/drivers")}
            >
              Cancel
            </Button>
            <Button type="submit" $variant="primary" disabled={loading}>
              {loading ? "Adding Driver..." : "Add Driver"}
            </Button>
          </Actions>
        </Form>
      </Card>
    </Container>
  );
}

export default AddDriver;
