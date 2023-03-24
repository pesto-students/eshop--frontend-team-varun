import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dealsOfMonth: null,
  loading: false,
  error: null,
};

const dealsOfMonthsSlice = createSlice({
  name: "dealsOfMonth",
  initialState,

  reducers: {
    dealsOfMonthRequest: (state, action) => {
      state.loading = true;
      state.dealsOfMonth = null;
      state.error = null;
    },
    dealsOfMonthSuccess: (state, action) => {
      state.loading = false;
      state.dealsOfMonth = action.payload.products;
      state.error = null;
    },
    dealsOfMonthFailure: (state, action) => {
      state.loading = false;
      state.dealsOfMonth = null;
      state.error = action.payload.message;
    },
    dealsOfMonthClearError: (state, action) => {
      state.error = null;
    },
  },
});

export const {
  dealsOfMonthRequest,
  dealsOfMonthSuccess,
  dealsOfMonthFailure,
  dealsOfMonthClearError,
} = dealsOfMonthsSlice.actions;

export default dealsOfMonthsSlice.reducer;
