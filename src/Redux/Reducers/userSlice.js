import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  currentUserLoading: false,
  userError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginStart: (state) => {
      state.currentUserLoading = true;
    },
    loginSuccess: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.currentUserLoading = false;
      state.userError = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.currentUserLoading = false;
      state.userError = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
