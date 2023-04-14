import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { SignInUser, clearErrors } from "../../Redux/Actions/userActions";
import Loader from "../../components/Loader/Loader";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  // get current signIn user from store
  const { signInLoading, signInError, SignInError, isAuthenthicated } =
    useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(SignInUser(email, password));
  };

  useEffect(() => {
    // dispatch(clearErrors());
    if (signInError === true || SignInError === true) {
      dispatch(clearErrors());
    } else {
      setCheck(false);
      if (isAuthenthicated === true) navigate("/");
    }
  }, [isAuthenthicated]);

  return (
    <div className="row signIn m-0 mt-5" style={{ backgroundColor: "#f2f4f7" }}>
      {signInLoading ? (
        <Loader />
      ) : (
        <>
          <div className="col-md-6">
            <section className="">
              <div className="row d-flex justify-content-end align-items-end h-100">
                <div className="col-lg-12  col-xl-10">
                  <div className="card-body p-md-5 p-sm-5 ">
                    <div className="row justify-content-end ">
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <p className="text-left h3 fw-semibold mb-5 mt-4">
                          Registered Customers
                        </p>
                        <p className="text-left mt-4">
                          If you have an account, sign in with your email
                          address.
                        </p>
                        <form>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" for="email">
                                Your Email
                              </label>
                              <input
                                name="email"
                                type="email"
                                id="email"
                                className="form-control shadow-none border border-none"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" for="password">
                                Password
                              </label>
                              <input
                                name="password"
                                type="password"
                                id="password"
                                className="form-control shadow-none border border-none"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input me-2 shadow-none"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                              onClick={(e) => setCheck(e.target.checked)}
                            />
                            <label
                              className="form-check-label ms-2"
                              for="form2Example3"
                            >
                              By using this form you agree with the storage and
                              handling of your data by this website.
                            </label>
                          </div>
                          <label style={{ color: "red", fontSize: "14px" }}>
                            {signInError}
                          </label>
                          <div className="d-flex justify-content-left my-3 mb-lg-4">
                            <button
                              type="button"
                              disabled={!check}
                              className="btn text-nowrap btn-md px-5"
                              style={{
                                backgroundColor: "#52057B",
                                color: "white",
                              }}
                              onClick={handleClick}
                            >
                              Sign In
                            </button>
                            <Link
                              to="/forgotPassword"
                              className="d-flex align-items-center fw-semibold mx-4"
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
                        <p className="text-left h3 fw-semibold mb-5 mt-4">
                          New Customer
                        </p>
                        <p className="text-left mb-5 mt-4">
                          Creating an account has many benefits: check out
                          faster, keep more than one address, track orders and
                          more.
                        </p>
                        <div className="d-flex justify-content-left mb-lg-4">
                          <Link
                            to="/createAccount"
                            className="nav-link text-white"
                            style={{ textDecoration: "none" }}
                          >
                            <button
                              type="button"
                              className="btn text-nowrap btn-md px-5 mb-5"
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
        </>
      )}
    </div>
  );
};

export default SignIn;
