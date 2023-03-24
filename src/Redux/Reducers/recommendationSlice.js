import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendations: null,
  recommendationsLoading: false,
  recommendationsError: null,
};

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,

  reducers: {
    addRecommendationsRequest: (state, action) => {
      state.recommendationsLoading = true;
      state.recommendations = [];
      state.recommendationsError = null;
    },
    addRecommendationsSuccess: (state, action) => {
      state.recommendationsLoading = false;
      state.recommendations = action.payload.products;
      state.recommendationsError = null;
    },
    addRecommendationsFailure: (state, action) => {
      state.recommendationsLoading = false;
      state.recommendations = [];
      state.recommendationsError = action.payload.message;
    },
    addRecommendationsClearError: (state, action) => {
      state.recommendationsError = null;
    },
  },
});

export const {
  addRecommendationsRequest,
  addRecommendationsSuccess,
  addRecommendationsFailure,
  addRecommendationsClearError,
} = recommendationsSlice.actions;

export default recommendationsSlice.reducer;
