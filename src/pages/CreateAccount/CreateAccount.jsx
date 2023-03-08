import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div class="row createAccount" style={{ backgroundColor: "#f5f5f5" }}>
      <div class="col-md-6">
        <section class="">
          <div class="row d-flex justify-content-end align-items-end h-100">
            <div class="col-lg-12  col-xl-10">
              <div class="card-body p-md-5 p-sm-5 ">
                <div class="row justify-content-end ">
                  <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p class="text-left h1 fw-bold mb-5 mt-4">
                      Create An Account
                    </p>
                    <p class="text-left fw-bold mt-4">Personal Information</p>
                    <form>
                      <div class="d-flex flex-row align-items-left mb-4">
                        <div class="form-outline flex-fill mb-0">
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
                        <div class="form-outline flex-fill mb-0">
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
                      <div class="form-check d-flex justify-content-left mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label class="form-check-label" for="form2Example3">
                          Sign Up for newsletter
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
      <div class="col-md-6">
        <section class="">
          <div class="row d-flex justify-content-left align-items-left h-100">
            <div class="col-lg-12 col-xl-10">
              <div class="card-body p-md-5 p-sm-5">
                <div class="row justify-content-left">
                  <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p class="text-left h1 fw-bold mb-5 mt-4">Sign up</p>
                    <form>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-1">
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
                          Sign Up
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
  );
};

export default CreateAccount;
