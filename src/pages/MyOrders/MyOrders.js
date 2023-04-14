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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { orderItems, ordersLoading } = useSelector(
    (state) => state.orders
  );

  console.log(orderItems);

  return (
    <div className="myorders">
      {ordersLoading ? (
        <Loader />
      ) : orderItems.length > 0 ? (
        orderItems.map((orderItem) => (
          <div className="container p-2 border border-secondary rounded-2">
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
              <div className="order-details mx-5 mt-3" style={{backgroundColor: "#f2f4f7"}}>
                <img
                  src={o.image}
                  alt=""
                  style={{ width: "100px" }}
                  className="p-2"
                />
                <div>
                  <p className="m-0 p-0 fw-semibold fs-5">
                    {`${
                      o.name.length > 20 ? `${o.name?.slice(0, 20)}...` : o.name
                    }`}
                  </p>
                  <p className="m-0 p-0">{o.productId}</p>
                </div>
                <p className="m-0 p-0 fw-semibold fs-5">₹{o.price}</p>

                <Link
                  type="button"
                  to={`/product/${o.productId}`}
                  className="btn text-nowrap review-button"
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
        ))
      ) : (
        <h4 className="py-2 text-uppercase text-center opacity-50 no-orders">
          No Orders Available
        </h4>
      )}
    </div>
  );
};

export default MyOrders;
