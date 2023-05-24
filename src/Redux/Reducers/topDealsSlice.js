import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topDeals: null,
  topDealsLoading: false,
  topDealError: null,
};

const topDealsSlice = createSlice({
  name: "topDeals",
  initialState,

  reducers: {
    addTopDealsRequest: (state, action) => {
      state.topDealsLoading = true;
      state.topDeals = [];
      state.topDealError = null;
    },
    addTopDealsSuccess: (state, action) => {
      state.topDealsLoading = false;
      state.topDeals = action.payload.products;
      state.topDealError = null;
    },
    addTopDealsFailure: (state, action) => {
      state.topDealsLoading = false;
      state.topDeals = [];
      state.topDealError = action.payload.message;
    },
    addTopDealsClearError: (state, action) => {
      state.topDealError = null;
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
