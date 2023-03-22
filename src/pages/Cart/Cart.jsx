import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
// import { cartProducts } from "../../localFiles/cartProduct";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="row cart m-0">
      <div className="col-md-8 cart">
        <section className="">
          <div className="row d-flex justify-content-start align-items-start h-100">
            <div className="col-lg-11  col-xl-10">
              <div className="card-body p-md-4 p-sm-4">
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                    <p className="text-left h1 fw-bold mb-5 mt-4">Cart</p>
                    {/* <!-- Shopping cart table --> */}
                    {cart.products.length === 0 ? (
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
                                <div className="py-2 text-uppercasetext-center">
                                  Quantity
                                </div>
                              </th>
                              <th scope="col" className="border-1">
                                <div className="py-2 text-uppercasetext-center">
                                  Total Price
                                </div>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td className="border-0 align-middle text-center">
                                <a href="..." className="text-dark">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                              <th scope="row" className="border-0 text-center">
                                <div className="py-2 d-flex justify-content-evenly align-items-center">
                                  <img
                                    src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        href="..."
                                        className="text-dark d-inline-block align-middle"
                                      >
                                        Timex Unisex Originals
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      Category: Watches
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle text-center">
                                <strong>$79.00</strong>
                              </td>
                              <td className="border-0 align-middle text-center">
                                <div className="col d-flex align-items-center justify-content-center gap-3">
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  ></i>
                                  <strong>3</strong>
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </td>
                              <td className="border-0 align-middle text-center">
                                <strong>{3 * 79.0}</strong>
                              </td>
                            </tr>

                            <tr>
                              <td className="border-0 align-middle text-center">
                                <a href="..." className="text-dark">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                              <th scope="row" className="border-0 text-center">
                                <div className="py-2 d-flex justify-content-evenly align-items-center">
                                  <img
                                    src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        href="..."
                                        className="text-dark d-inline-block align-middle"
                                      >
                                        Timex Unisex Originals
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      Category: Watches
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle text-center">
                                <strong>$79.00</strong>
                              </td>
                              <td className="border-0 align-middle text-center">
                                <div className="col d-flex align-items-center justify-content-center gap-3">
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  ></i>
                                  <strong>3</strong>
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </td>
                              <td className="border-0 align-middle text-center">
                                <strong>{3 * 79.0}</strong>
                              </td>
                            </tr>

                            <tr>
                              <td className="border-0 align-middle text-center">
                                <a href="..." className="text-dark">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                              <th scope="row" className="border-0 text-center">
                                <div className="py-2 d-flex justify-content-evenly align-items-center">
                                  <img
                                    src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        href="..."
                                        className="text-dark d-inline-block align-middle"
                                      >
                                        Timex Unisex Originals
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      Category: Watches
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle text-center">
                                <strong>$79.00</strong>
                              </td>
                              <td className="border-0 align-middle text-center">
                                <div className="col d-flex align-items-center justify-content-center gap-3">
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  ></i>
                                  <strong>3</strong>
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </td>
                              <td className="border-0 align-middle text-center">
                                <strong>{3 * 79.0}</strong>
                              </td>
                            </tr>
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
                          className="btn text-nowrap btn-lg px-5"
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
            <div className="col-lg-12 col-xl-10 ">
              <div className="card-body p-md-5 p-sm-5">
                <div className="row justify-content-left">
                  <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <div className="text-left mt-5 pt-5">
                      <p className="text-left fw-bold mt-2">Your Cart Total</p>
                    </div>

                    <div className="p-4">
                      <ul className="list-unstyled mb-4">
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">
                            Order Subtotal{" "}
                          </strong>
                          <strong>$390.00</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">
                            Shipping and handling
                          </strong>
                          <strong>$10.00</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Tax</strong>
                          <strong>$0.00</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Total</strong>
                          <h5 className="font-weight-bold">$400.00</h5>
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
                          className="btn text-nowrap btn-lg px-5"
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
