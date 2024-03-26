import axios from "axios";
import { API } from "../constants/url";
import Cookies from "js-cookie";

export const configAxios = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// configAxios.interceptors.request.use(
//   (config) => {
//     console.log("URL:", config.url);
//     const accessToken = Cookies.get("accessToken");
//     if (
//       accessToken &&
//       config.url !== "/api/v1/auth/code-confirm" &&
//       config.url !== "/api/v1/auth/refresh-token"
//     ) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

configAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?._retry) {
      config._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      const refreshData = {
        email: "admin@gmail.com",
        token: refreshToken,
      };

      try {
        const result = await configAxios.post(
          "/api/v1/auth/refresh-token",
          refreshData
        );

        if (result?.data.accessToken) {
          Cookies.set("accessToken", result.data.accessToken);
          Cookies.set("refreshToken", result.data.refreshToken);
          config.headers.Authorization = `Bearer ${result.data.accessToken}`;
          return configAxios(config);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
