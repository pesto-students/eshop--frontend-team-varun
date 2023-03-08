import React from "react";

const ForgotPassword = () => {
  return (
    <div class="row signIn" style={{ backgroundColor: "#f5f5f5" }}>
      <div class="col-md-6">
        <section class="">
          <div class="row d-flex justify-content-end align-items-end h-100">
            <div class="col-lg-12  col-xl-10">
              <div class="card-body p-md-5 p-sm-5 ">
                <div class="row justify-content-end ">
                  <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                    <p class="text-left h1 fw-bold mb-5 mt-4">
                      Forgot Password
                    </p>
                    <p class="text-left mt-4">
                      Type your registered email and we will send you a reset
                      link for your password.
                    </p>
                    <form>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
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
                      <div class="d-flex justify-content-left mb-3 mb-lg-4">
                        <button
                          type="button"
                          class="btn text-nowrap btn-lg px-5"
                          style={{
                            backgroundColor: "#52057B",
                            color: "white",
                          }}
                        >
                          Reset Password
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
      <div class="col-md-6"></div>
    </div>
  );
};

export default ForgotPassword;
