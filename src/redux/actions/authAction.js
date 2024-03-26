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
      return rejectWithValue(error);
    }
  }
);
