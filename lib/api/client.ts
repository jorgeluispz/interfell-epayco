import axios, { AxiosInstance } from "axios";
import { API_BASE_URL, API_TIMEOUT } from "@/lib/config";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "Error de respuesta:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("Error de red:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
