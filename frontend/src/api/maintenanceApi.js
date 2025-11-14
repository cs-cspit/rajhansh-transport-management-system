// src/api/maintenanceApi.js
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export const maintenanceApi = {
  // Get all maintenance logs
  getAllMaintenanceLogs: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(`${API_BASE_URL}/maintenance?${params}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get single maintenance log
  getMaintenanceLogById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/maintenance/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Create maintenance log
  createMaintenanceLog: async (maintenanceData) => {
    const formData = new FormData();

    Object.keys(maintenanceData).forEach((key) => {
      if (key === "partsReplaced" && Array.isArray(maintenanceData[key])) {
        formData.append(key, JSON.stringify(maintenanceData[key]));
      } else if (key === "serviceProvider") {
        Object.keys(maintenanceData.serviceProvider).forEach((spKey) => {
          formData.append(
            `serviceProvider[${spKey}]`,
            maintenanceData.serviceProvider[spKey]
          );
        });
      } else if (key === "images" && maintenanceData[key]) {
        maintenanceData[key].forEach((file) => {
          formData.append("images", file);
        });
      } else if (key === "invoice" && maintenanceData[key]) {
        formData.append("invoice", maintenanceData[key]);
      } else {
        formData.append(key, maintenanceData[key]);
      }
    });

    const response = await axios.post(`${API_BASE_URL}/maintenance`, formData, {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Update maintenance log
  updateMaintenanceLog: async (id, maintenanceData) => {
    const formData = new FormData();

    Object.keys(maintenanceData).forEach((key) => {
      if (key === "partsReplaced" && Array.isArray(maintenanceData[key])) {
        formData.append(key, JSON.stringify(maintenanceData[key]));
      } else if (key === "images" && maintenanceData[key]) {
        maintenanceData[key].forEach((file) => {
          if (file instanceof File) {
            formData.append("images", file);
          }
        });
      } else if (key === "invoice" && maintenanceData[key] instanceof File) {
        formData.append("invoice", maintenanceData[key]);
      } else {
        formData.append(key, maintenanceData[key]);
      }
    });

    const response = await axios.put(
      `${API_BASE_URL}/maintenance/${id}`,
      formData,
      {
        headers: {
          ...getAuthHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Complete maintenance
  completeMaintenance: async (id, completionData) => {
    const response = await axios.post(
      `${API_BASE_URL}/maintenance/${id}/complete`,
      completionData,
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Approve maintenance
  approveMaintenance: async (id, approvalData) => {
    const response = await axios.post(
      `${API_BASE_URL}/maintenance/${id}/approve`,
      approvalData,
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Delete maintenance log
  deleteMaintenanceLog: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/maintenance/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get maintenance statistics
  getMaintenanceStats: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(
      `${API_BASE_URL}/maintenance/stats?${params}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get maintenance due alerts
  getMaintenanceDueAlerts: async (days = 30) => {
    const response = await axios.get(
      `${API_BASE_URL}/maintenance/due-alerts?days=${days}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get predictive maintenance
  getPredictiveMaintenance: async (truckId) => {
    const response = await axios.get(
      `${API_BASE_URL}/maintenance/predictive/${truckId}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get maintenance trends
  getMaintenanceTrends: async (days = 90) => {
    const response = await axios.get(
      `${API_BASE_URL}/maintenance/trends?days=${days}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get cost breakdown
  getCostBreakdown: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(
      `${API_BASE_URL}/maintenance/cost-breakdown?${params}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get truck maintenance history
  getTruckMaintenanceHistory: async (truckId, limit = 10) => {
    const response = await axios.get(
      `${API_BASE_URL}/maintenance/truck-history/${truckId}?limit=${limit}`,
      { headers: getAuthHeader() }
    );
    return response.data;
  },
};
