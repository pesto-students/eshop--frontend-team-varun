import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div class="row cart" style={{ backgroundColor: "#f5f5f5" }}>
      <div class="col-md-8 cart">
        <section class="">
          <div class="row d-flex justify-content-start align-items-start h-100">
            <div class="col-lg-12  col-xl-10">
              <div class="card-body p-md-4 p-sm-4">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p class="text-left h1 fw-bold mb-5 mt-4">Cart</p>
                    {/* <!-- Shopping cart table --> */}
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" class="border-1">
                              <div class="py-2 text-uppercase text-center">
                                Remove
                              </div>
                            </th>
                            <th scope="col" class="border-1">
                              <div class="p-2 text-uppercase text-center">
                                Product
                              </div>
                            </th>
                            <th scope="col" class="border-1">
                              <div class="py-2 text-uppercase text-center">
                                Price
                              </div>
                            </th>
                            <th scope="col" class="border-1">
                              <div class="py-2 text-uppercasetext-center">
                                Quantity
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border-0 align-middle text-center">
                              <a href="..." class="text-dark">
                                <i class="fa fa-trash"></i>
                              </a>
                            </td>
                            <th scope="row" class="border-0 text-center">
                              <div class="py-2 d-flex justify-content-evenly align-items-center">
                                <img
                                  src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                  alt=""
                                  width="70"
                                  class="img-fluid rounded shadow-sm"
                                />
                                <div class="d-inline-block align-middle">
                                  <h5 class="mb-0">
                                    <a
                                      href="..."
                                      class="text-dark d-inline-block align-middle"
                                    >
                                      Timex Unisex Originals
                                    </a>
                                  </h5>
                                  <span class="text-muted font-weight-normal font-italic d-block">
                                    Category: Watches
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td class="border-0 align-middle text-center">
                              <strong>$79.00</strong>
                            </td>
                            <td class="border-0 align-middle text-center">
                              <i class="fa fa-plus me-3" aria-hidden="true"></i>
                              <strong>3</strong>
                              <i
                                class="fa fa-minus ms-3"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 align-middle text-center">
                              <a href="..." class="text-dark">
                                <i class="fa fa-trash"></i>
                              </a>
                            </td>
                            <th scope="row" class="border-0 text-center">
                              <div class="py-2 d-flex justify-content-evenly align-items-center">
                                <img
                                  src="https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg"
                                  alt=""
                                  width="70"
                                  class="img-fluid rounded shadow-sm"
                                />
                                <div class="d-inline-block align-middle">
                                  <h5 class="mb-0">
                                    <a
                                      href="..."
                                      class="text-dark d-inline-block align-middle"
                                    >
                                      Lumix camera lense
                                    </a>
                                  </h5>
                                  <span class="text-muted font-weight-normal font-italic d-block">
                                    Category: Electronics
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td class="border-0 align-middle text-center">
                              <strong>$79.00</strong>
                            </td>
                            <td class="border-0 align-middle text-center">
                              <i class="fa fa-plus me-3" aria-hidden="true"></i>
                              <strong>3</strong>
                              <i
                                class="fa fa-minus ms-3"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 align-middle text-center">
                              <a href="..." class="text-dark">
                                <i class="fa fa-trash"></i>
                              </a>
                            </td>
                            <th scope="row" class="border-0 text-center">
                              <div class="py-2 d-flex justify-content-evenly align-items-center">
                                <img
                                  src="https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg"
                                  alt=""
                                  width="70"
                                  class="img-fluid rounded shadow-sm"
                                />
                                <div class="d-inline-block align-middle">
                                  <h5 class="mb-0">
                                    <a
                                      href="..."
                                      class="text-dark d-inline-block align-middle"
                                    >
                                      Gray Nike running shoe
                                    </a>
                                  </h5>
                                  <span class="text-muted font-weight-normal font-italic d-block">
                                    Category: Fashion
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td class="border-0 align-middle text-center">
                              <strong>$79.00</strong>
                            </td>
                            <td class="border-0 align-middle text-center">
                              <i class="fa fa-plus me-3" aria-hidden="true"></i>
                              <strong>3</strong>
                              <i
                                class="fa fa-minus ms-3"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="d-flex justify-content-left mb-lg-4 mt-5">
                      <Link
                        to="/products"
                        className="nav-link text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          type="button"
                          class="btn text-nowrap btn-lg px-5"
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
      <div class="col-md-4">
        <section class="">
          <div class="row d-flex justify-content-left align-items-left h-100">
            <div class="col-lg-12 col-xl-10 ">
              <div class="card-body p-md-5 p-sm-5">
                <div class="row justify-content-left">
                  <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <div class="text-left mt-5 pt-5">
                      <p class="text-left fw-bold mt-2">Your Cart Total</p>
                    </div>

                    <div class="p-4">
                      <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">Order Subtotal </strong>
                          <strong>$390.00</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">
                            Shipping and handling
                          </strong>
                          <strong>$10.00</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">Tax</strong>
                          <strong>$0.00</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">Total</strong>
                          <h5 class="font-weight-bold">$400.00</h5>
                        </li>
                      </ul>
                    </div>

                    <div class="d-flex justify-content-left mb-lg-4">
                      <Link
                        to="/checkout"
                        className="nav-link text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          type="button"
                          class="btn text-nowrap btn-lg px-5"
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
