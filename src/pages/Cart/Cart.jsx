import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddItemsToCart,
  RemoveItemsFromCart,
} from "../../Redux/Actions/cartActions";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlePlus = (id, quantity, stock) => {
    const netQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }

    dispatch(AddItemsToCart(id, netQty));
  };

  const handleMinus = (id, quantity) => {
    const netQty = quantity - 1;
    if (quantity === 1) {
      return;
    }

    dispatch(AddItemsToCart(id, netQty));
  };

  return (
    <div className="row cart m-0 mt-5">
      <div className="col-md-8 cart">
        <section className="">
          <div className="row d-flex justify-content-start align-items-start h-100">
            <div className="col-lg-11  col-xl-11">
              <div className="card-body py-md-4 ps-md-5 p-sm-4">
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                    <p className="text-left h3 fw-semibold mb-5 mt-4">Cart</p>
                    {/* <!-- Shopping cart table --> */}
                    {cartItems?.length > 0 ? (
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="border-1">
                                <div className="py-2 text-uppercase text-center">
                                  Remove
                                </div>
                              </th>
                              <th scope="col" className="border-1">
                                <div className="p-2 text-uppercase text-center">
                                  Product
                                </div>
                              </th>
                              <th scope="col" className="border-1">
                                <div className="py-2 text-uppercase text-center">
                                  Price
                                </div>
                              </th>
                              <th scope="col" className="border-1">
                                <div className="py-2 text-uppercase text-center">
                                  Quantity
                                </div>
                              </th>
                              <th scope="col" className="border-1">
                                <div className="py-2 text-uppercase text-center">
                                  Total
                                </div>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {cartItems?.map((item, index) => (
                              <tr key={index}>
                                <td className="border-0 align-middle text-center">
                                  <i
                                    className="fa fa-trash"
                                    style={{
                                      cursor: "pointer",
                                      color: "#D22B2B",
                                    }}
                                    onClick={(e) =>
                                      dispatch(
                                        RemoveItemsFromCart(item.productId)
                                      )
                                    }
                                  ></i>
                                </td>
                                <th
                                  scope="row"
                                  className="border-0 text-center"
                                >
                                  <Link
                                    to={`/product/${item.productId}`}
                                    className="text-decoration-none text-dark"
                                  >
                                    <div className="py-2 d-flex justify-content-evenly align-items-center">
                                      <img
                                        src={item.image}
                                        alt=""
                                        width="70"
                                        className="img-fluid rounded shadow-sm"
                                      />
                                      <div className="text-start mx-2 px-2">
                                        <h6 className="my-0 overflow-hidden">
                                          {item.name.substring(0, 10)}...
                                        </h6>
                                        <span className="text-muted font-weight-normal font-italic d-block">
                                          Category: {item.category}
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </th>
                                <td className="border-0 align-middle text-center">
                                  <strong>{`₹ ${item.price}`}</strong>
                                </td>
                                <td className="border-0 align-middle text-center">
                                  <div className="col d-flex align-items-center justify-content-center gap-3">
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                      onClick={(e) =>
                                        handlePlus(
                                          item.productId,
                                          item.quantity,
                                          item.stock
                                        )
                                      }
                                    ></i>
                                    <strong>{item.quantity}</strong>
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                      onClick={(e) =>
                                        handleMinus(
                                          item.productId,
                                          item.quantity
                                        )
                                      }
                                    ></i>
                                  </div>
                                </td>
                                <td className="border-0 align-middle text-center">
                                  <strong>{item.quantity * item.price}</strong>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <>
                        <h4 className="py-2 text-uppercase text-center">
                          Your cart is Empty add Some Products
                        </h4>
                      </>
                    )}

                    <div className="d-flex justify-content-left mb-lg-4 mt-5">
                      <Link
                        to="/products"
                        className="nav-link text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          type="button"
                          className="btn text-nowrap btn-md px-5"
                          style={{
                            backgroundColor: "#52057B",
                            color: "white",
                          }}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-4" style={{ backgroundColor: "#f2f4f7" }}>
        <section className="">
          <div className="row d-flex justify-content-left align-items-left h-100">
            <div className="col-lg-12 col-xl-12 ">
              <div className="card-body py-md-5 px-md-1 p-sm-3">
                <div className="row justify-content-left">
                  <div className="col-md-11 col-lg-11 col-xl-11 order-2 order-lg-1">
                    <div className="text-left mt-5 pt-5">
                      <p className="text-left fw-bold mt-2">Your Cart Total</p>
                    </div>

                    <div className="p-4">
                      <ul className="list-unstyled mb-4">
                        {/* <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Order Subtotal</strong>
                          <strong>{` ₹ ${cartItems??.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          )}`}</strong>
                        </li> */}
                        {/* <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">
                            Shipping and handling
                          </strong>
                          <strong>₹0.00</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Tax</strong>
                          <strong>₹0.00</strong>
                        </li> */}
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Total</strong>
                          <h5
                            className="font-weight-bold"
                            style={{ color: "green" }}
                          >{` ₹ ${cartItems?.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          )} `}</h5>
                        </li>
                      </ul>
                    </div>

                    <div className="d-flex justify-content-left mb-lg-4">
                      <Link
                        to="/checkout"
                        className="nav-link text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          type="button"
                          className="btn text-nowrap btn-md px-5"
                          style={{
                            backgroundColor: "#52057B",
                            color: "white",
                          }}
                        >
                          Procceed to checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
