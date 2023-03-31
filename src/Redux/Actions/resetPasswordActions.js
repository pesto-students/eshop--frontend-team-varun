import axios from "axios";
import { toast } from "react-toastify";
import {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  clearError,
} from "../Reducers/resetPasswordSlice";

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch(resetPasswordStart());

    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(
      `http://localhost:4000/api/v1/password/reset/${token}`,
      {
        passwords,
        config,
      }
    );

    dispatch(resetPasswordSuccess(res.data.success));
    toast.success();
    dispatch(clearError);
  } catch (error) {
    console.log(error);
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch(clearError());
};
