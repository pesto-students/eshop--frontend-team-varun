import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentSuccess: null,
    paymentLoading: false,
    paymentError: null,
};

const paymentSlice = createSlice({
  name: "payments",
  initialState,

  reducers: { 
    addPaymentRequest: (state, action) => {
      state.paymentLoading = true;
      state.paymentSuccess = null;
      state.paymentError = null;
    },
    addPaymentSuccess: (state, action) => {
      state.paymentLoading = false; 
      state.paymentSuccess = action.payload.message;
      state.paymentError = null;
    },
    addpaymentFailure: (state, action) => {
      state.paymentLoading = false;
      state.paymentSuccess = null;
      state.paymentError = action.payload.message;
    },
    addpaymentClearError: (state, action) => {
      state.paymentLoading = false;
      state.paymentSuccess = null;
      state.paymentError = null;
    },
  },
});

export const {
  addpaymentRequest,
  addpaymentSuccess,
  addpaymentFailure,
  addpaymentClearError,
} = paymentSlice.actions;

export default paymentSlice.reducer;
