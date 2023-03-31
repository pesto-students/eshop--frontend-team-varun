import React, { useEffect, useState } from "react";
import "./CreatePassword.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearErrors,
  resetPassword,
} from "../../Redux/Actions/resetPasswordActions";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    resetPasswordLoading,
    resetPasswordSuccessMessage,
    resetPasswordError,
  } = useSelector((state) => state.resetPassword);

  const location = useLocation();
  const token = location.pathname.split("/")[3];

  useEffect(() => {
    if (resetPasswordError) {
      toast.error(resetPasswordError);
      dispatch(clearErrors());
    }

    if (resetPasswordSuccessMessage) {
      toast.success(resetPasswordSuccessMessage);
      dispatch(clearErrors());
      navigate("/signIn");
    }
  }, [dispatch, resetPasswordError, resetPasswordSuccessMessage]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password mismatch");
    } else {
      const passwords = {
        password,
        confirmPassword,
      };

      dispatch(resetPassword(token, passwords));
      setError();
    }
  };

  return (
    <div
      className="row createPassword m-0"
      style={{ backgroundColor: "#f2f4f7" }}
    >
      <div className="col-md-6">
        <section className="">
          <div className="row d-flex justify-content-end align-items-end h-100">
            <div className="col-lg-12  col-xl-10">
              <div className="card-body p-md-5 p-sm-5 ">
                <div className="row justify-content-end ">
                  <div className="col-md-11 col-lg-11 col-xl-12 order-2 order-lg-1">
                    <p
                      className="text-left h3 fw-bold mb-5 mt-4"
                      // style={{ fontWeight: "bold" }}
                    >
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
                              className="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-left mb-3 mb-lg-4 gap-3">
                        <label
                          style={{
                            color: "red",
                            fontSize: "14px",
                            padding: "3px",
                          }}
                        >
                          {error}
                        </label>
                        <button
                          type="button"
                          className="btn text-nowrap btn-md px-5"
                          onClick={handleResetPassword}
                          style={{
                            backgroundColor: "#52057B",
                            color: "white",
                          }}
                        >
                          Set Password
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
      <div className="col-md-6"></div>
    </div>
  );
};

export default CreatePassword;
