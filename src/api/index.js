import { configAxios } from "../config";

export const api = {
  autarisation: async () => {
    try {
      const response = await configAxios();
      return response;
    } catch (error) {
      return error;
    }
  },
};
