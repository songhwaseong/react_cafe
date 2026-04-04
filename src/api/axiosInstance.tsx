import axios from "axios";
import { API_BASE_URL } from "../config/config";


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accesstoken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터를 추가하여 401 Unauthorized 오류를 처리합니다.
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const isLoginRequest = error.config.url?.includes("/member/login");
        if (error.response?.status === 401 && !isLoginRequest) {
            localStorage.removeItem("accesstoken");
            window.location.href = "/member/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;