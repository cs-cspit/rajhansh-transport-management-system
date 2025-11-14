// src/pages/AddTruck.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import {
  FaTruck,
  FaCalendarAlt,
  FaFilePdf,
  FaImage,
  FaCheckCircle,
  FaExclamationCircle,
  FaQrcode,
  FaDownload,
  FaUpload,
  FaTimes,
} from "react-icons/fa";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin-bottom: 2rem;
`;

const Alert = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
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

  ${(props) =>
    props.$variant === "success" &&
    `
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    color: #065f46;
    border: 2px solid #10b981;
  `}

  ${(props) =>
    props.$variant === "error" &&
    `
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #991b1b;
    border: 2px solid #ef4444;
  `}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  background: #f8fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid #e2e8f0;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #475569;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  }

  &:hover {
    border-color: #cbd5e0;
  }
`;

const FileInputWrapper = styled.div`
  position: relative;
`;

const FileInput = styled.input`
  display: none;
`;

const FileButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FileName = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RemoveFile = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #dc2626;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PreviewImage = styled.img`
  max-width: 300px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const QRSection = styled.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  border: 2px solid #bae6fd;
`;

const QRTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0c4a6e;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const QRImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background: white;
  padding: 1rem;
`;

const DownloadButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
  }
`;

function AddTruck() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    truckNumber: "",
    modelName: "",
    capacity: "",
    pucNumber: "",
    permitAllIndiaNumber: "",
    permitGujaratNumber: "",
    insuranceNumber: "",
    fitnessNumber: "",
    rcNumber: "",
    pucExpiryDate: "",
    permitAllIndiaExpiryDate: "",
    permitGujaratExpiryDate: "",
    insuranceExpiryDate: "",
    fitnessExpiryDate: "",
    rcExpiryDate: "",
  });

  const [files, setFiles] = useState({});
  const [fileNames, setFileNames] = useState({});
  const [preview, setPreview] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    if (file) {
      setFiles({ ...files, [name]: file });
      setFileNames({ ...fileNames, [name]: file.name });

      if (name === "truckImage") {
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
      }
    }
  };

  const removeFile = (name) => {
    const newFiles = { ...files };
    const newFileNames = { ...fileNames };
    delete newFiles[name];
    delete newFileNames[name];
    setFiles(newFiles);
    setFileNames(newFileNames);

    if (name === "truckImage") {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const token = localStorage.getItem("token");
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      Object.entries(files).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      const res = await axios.post("http://localhost:5000/api/trucks", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessage("🎉 Truck added successfully!");
      setQrCode(res.data.data?.truck?.qrCode || null);

      // Reset form
      setFormData({
        truckNumber: "",
        modelName: "",
        capacity: "",
        pucNumber: "",
        permitAllIndiaNumber: "",
        permitGujaratNumber: "",
        insuranceNumber: "",
        fitnessNumber: "",
        rcNumber: "",
        pucExpiryDate: "",
        permitAllIndiaExpiryDate: "",
        permitGujaratExpiryDate: "",
        insuranceExpiryDate: "",
        fitnessExpiryDate: "",
        rcExpiryDate: "",
      });
      setFiles({});
      setFileNames({});
      setPreview(null);

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message ||
          "Error adding truck. Please try again."
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = `${formData.truckNumber || "truck"}-QR.png`;
    link.click();
  };

  return (
    <Container>
      <Header>
        <Title>
          <FaTruck /> Add New Truck
        </Title>
        <Subtitle>Register a new truck in your fleet</Subtitle>
      </Header>

      <Card>
        {successMessage && (
          <Alert $variant="success">
            <FaCheckCircle size={20} />
            {successMessage}
          </Alert>
        )}

        {errorMessage && (
          <Alert $variant="error">
            <FaExclamationCircle size={20} />
            {errorMessage}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>
              <FaTruck /> Basic Information
            </SectionTitle>
            <Grid>
              <Field>
                <Label>
                  <FaTruck /> Truck Number *
                </Label>
                <Input
                  type="text"
                  name="truckNumber"
                  value={formData.truckNumber}
                  onChange={handleChange}
                  placeholder="e.g., GJ01AB1234"
                  required
                />
              </Field>

              <Field>
                <Label>
                  <FaTruck /> Model Name *
                </Label>
                <Input
                  type="text"
                  name="modelName"
                  value={formData.modelName}
                  onChange={handleChange}
                  placeholder="e.g., Tata 4018"
                  required
                />
              </Field>

              <Field>
                <Label>
                  <FaTruck /> Capacity (kg) *
                </Label>
                <Input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder="e.g., 18000"
                  required
                />
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaFilePdf /> Document Numbers
            </SectionTitle>
            <Grid>
              <Field>
                <Label>PUC Number</Label>
                <Input
                  type="text"
                  name="pucNumber"
                  value={formData.pucNumber}
                  onChange={handleChange}
                  placeholder="PUC Certificate Number"
                />
              </Field>

              <Field>
                <Label>All India Permit Number</Label>
                <Input
                  type="text"
                  name="permitAllIndiaNumber"
                  value={formData.permitAllIndiaNumber}
                  onChange={handleChange}
                  placeholder="All India Permit Number"
                />
              </Field>

              <Field>
                <Label>Gujarat Permit Number</Label>
                <Input
                  type="text"
                  name="permitGujaratNumber"
                  value={formData.permitGujaratNumber}
                  onChange={handleChange}
                  placeholder="Gujarat Permit Number"
                />
              </Field>

              <Field>
                <Label>Insurance Number</Label>
                <Input
                  type="text"
                  name="insuranceNumber"
                  value={formData.insuranceNumber}
                  onChange={handleChange}
                  placeholder="Insurance Policy Number"
                />
              </Field>

              <Field>
                <Label>Fitness Number</Label>
                <Input
                  type="text"
                  name="fitnessNumber"
                  value={formData.fitnessNumber}
                  onChange={handleChange}
                  placeholder="Fitness Certificate Number"
                />
              </Field>

              <Field>
                <Label>RC Number</Label>
                <Input
                  type="text"
                  name="rcNumber"
                  value={formData.rcNumber}
                  onChange={handleChange}
                  placeholder="Registration Certificate Number"
                />
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaCalendarAlt /> Expiry Dates
            </SectionTitle>
            <Grid>
              <Field>
                <Label>
                  <FaCalendarAlt /> PUC Expiry
                </Label>
                <Input
                  type="date"
                  name="pucExpiryDate"
                  value={formData.pucExpiryDate}
                  onChange={handleChange}
                  min={today}
                />
              </Field>

              <Field>
                <Label>
                  <FaCalendarAlt /> All India Permit Expiry
                </Label>
                <Input
                  type="date"
                  name="permitAllIndiaExpiryDate"
                  value={formData.permitAllIndiaExpiryDate}
                  onChange={handleChange}
                  min={today}
                />
              </Field>

              <Field>
                <Label>
                  <FaCalendarAlt /> Gujarat Permit Expiry
                </Label>
                <Input
                  type="date"
                  name="permitGujaratExpiryDate"
                  value={formData.permitGujaratExpiryDate}
                  onChange={handleChange}
                  min={today}
                />
              </Field>

              <Field>
                <Label>
                  <FaCalendarAlt /> Insurance Expiry
                </Label>
                <Input
                  type="date"
                  name="insuranceExpiryDate"
                  value={formData.insuranceExpiryDate}
                  onChange={handleChange}
                  min={today}
                />
              </Field>

              <Field>
                <Label>
                  <FaCalendarAlt /> Fitness Expiry
                </Label>
                <Input
                  type="date"
                  name="fitnessExpiryDate"
                  value={formData.fitnessExpiryDate}
                  onChange={handleChange}
                  min={today}
                />
              </Field>

              <Field>
                <Label>
                  <FaCalendarAlt /> RC Expiry
                </Label>
                <Input
                  type="date"
                  name="rcExpiryDate"
                  value={formData.rcExpiryDate}
                  onChange={handleChange}
                  min={today}
                />
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaUpload /> Upload Documents
            </SectionTitle>
            <Grid>
              {[
                {
                  label: "PUC File",
                  name: "pucFile",
                  icon: <FaFilePdf />,
                  accept: "application/pdf",
                },
                {
                  label: "All India Permit",
                  name: "permitAllIndiaFile",
                  icon: <FaFilePdf />,
                  accept: "application/pdf",
                },
                {
                  label: "Gujarat Permit",
                  name: "permitGujaratFile",
                  icon: <FaFilePdf />,
                  accept: "application/pdf",
                },
                {
                  label: "Insurance",
                  name: "insuranceFile",
                  icon: <FaFilePdf />,
                  accept: "application/pdf",
                },
                {
                  label: "Fitness",
                  name: "fitnessFile",
                  icon: <FaFilePdf />,
                  accept: "application/pdf",
                },
                {
                  label: "RC Document",
                  name: "rcFile",
                  icon: <FaFilePdf />,
                  accept: "application/pdf",
                },
                {
                  label: "Truck Photo",
                  name: "truckImage",
                  icon: <FaImage />,
                  accept: "image/*",
                },
              ].map(({ label, name, icon, accept }) => (
                <Field key={name}>
                  <Label>
                    {icon} {label}
                  </Label>
                  <FileInputWrapper>
                    <FileInput
                      type="file"
                      id={name}
                      name={name}
                      onChange={handleFileChange}
                      accept={accept}
                    />
                    <FileButton htmlFor={name}>
                      <FaUpload /> Choose File
                    </FileButton>
                    {fileNames[name] && (
                      <FileName>
                        <span>{fileNames[name]}</span>
                        <RemoveFile
                          type="button"
                          onClick={() => removeFile(name)}
                        >
                          <FaTimes />
                        </RemoveFile>
                      </FileName>
                    )}
                  </FileInputWrapper>
                </Field>
              ))}
            </Grid>

            {preview && (
              <PreviewContainer>
                <PreviewImage src={preview} alt="Truck Preview" />
              </PreviewContainer>
            )}
          </Section>

          <SubmitButton type="submit" disabled={loading}>
            <FaTruck />
            {loading ? "Adding Truck..." : "Add Truck"}
          </SubmitButton>
        </Form>
      </Card>

      {qrCode && (
        <QRSection>
          <QRTitle>
            <FaQrcode size={24} />
            QR Code Generated Successfully!
          </QRTitle>
          <QRImage src={qrCode} alt="QR Code" />
          <DownloadButton onClick={handleDownload}>
            <FaDownload />
            Download QR Code
          </DownloadButton>
        </QRSection>
      )}
    </Container>
  );
}

export default AddTruck;
