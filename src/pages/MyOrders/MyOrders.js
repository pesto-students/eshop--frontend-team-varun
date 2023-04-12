import React, { useEffect } from "react";
import "./MyOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../../Redux/Actions/orderActions";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

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
    <div className="container myorders">
      {ordersLoading ? <Loader /> : orderItems.map((orderItem) => (
        <div className="container p-2 border border-secondary rounded-2 mb-5">
          <div className="d-flex justify-content-between align-items-center m-0 mx-5 mt-2">
            <div className="order-status m-0">
              <p className="fw-semibold fs-6 mb-0 text-success">
                Order {orderItem.orderStatus}
              </p>
              <p className="mb-0 fs-5">{orderItem.paidAt.slice(0, 10)}</p>
            </div>
            <div className="order-status">
              <p className="fw-semibold fs-6 mb-0">Total</p>
              <p className="mb-0  fs-5">₹{orderItem.totalPrice}</p>
            </div>
          </div>
          <hr />
          {orderItem.orderItems.map((o) => (
            <div className="d-flex order-details align-items-center justify-content-between mx-5 mt-3">
              <img
                src={o.image}
                alt=""
                style={{ width: "10%" }}
                className="bg-secondary-subtle p-2"
              />
              <div>
                <p className="m-0 p-0 fw-semibold fs-5">
                  {o.name.slice(0, 60)}
                </p>
                <p className="m-0 p-0">{o.productId}</p>
              </div>
              <p className="m-0 p-0 fw-semibold fs-5">₹{o.price}</p>

              <Link
                type="button"
                to={`/product/${o.productId}`}
                className="btn text-nowrap btn-md px-5"
                style={{
                  backgroundColor: "#52057B",
                  color: "white",
                }}
              >
                Product Review or Ratings
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
