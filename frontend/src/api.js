const baseURL = "http://localhost:5000";

export function getDriverToken() {
  return localStorage.getItem("driverToken");
}

export function getOwnerToken() {
  return localStorage.getItem("token"); // or "ownerToken" if that's what your backend uses
}

export async function authFetch(url, options = {}) {
  // Use token from options, or fallback to driver token
  const token = options.token || getDriverToken();
  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };
  return fetch(baseURL + url, { ...options, headers });
}
