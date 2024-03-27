import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categoryAction";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
