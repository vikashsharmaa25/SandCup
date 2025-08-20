import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sand-cup-server.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
