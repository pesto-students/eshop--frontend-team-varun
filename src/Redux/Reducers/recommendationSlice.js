import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendations: null,
  loading: false,
  error: null,
};

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,

  reducers: {
    addRecommendationsRequest: (state, action) => {
      state.loading = true;
      state.recommendations = [];
      state.error = null;
    },
    addRecommendationsSuccess: (state, action) => {
      state.loading = false;
      state.recommendations = action.payload.products;
      state.error = null;
    },
    addRecommendationsFailure: (state, action) => {
      state.loading = false;
      state.recommendations = [];
      state.error = action.payload.message;
    },
    addRecommendationsClearError: (state, action) => {
      state.error = null;
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
