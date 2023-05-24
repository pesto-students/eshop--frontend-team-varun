import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { forgotPassword } from "../../Redux/Actions/userActions";
import { clearError } from "../../Redux/Reducers/userSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const { forgetPasswordMessage, forgotPasswordLoading, forgetPasswordError } =
    useSelector((state) => state.user);

  const validateEmail = () => {
    if (email === "") {
      setError("*Email should not be empty.");
      return;
    }

    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (forgetPasswordError) {
      toast.error(forgetPasswordError);
      dispatch(clearError());
    }

    if (forgetPasswordMessage) {
      toast.success(forgetPasswordMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, forgetPasswordError]);

  return (
    <div className="row signIn m-0 " style={{ backgroundColor: "#f2f4f7" }}>
      <div className="col-md-6 my-5">
        {/* {loading && <Loader />} */}

        {forgotPasswordLoading ? (
          <Loader />
        ) : (
          <section className="">
            <div className="row d-flex justify-content-end align-items-end h-100">
              <div className="col-lg-12  col-xl-10">
                <div className="card-body p-md-5 p-sm-5 ">
                  <div className="row justify-content-end ">
                    <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                      <p className="text-left h2 fw-semibold mb-5 mt-4">
                        Forgot Password
                      </p>
                      <p className="text-left mt-4">
                        Type your registered email and we will send you a reset
                        link for your password.
                      </p>
                      <form>
                        <div className="d-flex flex-row align-items-center ">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control shadow-none border border-none"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <label style={{ color: "red", fontSize: "14px" }}>
                          {error}
                        </label>
                        <label
                          style={{
                            color:
                              forgetPasswordMessage !== "" ? "green" : "red",
                            fontSize: "14px",
                          }}
                        >
                          {forgetPasswordMessage || forgetPasswordError}
                        </label>
                        <div className="d-flex justify-content-left my-4 mb-lg-4">
                          {/* <Link
                          to="/createPassword"
                          className="d-flex align-items-center fw-bold"
                          style={{
                            textDecoration: "none",
                          }}
                        > */}
                          <button
                            type="button"
                            className="btn text-nowrap btn-md px-5"
                            style={{
                              backgroundColor: "#52057B",
                              color: "white",
                            }}
                            onClick={validateEmail}
                          >
                            Send Mail
                          </button>
                          {/* </Link> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <div className="col-md-6"></div>
    </div>
  );
};

export default ForgotPassword;
