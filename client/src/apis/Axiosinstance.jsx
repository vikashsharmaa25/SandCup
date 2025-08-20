import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sand-cup-pw9a.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
