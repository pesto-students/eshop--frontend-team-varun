import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: null,
  reviewLoading: false,
  reviewError: null,
};

const reviewlice = createSlice({
  name: "Review",
  initialState,

  reducers: {
    addReviewRequest: (state, action) => {
      state.reviewLoading = true;
      state.review = "";
      state.reviewError = null;
    },
    addReviewSuccess: (state, action) => {
      state.reviewLoading = false;
      state.review = action.payload.review;
      state.reviewError = null;
    },
    addReviewFailure: (state, action) => {
      state.reviewLoading = false;
      state.review = [];
      state.reviewError = action.payload.message;
    },
  },
});

export const { addReviewRequest, addReviewSuccess, addReviewFailure } =
  reviewlice.actions;

export default reviewlice.reducer;
