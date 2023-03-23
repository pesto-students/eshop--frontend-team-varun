import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  topDeals: null,
  loading: false,
  error: null,
  productsCount: 0,
};

const cartSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProductsRequest: (state, action) => {
      state.loading = true;
      state.products = [];
      state.error = null;
      state.productsCount = 0;
    },
    addTopDeals: (state, action) => {
      state.loading = true;
      state.addTopDeals = action.payload;
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
} = cartSlice.actions;

export default cartSlice.reducer;
