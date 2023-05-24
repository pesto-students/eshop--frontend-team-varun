import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  productsLoading: false,
  productsError: null,
  productsCount: 0,
  resultPerPage: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProductsRequest: (state, action) => {
      state.productsLoading = true;
      state.products = [];
      state.productsError = null;
      state.productsCount = 0;
      state.resultPerPage = 0;
    },
    addProductsSuccess: (state, action) => {
      state.productsLoading = false;
      state.products = action.payload.products;
      state.productsError = null;
      state.productsCount = action.payload.productCount;
      state.resultPerPage = action.payload.resultPerPage;
    },
    addProductsFailure: (state, action) => {
      state.productsLoading = false;
      state.products = [];
      state.productsError = action.payload.message;
      state.productsCount = 0;
      state.resultPerPage = 0;
    },
    addProductsClearError: (state, action) => {
      state.productsError = null;
      state.resultPerPage = 0;
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
