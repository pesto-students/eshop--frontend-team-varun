import axios from "axios";
import { toast } from "react-toastify";
import {
  signInFailure,
  signInStart,
  signInSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  clearError,
  forgotPasswordStart,
  forgotPasswordFailure,
  forgotPasswordSuccess,
} from "../Reducers/userSlice";

export const SignInUser = (email, password) => async (dispatch) => {
  try {
    dispatch(signInStart());

    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post("http://localhost:4000/api/v1/login", {
      email,
      password,
      config,
    });

    const { token } = res.data;
    console.log(token);
    localStorage.setItem("token", token);

    dispatch(signInSuccess(res.data.user));
  } catch (error) {
    console.log(error);
    dispatch(signInFailure(error.response.data.message));
  }
};

export const registerUser =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch(registerStart());
      let name = firstName + " " + lastName;

      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("http://localhost:4000/api/v1/register", {
        name,
        email,
        password,
        config,
      });

      dispatch(registerSuccess(res.data.user));
    } catch (error) {
      dispatch(registerFailure(error.response.statusText));
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgotPasswordStart());
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post(
      "http://localhost:4000/api/v1/password/forgot",
      {
        email,
        config,
      }
    );

    dispatch(forgotPasswordSuccess(res.data.message));
    toast.success("Email has been sent to given email address.");
  } catch (error) {
    console.log(error);
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch(clearError());
};
