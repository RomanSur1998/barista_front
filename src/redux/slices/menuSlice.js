import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getProductsInMenu,
  menuSearch,
} from "../actions/menuAction";

const menuSlice = createSlice({
  name: "category",
  initialState: {
    categories: ["...Loading"],
    products: [],
    loading: false,
    error: null,
    selectedCategory: null,
    searchResults: [],
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
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
    builder
      .addCase(menuSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(menuSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.data;
      })
      .addCase(menuSearch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setSelectedCategory } = menuSlice.actions;

export default menuSlice.reducer;
