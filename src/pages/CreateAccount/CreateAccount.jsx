import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/Actions/userActions";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValidation = () => {
    var regName = /^[A-Za-z]+$/;
    var regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!regName.test(firstname)) {
      if (firstname === "") {
        setError("*First Name should not be empty.");
        return;
      }
      setError("*First Name should contains only Alphabets.");
      return;
    } else if (!regName.test(lastname)) {
      if (lastname === "") {
        setError("*Last Name should not be empty.");
        return;
      }
      setError("*Last Name should contains only Alphabets.");
      return;
    } else if (!regEmail.test(email)) {
      if (email === "") {
        setError("*Email should not be empty.");
        return;
      }
      setError("*Enter valid Email.");
      return;
    } else if (password === "") {
      setError("*Enter password.");
    } else if (confirmPassword === "") {
      setError("*Enter confirm password.");
    } else if (password !== confirmPassword) {
      setError("*Password does not match.");
    } else {
      setError(null);
      handleCreateAccount();
    }
  };

  const handleCreateAccount = () => {
    // console.log(firstname , lastname , email , password);
    dispatch(registerUser(firstname, lastname, email, password));
  };

  // get current signIn user from store
  const { currentUser, signInLoading, registerError, isAuthenthicated } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenthicated === true) navigate("/");
  }, [isAuthenthicated]);

  return (
    <div
      className="row createAccount m-0"
      style={{ backgroundColor: "#f2f4f7" }}
    >
      <div className="d-flex flex-column">
        <div className="card-body px-md-4 px-sm-4 pt-sm-5 pt-md-5">
          <div className="row justify-content-end">
            <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
              <h2 className="text-left fw-semibold mt-4 mb-0">
                Create An Account
              </h2>
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
                                id="firstName"
                                className="form-control shadow-none"
                                onChange={(e) => setFirstName(e.target.value)}
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
                                className="form-control shadow-none"
                                onChange={(e) => setLastName(e.target.value)}
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
                                className="form-control shadow-none"
                                onChange={(e) => setEmail(e.target.value)}
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
                                className="form-control shadow-none"
                                onChange={(e) => setPassword(e.target.value)}
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
                                className="form-control shadow-none"
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input shadow-none"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                              onClick={(e) => setCheck(e.target.checked)}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              By using this form you agree with the storage and
                              handling of your data by this website.
                            </label>
                          </div>
                          <div class="form-check">
                            <label style={{ color: "red", fontSize: "14px" }}>
                              {error}
                            </label>
                            <label style={{ color: "red", fontSize: "14px" }}>
                              {registerError && <>Email already registered.</>}
                            </label>
                          </div>
                          <div className="d-flex justify-content-left mb-3 mb-lg-4 mt-4">
                            <button
                              type="button"
                              disabled={!check}
                              className="btn text-nowrap btn-md px-5"
                              style={{
                                backgroundColor: "#52057B",
                                color: "white",
                              }}
                              onClick={handleValidation}
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
