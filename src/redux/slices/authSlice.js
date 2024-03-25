import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    code: "",
    error: false,
    loading: true,
  },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
