import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="row signIn m-0" style={{ backgroundColor: "#f2f4f7" }}>
      <div className="col-md-6">
        <section className="">
          <div className="row d-flex justify-content-end align-items-end h-100">
            <div className="col-lg-12  col-xl-10">
              <div className="card-body p-md-5 p-sm-5 ">
                <div className="row justify-content-end ">
                  <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p className="text-left h1 fw-bold mb-5 mt-4">
                      Forgot Password
                    </p>
                    <p className="text-left mt-4">
                      Type your registered email and we will send you a reset
                      link for your password.
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
                      <div className="d-flex justify-content-left mb-3 mb-lg-4">
                        <Link
                          to="/createPassword"
                          className="d-flex align-items-center fw-bold"
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <button
                            type="button"
                            className="btn text-nowrap btn-lg px-5"
                            style={{
                              backgroundColor: "#52057B",
                              color: "white",
                            }}
                          >
                            Send Mail
                          </button>
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
      <div className="col-md-6"></div>
    </div>
  );
};

export default ForgotPassword;
