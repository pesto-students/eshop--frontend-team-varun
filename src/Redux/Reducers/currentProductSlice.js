import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProduct: null,
  currentProductLoading: false,
  currentProductError: null,
};

export const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,

  reducers: {
    getCurrentProductRequestStart: (state) => {
      state.currentProductLoading = true;
      state.currentProduct = [];
      state.currentProductError = null;
    },
    getCurrentProductSuccess: (state, action) => {
      state.currentProductLoading = false;
      state.currentProduct = action.payload.product;
      state.currentProductError = null;
    },
    getCurrentProductFailure: (state, action) => {
      state.currentProductLoading = false;
      state.currentProduct = [];
      state.currentProductError = action.payload.message;
    },
  },
});

export const {
  getCurrentProductRequestStart,
  getCurrentProductSuccess,
  getCurrentProductFailure,
} = currentProductSlice.actions;

export default currentProductSlice.reducer;
