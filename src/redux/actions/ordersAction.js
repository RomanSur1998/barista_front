import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async ({ statusValue, pageNumber, isHere }) => {
    try {
      const response = await api.getOrders(statusValue, pageNumber, isHere);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const deleteOrders = createAsyncThunk(
  "orders/deleteOrders",
  async (id) => {
    try {
      const response = await api.deleteOrder(id);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const confirmOrders = createAsyncThunk(
  "orders/confirmOrders",
  async (id) => {
    try {
      const response = await api.confirmOrders(id);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const closeOrders = createAsyncThunk(
  "orders/closeOrders",
  async (id) => {
    try {
      const response = await api.closeOrders(id);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
