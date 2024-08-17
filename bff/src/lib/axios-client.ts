import axios from "axios";
import { logger } from "../lib";

const axiosClient = axios.create({
  baseURL: "https://668d5d80099db4c579f2b89a.mockapi.io/mock",
});

// Интерцептор для ответа
axiosClient.interceptors.response.use(
  (response) => {
    logger.info("Successful axios request", {
      metadata: {
        url: response.config.url,
        method: response.config.method,
        status: response.status,
      },
    });
    return response;
  },
  (error) => {
    logger.error("Error in axios request", {
      metadata: {
        message: error.message,
        stack: error.stack,
        config: error.config,
        code: error.code,
        status: error.response ? error.response.status : null,
      },
    });
    return Promise.reject(error);
  }
);

export { axiosClient };
