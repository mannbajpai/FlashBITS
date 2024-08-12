import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;