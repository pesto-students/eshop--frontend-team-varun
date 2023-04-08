import React, { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./MyOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../../Redux/Actions/orderActions";

const MyOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  const { orderItems, ordersLoading, orderError } = useSelector(
    (state) => state.orders
  );

  console.log(orderItems);

  return (
    <div className="container mt-5 p-0">
      {orderItems.map((orderItem) => (
        <div className="container p-2 border border-secondary rounded-2 mt-5 mb-5">
          {orderItem.orderItems.map((order) => (
            <div className="d-flex order-details align-items-center justify-content-between mx-5">
              <img src={order.image} alt="" style={{ width: "15%" }} />
              <p className="m-0 p-0 fw-semibold">{order.name}</p>
              <p className="m-0 p-0 fw-semibold">₹{order.price}</p>
            </div>
          ))}
          <p className="m-0 p-0 text-success fw-bold text-center mt-3">
            {orderItem.orderStatus}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
