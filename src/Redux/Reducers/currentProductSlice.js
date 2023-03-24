import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  currentProduct: null,
  loading: false,
  error: false,
};

export const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,

  reducers: {
    getCurrentProductRequestStart: (state) => {
      state.loading = true;
    },
    getCurrentProductSuccess: (state, action) => {
      state.loading = false;
      state.currentProduct = action.payload.product;
    },
    getCurrentProductFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getCurrentProductRequestStart,
  getCurrentProductSuccess,
  getCurrentProductFailure,
} = currentProductSlice.actions;

export default currentProductSlice.reducer;
