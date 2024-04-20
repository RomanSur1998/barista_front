import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

export const authBarmen = createAsyncThunk(
  "auth/authBarmen",
  async ({ data, navigate }) => {
    try {
      const response = await api.autharisation(data, navigate);
      return response;
    } catch (error) {
      console.log(error, "error in auth");
      // eslint-disable-next-line no-undef
      return rejectWithValue(error);
    }
  }
);
export const codeConfirm = createAsyncThunk(
  "auth/codeConfirm",
  async ({ data, navigate }) => {
    try {
      const response = await api.codeConfirm(data, navigate);
      return response;
    } catch (error) {
      console.log(error, "error in code");
      // eslint-disable-next-line no-undef
      return rejectWithValue(error);
    }
  }
);

export const getFilialName = createAsyncThunk(
  "auth/getFilialName",
  async () => {
    try {
      const response = await api.getFilialName();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
