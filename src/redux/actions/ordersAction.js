import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (statusValue) => {
    try {
      const response = await api.getOrders(statusValue);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
