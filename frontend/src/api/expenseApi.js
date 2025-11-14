// src/api/expenseApi.js
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export const expenseApi = {
  // Get all expenses
  getAllExpenses: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(`${API_BASE_URL}/expenses?${params}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get single expense
  getExpenseById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/expenses/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Create expense
  createExpense: async (expenseData) => {
    const formData = new FormData();

    Object.keys(expenseData).forEach((key) => {
      if (key === "invoice" && expenseData[key]) {
        formData.append("invoice", expenseData[key]);
      } else {
        formData.append(key, expenseData[key]);
      }
    });

    const response = await axios.post(`${API_BASE_URL}/expenses`, formData, {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Update expense
  updateExpense: async (id, expenseData) => {
    const formData = new FormData();

    Object.keys(expenseData).forEach((key) => {
      if (key === "invoice" && expenseData[key] instanceof File) {
        formData.append("invoice", expenseData[key]);
      } else {
        formData.append(key, expenseData[key]);
      }
    });

    const response = await axios.put(
      `${API_BASE_URL}/expenses/${id}`,
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

  // Approve expense
  approveExpense: async (id, notes) => {
    const response = await axios.post(
      `${API_BASE_URL}/expenses/${id}/approve`,
      { notes },
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Mark expense as paid
  markExpenseAsPaid: async (id) => {
    const response = await axios.post(
      `${API_BASE_URL}/expenses/${id}/mark-paid`,
      {},
      { headers: getAuthHeader() }
    );
    return response.data;
  },

  // Delete expense
  deleteExpense: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/expenses/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  // Get expense statistics
  getExpenseStats: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(
      `${API_BASE_URL}/expenses/stats?${params}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get expense breakdown
  getExpenseBreakdown: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await axios.get(
      `${API_BASE_URL}/expenses/breakdown?${params}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Get expense trends
  getExpenseTrends: async (months = 6) => {
    const response = await axios.get(
      `${API_BASE_URL}/expenses/trends?months=${months}`,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  // Generate expense report
  generateExpenseReport: async (startDate, endDate) => {
    const response = await axios.get(
      `${API_BASE_URL}/expenses/report?startDate=${startDate}&endDate=${endDate}`,
      { headers: getAuthHeader() }
    );
    return response.data;
  },
};
