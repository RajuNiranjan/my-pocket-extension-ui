import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_BASE_URI;

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
