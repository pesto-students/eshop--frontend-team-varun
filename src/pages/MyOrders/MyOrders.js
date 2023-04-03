import React, {useEffect} from "react";
import Filters from "../../components/Filters/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./MyOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../../Redux/Actions/orderActions";

const MyOrders = () => {
  const dispatch = useDispatch();
  //   const searchSubmitHandler = (e) => {
  //     if (keyword.trim()) {
  //       dispatch(getProductsUsingFilters(keyword));
  //     }
  //   };

  //   const childToParent = (category, minPrice, maxPrice, brand) => {
  //     console.log(brand);
  //     dispatch(
  //       getProductsUsingFilters("", category, [minPrice, maxPrice], 0, brand)
  //     );
  //   };

  useEffect(() => {
    dispatch(getMyOrders());
    // dispatch(getProductsUsingFilters());
  }, []);

  const { orderItems, ordersLoading, orderError } = useSelector(
    (state) => state.orders
  );

  return (
    <div className="container mt-5 p-0">
      <div className="input-group border rounded-2">
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Search order"
          aria-label="Order Name"
          aria-describedby="basic-addon2"
          onChange={(e) => {}}
        />
        <span className="input-group-text bg-white border-0" id="basic-addon2">
          <img
            src="../assets/search.svg"
            alt=""
            //   onClick={searchSubmitHandler}
          />
        </span>
      </div>

      <div className="container p-2 border border-secondary rounded-2 mt-5">
        <div className="d-flex order-details align-items-center justify-content-between mx-5">
          <img
            src="assets/productDetails/laptop1.png"
            alt=""
            style={{ width: "15%" }}
          />
          <p className="m-0 p-0 fw-semibold">Product Name</p>
          <p className="m-0 p-0 fw-semibold">₹1000</p>
          <p className="m-0 p-0 text-success fw-bold">
            Delivered on 9th Jan, 2023
          </p>
        </div>
      </div>
      <div className="container p-2 border border-secondary rounded-2 mt-5">
        <div className="d-flex order-details align-items-center justify-content-between mx-5">
          <img
            src="assets/productDetails/laptop1.png"
            alt=""
            style={{ width: "15%" }}
          />
          <p className="m-0 p-0 fw-semibold">Product Name</p>
          <p className="m-0 p-0 fw-semibold">₹1000</p>
          <p className="m-0 p-0 text-success fw-bold">
            Delivered on 9th Jan, 2023
          </p>
        </div>
      </div>
      <div className="container p-2 border border-secondary rounded-2 mt-5">
        <div className="d-flex order-details align-items-center justify-content-between mx-5">
          <img
            src="assets/productDetails/laptop1.png"
            alt=""
            style={{ width: "15%" }}
          />
          <p className="m-0 p-0 fw-semibold">Product Name</p>
          <p className="m-0 p-0 fw-semibold">₹1000</p>
          <p className="m-0 p-0 text-success fw-bold">
            Delivered on 9th Jan, 2023
          </p>
        </div>
      </div>
      <div className="container p-2 border border-secondary rounded-2 mt-5 mb-5">
        <div className="d-flex order-details align-items-center justify-content-between mx-5">
          <img
            src="assets/productDetails/laptop1.png"
            alt=""
            style={{ width: "15%" }}
          />
          <p className="m-0 p-0 fw-semibold">Product Name</p>
          <p className="m-0 p-0 fw-semibold">₹1000</p>
          <p className="m-0 p-0 text-success fw-bold">
            Delivered on 9th Jan, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
