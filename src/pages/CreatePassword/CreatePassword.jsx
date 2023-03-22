import React from "react";
import { Link } from "react-router-dom";

const CreatePassword = () => {
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
                      Create New Password
                    </p>
                    <p className="text-left mt-4">Type your new password</p>
                    <form>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="d-flex flex-column form-outline flex-fill mb-0 gap-4">
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
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
                            Set Password
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

export default CreatePassword;
