import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dealsOfMonth: null,
  dealsOfMonthLoading: false,
  dealsOfMonthError: null,
};

const dealsOfMonthsSlice = createSlice({
  name: "dealsOfMonth",
  initialState,

  reducers: {
    dealsOfMonthRequest: (state, action) => {
      state.dealsOfMonthLoading = true;
      state.dealsOfMonth = [];
      state.dealsOfMonthError = null;
    },
    dealsOfMonthSuccess: (state, action) => {
      state.dealsOfMonthLoading = false;
      state.dealsOfMonth = action.payload.products;
      state.dealsOfMonthError = null;
    },
    dealsOfMonthFailure: (state, action) => {
      state.dealsOfMonthLoading = false;
      state.dealsOfMonth = [];
      state.dealsOfMonthError = action.payload.message;
    },
    dealsOfMonthClearError: (state, action) => {
      state.dealsOfMonthError = null;
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
