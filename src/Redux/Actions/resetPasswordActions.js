import axios from "axios";
import { toast } from "react-toastify";
import {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  clearError,
} from "../Reducers/resetPasswordSlice";
import base_url from "./helper/helper";

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch(resetPasswordStart());
    console.log(token);

    const res = await axios.put(`${base_url}/password/reset/${token}`, {
      passwords,
    });

    dispatch(resetPasswordSuccess(res.data.success));
    toast.success();
    dispatch(clearError);
  } catch (error) {
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch(clearError());
};
