import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { api } from "../../api";

export const getProfile = createAsyncThunk("data/getProfile", async () => {
  try {
    const response = await api.getProfile();
    return response;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
