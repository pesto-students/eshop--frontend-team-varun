import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div class="row createAccount" style={{ backgroundColor: "#f2f4f7" }}>
      <div class="d-flex flex-column">
        <div className="card-body px-md-0 px-sm-5 pt-sm-5 pt-md-5 ">
          <div class="row justify-content-end ">
            <div class="col-md-11 col-xl-10 px-md-3 order-2 order-lg-1">
              <h1 class="text-left fw-bold mt-4 mb-0">Create An Account</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <section class="">
              <div class="row d-flex justify-content-end align-items-end h-100">
                <div class="col-lg-12  col-xl-10">
                  <div class="card-body p-md-5 p-sm-5 ">
                    <div class="row justify-content-end ">
                      <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <p class="text-left fw-bold mt-4">
                          Personal Information
                        </p>
                        <form>
                          <div class="d-flex flex-row align-items-left mb-4">
                            <div class="form-outline flex-fill">
                              <label class="form-label" for="firstName">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstNamea"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill">
                              <label class="form-label" for="lastName">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                class="form-control"
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
          <div class="col-md-6">
            <section class="">
              <div class="row d-flex justify-content-left align-items-left h-100">
                <div class="col-lg-12 col-xl-10">
                  <div class="card-body p-md-5 p-sm-5">
                    <div class="row justify-content-left">
                      <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <p class="text-left fw-bold mt-4">SignIn Information</p>
                        <form>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill">
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="form3Example4cd">
                                Re-enter your password
                              </label>
                              <input
                                type="password"
                                id="form3Example4cd"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="form-check d-flex flex-wrap mb-5">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label class="form-check-label" for="form2Example3">
                              By using this form you agree with the storage and
                              handling of your data by this website.
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div class="d-flex justify-content-left mb-3 mb-lg-4">
                            <button
                              type="button"
                              class="btn text-nowrap btn-lg px-5"
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
