import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  ordersLoading: null,
  orderError: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    ordersRequest: (state, action) => {
      state.ordersLoading = true;
      state.orderItems = [];
      state.orderError = false;
    },
    ordersSuccess: (state, action) => {
      state.ordersLoading = false;
      state.orderItems = action.payload;
      state.orderError = false;
    },
    ordersFailure: (state, action) => {
      state.ordersLoading = false;
      state.orderItems = [];
      state.orderError = true;
    },
    ordersClearError: (state, action) => {
      state.ordersLoading = null;
      state.orderItems = [];
      state.orderError = null;
    },
  },
});

export const { ordersRequest, ordersSuccess, ordersFailure, ordersClearError } =
  ordersSlice.actions;
export default ordersSlice.reducer;
