import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getProductsInMenu,
  menuSearch,
} from "../actions/categoryAction";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: ["...Loading"],
    products: [],
    loading: false,
    error: null,
    selectedCategory: null,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.data;
      if (state.categories.length > 0) {
        state.selectedCategory = state.categories[0];
      }
    });
    builder
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProductsInMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsInMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsInMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
    builder.addCase(menuSearch.pending);
  },
});

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
