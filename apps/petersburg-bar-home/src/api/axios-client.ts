import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);

        return Promise.reject(error);
    },
);

export { axiosClient };
