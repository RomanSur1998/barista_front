import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slices/modalSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
  },
});
