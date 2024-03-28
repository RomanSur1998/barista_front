import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../actions/dataAction";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    switchValue: "",
    profile: {},
  },
  reducers: {
    setSwitchValue(state, action) {
      state.switchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload.data;
    });
  },
});

export const { setSwitchValue } = dataSlice.actions;

export default dataSlice.reducer;
