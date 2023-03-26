import axios from "axios";
import {
  ordersFailure,
  ordersRequest,
  ordersSuccess,
} from "../Reducers/orderSlice";

// Get All Orders
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch(ordersRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/admin/orders`);

    dispatch(ordersSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(ordersFailure(error));
  }
};
