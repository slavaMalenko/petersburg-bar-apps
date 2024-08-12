import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://668d5d80099db4c579f2b89a.mockapi.io/mock",
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    return Promise.reject(error);
  }
);

export { axiosClient };
