import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slices/modalSlice";
import authSlice from "../slices/authSlice";
import categorySlice from "../slices/categorySlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
    category: categorySlice,
  },
});
