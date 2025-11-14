// src/components/CompleteMaintenanceModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Modal, Input, Button, Alert } from "./ui";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const CompleteMaintenanceModal = ({
  isOpen,
  onClose,
  maintenanceLog,
  onSubmit,
}) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    diagnosis: "",
    performedBy: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!maintenanceLog) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Complete Maintenance"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={loading}>
            Complete Maintenance
          </Button>
        </>
      }
    >
      <Form theme={theme}>
        {error && <Alert variant="danger">{error}</Alert>}

        <Input
          as="textarea"
          label="Diagnosis"
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          rows={3}
          placeholder="Enter final diagnosis..."
        />

        <Input
          label="Performed By"
          name="performedBy"
          value={formData.performedBy}
          onChange={handleChange}
          placeholder="Mechanic name..."
        />

        <Input
          as="textarea"
          label="Completion Notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Add any final notes..."
        />
      </Form>
    </Modal>
  );
};

export default CompleteMaintenanceModal;
