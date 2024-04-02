import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { statusList } from "../../helpers/StatusList";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    statusValue: statusList[0].name,
    isHere: true,
    filialID: Cookies.get("filial"),
    pageNumber: 1,
  },
  reducers: {
    setStatusValue(state, action) {
      state.statusValue = action.payload;
    },
    setIsHere(state, action) {
      state.isHere = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setStatusValue, setPageNumber, setIsHere } = ordersSlice.actions;

export default ordersSlice.reducer;
