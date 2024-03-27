import { configAxios } from "../config";

export const api = {
  codeConfirm: async (data) => {
    try {
      const response = await configAxios.post(
        "/api/v1/auth/code-confirm",
        data
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  autharisation: async (data) => {
    try {
      const response = await configAxios.post(
        `/api/v1/auth/login-no-pass?email=${data}`,
        data
      );
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
