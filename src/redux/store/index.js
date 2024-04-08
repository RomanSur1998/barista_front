import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slices/modalSlice";
import authSlice from "../slices/authSlice";
import dataSlice from "../slices/dataSlice";
import menuSlice from "../slices/menuSlice";
// import categorySlice from "../slices/categorySlice";
import ordersSlice from "../slices/ordersSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
    data: dataSlice,
    // category: categorySlice,
    orders: ordersSlice,
    menu: menuSlice,
  },
});
