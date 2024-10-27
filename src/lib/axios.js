import axios from "axios";

console.log('Environment Variables:', import.meta.env); // Log all env variables

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://fallback-url.com/api/v1",
  withCredentials: true,
});
