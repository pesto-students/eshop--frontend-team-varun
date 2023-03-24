import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topDeals: null,
  loading: false,
  error: null,
};

const topDealsSlice = createSlice({
  name: "topDeals",
  initialState,

  reducers: {
    addTopDealsRequest: (state, action) => {
      state.loading = true;
      state.topDeals = [];
      state.error = null;
    },
    addTopDealsSuccess: (state, action) => {
      state.loading = false;
      state.topDeals = action.payload.products;
      state.error = null;
    },
    addTopDealsFailure: (state, action) => {
      state.loading = false;
      state.topDeals = [];
      state.error = action.payload;
    },
    addTopDealsClearError: (state, action) => {
      state.error = null;
    },
  },
});

export const {
  addTopDealsRequest,
  addTopDealsSuccess,
  addTopDealsFailure,
  addTopDealsClearError,
} = topDealsSlice.actions;

export default topDealsSlice.reducer;
