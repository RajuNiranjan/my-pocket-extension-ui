import axios from "axios";

const API_URI = import.meta.env.VITE_API_BASE_URI;

export const axiosInstance = axios.create({
  baseURL: API_URI,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
