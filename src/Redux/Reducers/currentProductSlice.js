import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  currentProduct: null,
  currentProductLoading: false,
  currentProductError: false,
};

export const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,

  reducers: {
    getCurrentProductRequestStart: (state) => {
      state.currentProductLoading = true;
      state.currentProduct = [];
      state.currentProductError = false;
    },
    getCurrentProductSuccess: (state, action) => {
      state.currentProductLoading = false;
      state.currentProduct = action.payload.product;
      state.currentProductError = false;
    },
    getCurrentProductFailure: (state) => {
      state.currentProductLoading = false;
      state.currentProduct = [];
      state.currentProductError = true;
    },
  },
});

export const {
  getCurrentProductRequestStart,
  getCurrentProductSuccess,
  getCurrentProductFailure,
} = currentProductSlice.actions;

export default currentProductSlice.reducer;
