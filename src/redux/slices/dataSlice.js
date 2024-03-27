import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    switchValue: "",
  },
  reducers: {
    setSwitchValue(state, action) {
      state.switchValue = action.payload;
    },
  },
});

export const { setSwitchValue } = dataSlice.actions;

export default dataSlice.reducer;
