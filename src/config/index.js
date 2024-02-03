import axios from "axios";

export const configurateAxios = axios.create({
  baseURL: "",
});

configurateAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const result = await configurateAxios.post("/api/refresh");
      if (result?.data.jwtToken) {
        configurateAxios.headers = {
          ...configurateAxios.headers,
          Authorization: `Bearer ${tokens}`,
        };
      }

      return axios(configurateAxios);
    }
    return Promise.reject(error);
  }
);
