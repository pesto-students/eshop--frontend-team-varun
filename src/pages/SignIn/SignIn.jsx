import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="row signIn" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="col-md-6">
        <section className="">
          <div className="row d-flex justify-content-end align-items-end h-100">
            <div className="col-lg-12  col-xl-10">
              <div className="card-body p-md-5 p-sm-5 ">
                <div className="row justify-content-end ">
                  <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p className="text-left h1 fw-bold mb-5 mt-4">
                      Registered Customers
                    </p>
                    <p className="text-left mt-4">
                      If you have an account, sign in with your email address.
                    </p>
                    <form>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex flex-wrap justify-content-left mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                          By using this form you agree with the storage and
                          handling of your data by this website.
                        </label>
                      </div>
                      <div className="d-flex justify-content-left mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn text-nowrap btn-lg px-5"
                          style={{
                            backgroundColor: "#52057B",
                            color: "white",
                          }}
                        >
                          Sign In
                        </button>
                        <Link
                          to="/forgotPassword"
                          className="d-flex align-items-center fw-bold mx-4"
                          style={{
                            color: "#52057B",
                            textDecoration: "none",
                          }}
                        >
                          <div>Forgot Password</div>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-6">
        <section className="">
          <div className="row d-flex justify-content-left align-items-left h-100">
            <div className="col-lg-12 col-xl-10 ">
              <div className="card-body p-md-5 p-sm-5">
                <div className="row justify-content-left">
                  <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p className="text-left h1 fw-bold mb-5 mt-4">New Customer</p>
                    <p className="text-left mb-5 mt-4">
                      Creating an account has many benefits: check out faster,
                      keep more than one address, track orders and more.
                    </p>
                    <div className="d-flex justify-content-left mb-lg-4">
                      <Link
                        to="/createAccount"
                        className="nav-link text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          type="button"
                          className="btn text-nowrap btn-lg px-5 mb-5"
                          style={{
                            backgroundColor: "#52057B",
                            color: "white",
                          }}
                        >
                          Create An Account
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

export default SignIn;
