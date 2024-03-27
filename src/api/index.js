import Cookies from "js-cookie";
import { configAxios } from "../config";

export const api = {
  codeConfirm: async (data, navigate) => {
    try {
      const response = await configAxios.post(
        "/api/v1/auth/code-confirm",
        data
      );
      if (response.status === 200) {
        Cookies.set("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
        navigate("/orders");
      }

      return response;
    } catch (error) {
      throw error;
    }
  },
  autharisation: async (data, navigate) => {
    try {
      const response = await configAxios.post(
        `/api/v1/auth/login-no-pass?email=${data}`,
        data
      );
      navigate("/code");
      console.log(response, "AUTH");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export const getAllCategories = async (data) => {
  try {
    const response = await configAxios.get("/api/v1/category/all", data);
    return response;
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
