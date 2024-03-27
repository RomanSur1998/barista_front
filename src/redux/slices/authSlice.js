import { createSlice } from "@reduxjs/toolkit";
import { authBarmen, codeConfirm } from "../actions/authAction";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    code: "",
    error: false,
    loading: true,
    accessToken: "",
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authBarmen.fulfilled, (state, actions) => {});
    builder.addCase(authBarmen.rejected, (state, actions) => {
      state.error = true;
    });
    builder.addCase(codeConfirm.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { setEmail, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
