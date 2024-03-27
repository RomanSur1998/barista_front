import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from "../../api";

export const getCategories = createAsyncThunk("getCategory", async (data) => {
  try {
    const response = await getAllCategories(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
