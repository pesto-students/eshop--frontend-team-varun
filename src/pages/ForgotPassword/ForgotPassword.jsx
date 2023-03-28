import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reqdata, setReqData] = useState("");
  const [mailSent, setMailSent] = useState(false);

  const validateEmail = async () => {
    var regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!regEmail.test(email)) {
      if (email === "") {
        setError("*Email should not be empty.");
        return;
      }

      setError("*Enter valid Email.");
      return;
    } else {
      setLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:4000/api/v1/password/forgot",
          {
            email,
          }
        );

        setLoading(false);
        toast.success(res.data.message);
        setReqData(res.data.message);
        setMailSent(true);
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.message);
        setReqData(error.response.data.message);
        setMailSent(false);
      }
    }
  };

  return (
    <div className="row signIn m-0 mt-5" style={{ backgroundColor: "#f2f4f7" }}>
      <div className="col-md-6">
        {/* {loading && <Loader />} */}

        {loading ? (
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
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <label style={{ color: "red", fontSize: "14px" }}>
                          {error}
                        </label>
                        <label
                          style={{
                            color: mailSent === true ? "green" : "red",
                            fontSize: "14px",
                          }}
                        >
                          {reqdata}
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
