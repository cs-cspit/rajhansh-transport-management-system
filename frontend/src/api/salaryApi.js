// src/api/salaryApi.js
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export const salaryApi = {
  // Get all salaries
  getAllSalaries: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(`${API_BASE_URL}/salaries?${params}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get single salary
  getSalaryById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/salaries/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Generate salary
  generateSalary: async (salaryData) => {
    const response = await axios.post(`${API_BASE_URL}/salaries`, salaryData, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Update salary
  updateSalary: async (id, salaryData) => {
    const response = await axios.put(
      `${API_BASE_URL}/salaries/${id}`,
      salaryData,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Approve salary
  approveSalary: async (id, notes) => {
    const response = await axios.post(
      `${API_BASE_URL}/salaries/${id}/approve`,
      { notes },
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Mark salary as paid
  markSalaryAsPaid: async (id, paymentData) => {
    const response = await axios.post(
      `${API_BASE_URL}/salaries/${id}/mark-paid`,
      paymentData,
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Delete salary
  deleteSalary: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/salaries/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get salary statistics
  getSalaryStats: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(
      `${API_BASE_URL}/salaries/stats?${params}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Generate salary report
  generateSalaryReport: async (month, year) => {
    const response = await axios.get(
      `${API_BASE_URL}/salaries/report?month=${month}&year=${year}`,
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Get driver salary history
  getDriverSalaryHistory: async (driverId, limit = 12) => {
    const response = await axios.get(
      `${API_BASE_URL}/salaries/driver-history/${driverId}?limit=${limit}`,
      { headers: getAuthHeader() }
    );
    return response.data;
  },
};
