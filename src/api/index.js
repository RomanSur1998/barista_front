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
        navigate("/filial");
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
  getFilialName: async () => {
    try {
      const response = await configAxios.get(
        "/api/v1/filial/all?number=1&size=10"
      );
      console.log(response, "AUTH");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getOrders: async (statusValue) => {
    try {
      const response = await configAxios.get(
        `https://neo-cafe.up.railway.app/api/v1/order/barmen-orders?filialId=1&status=${statusValue}&here=true&number=1&size=5`
      );
      console.log(response, "AUTH");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getProfile: async () => {
    try {
      const response = await configAxios.get("/api/v1/profile/staff-profile");
      console.log(response, "Profile");
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
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProductsByCategory = async (data) => {
  try {
    const response = await configAxios.get(
      `/api/v1/menu/find-by-category/${data}?number=1&size=100`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchMenu = async (data) => {
  try {
    const response = await configAxios.get(
      `/api/v1/menu/find-by-name/${data}?number=1&size=100`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
