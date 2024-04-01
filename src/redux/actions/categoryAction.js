import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from "../../api";
import { getProductsByCategory } from "../../api";

export const getCategories = createAsyncThunk("getCategory", async (data) => {
  try {
    const response = await getAllCategories(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getProductsInMenu = createAsyncThunk(
  "getProducts",
  async (data) => {
    try {
      const response = await getProductsByCategory(data);
      return response.data;
    } catch (error) {
      console.log("Error in getting product list:", error);
      throw error;
    }
  }
);
