import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Request interceptor example
api.interceptors.request.use((config) => {
  // You can modify the request config here, like adding authentication headers
  return config;
});

// Response interceptor example
api.interceptors.response.use(
  (response) => {
    // You can handle successful responses here
    return response;
  },
  (error) => {
    // You can handle errors here
    return Promise.reject(error);
  }
);

export default api;
