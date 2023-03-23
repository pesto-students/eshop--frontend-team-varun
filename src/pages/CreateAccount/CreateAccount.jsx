import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div
      className="row createAccount m-0"
      style={{ backgroundColor: "#f2f4f7" }}
    >
      <div className="d-flex flex-column">
        <div className="card-body px-md-4 px-sm-4 pt-sm-5 pt-md-5">
          <div className="row justify-content-end">
            <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
              <h2 className="text-left fw-semibold mt-4 mb-0">Create An Account</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <section className="">
              <div className="row d-flex justify-content-end align-items-end h-100">
                <div className="col-lg-12  col-xl-10">
                  <div className="card-body p-md-5 p-sm-5 ">
                    <div className="row justify-content-end ">
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <p className="text-left fw-bold mt-4">
                          Personal Information
                        </p>
                        <form>
                          <div className="d-flex flex-row align-items-left mb-4">
                            <div className="form-outline flex-fill">
                              <label className="form-label" for="firstName">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstNamea"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill">
                              <label className="form-label" for="lastName">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                className="form-control"
                              />
                            </div>
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
                <div className="col-lg-12 col-xl-10">
                  <div className="card-body p-md-5 p-sm-5">
                    <div className="row justify-content-left">
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <p className="text-left fw-bold mt-4">
                          SignIn Information
                        </p>
                        <form>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill">
                              <label
                                className="form-label"
                                for="form3Example3c"
                              >
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
                              <label
                                className="form-label"
                                for="form3Example4c"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                for="form3Example4cd"
                              >
                                Re-enter your password
                              </label>
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                              By using this form you agree with the storage and
                              handling of your data by this website.
                            </label>
                          </div>

                          <div className="d-flex justify-content-left mb-3 mb-lg-4 mt-4">
                            <button
                              type="button"
                              className="btn text-nowrap btn-md px-5"
                              style={{
                                backgroundColor: "#52057B",
                                color: "white",
                              }}
                            >
                              Create An Account
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
