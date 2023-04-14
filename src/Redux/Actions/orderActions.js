import axios from "axios";
import {
  ordersFailure,
  ordersRequest,
  ordersSuccess,
} from "../Reducers/orderSlice";
import { toast } from "react-toastify";
import { resetCartItems } from "./cartActions";
import base_url from "./helper/helper";

// Get my Orders
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch(ordersRequest());
    const res = await axios.get(`${base_url}/orders/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch(ordersSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(ordersFailure(error));
  }
};

// Get All Orders
export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await axios.get(`${base_url}/admin/orders`);

    return res.data;
  } catch (error) {
    dispatch(ordersFailure(error));
  }
};

export const createOrder = (order) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "${base_url}/order/new",
      { ...order },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    toast.success("Order Placed Successfully");
    sessionStorage.removeItem("orderInfo");
    dispatch(resetCartItems);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
