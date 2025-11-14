// src/api/fuelApi.js
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export const fuelApi = {
  // Get all fuel logs
  getAllFuelLogs: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(`${API_BASE_URL}/fuel?${params}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get single fuel log
  getFuelLogById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/fuel/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Create fuel log
  createFuelLog: async (fuelData) => {
    const formData = new FormData();

    Object.keys(fuelData).forEach((key) => {
      if (key === "fuelStation") {
        formData.append("fuelStation[name]", fuelData.fuelStation.name);
        formData.append("fuelStation[location]", fuelData.fuelStation.location);
        if (fuelData.fuelStation.coordinates) {
          formData.append(
            "fuelStation[coordinates][latitude]",
            fuelData.fuelStation.coordinates.latitude
          );
          formData.append(
            "fuelStation[coordinates][longitude]",
            fuelData.fuelStation.coordinates.longitude
          );
        }
      } else if (key === "receipt" && fuelData[key]) {
        formData.append("receipt", fuelData[key]);
      } else {
        formData.append(key, fuelData[key]);
      }
    });

    const response = await axios.post(`${API_BASE_URL}/fuel`, formData, {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Update fuel log
  updateFuelLog: async (id, fuelData) => {
    const formData = new FormData();

    Object.keys(fuelData).forEach((key) => {
      if (key === "fuelStation") {
        formData.append("fuelStation[name]", fuelData.fuelStation.name);
        formData.append("fuelStation[location]", fuelData.fuelStation.location);
      } else if (key === "receipt" && fuelData[key] instanceof File) {
        formData.append("receipt", fuelData[key]);
      } else {
        formData.append(key, fuelData[key]);
      }
    });

    const response = await axios.put(`${API_BASE_URL}/fuel/${id}`, formData, {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Delete fuel log
  deleteFuelLog: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/fuel/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Verify fuel log
  verifyFuelLog: async (id, verificationData) => {
    const response = await axios.post(
      `${API_BASE_URL}/fuel/${id}/verify`,
      verificationData,
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Get fuel statistics
  getFuelStats: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(`${API_BASE_URL}/fuel/stats?${params}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get fuel trends
  getFuelTrends: async (days = 30) => {
    const response = await axios.get(
      `${API_BASE_URL}/fuel/trends?days=${days}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Compare truck efficiency
  compareTruckEfficiency: async () => {
    const response = await axios.get(
      `${API_BASE_URL}/fuel/compare-efficiency`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get pending verifications
  getPendingVerifications: async () => {
    const response = await axios.get(
      `${API_BASE_URL}/fuel/pending-verifications`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },
};
