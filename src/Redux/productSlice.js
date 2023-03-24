import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  loading: false,
  error: null,
  productsCount: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProductsRequest: (state, action) => {
      state.loading = true;
      state.products = [];
      state.error = null;
      state.productsCount = 0;
    },
    addProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.error = null;
      state.productsCount = action.payload.productCount;
    },
    addProductsFailure: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
      state.productsCount = 0;
    },
    addProductsClearError: (state, action) => {
      state.error = null;
    },
  },
});

export const {
  addProductsRequest,
  addProductsSuccess,
  addProductsFailure,
  addProductsClearError,
} = productSlice.actions;

export default productSlice.reducer;
