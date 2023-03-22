import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="row contact m-0" style={{ backgroundColor: "#f2f4f7" }}>
      <div className="col">
        <div className="row d-flex justify-content-center align-items-center m-lg-5 m-md-5 mx-md-0 m-sm-5 pt-md-3 px-lg-5 px-md-0 px-sm-5">
          <div className="col-lg-12 col-md-10 col-sm-12 border border-1 rounded-2">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4227224170354!2d73.7547689148109!3d18.60004697159347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9dc4ce5ac9f%3A0x7fdeb0087efc3a7f!2sPhoenix%20Market%20City%20Wakad!5e0!3m2!1sen!2sin!4v1678413978828!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              maptype="satellite"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <section className="">
            <div className="row d-flex justify-content-end align-items-end h-100">
              <div className="col-lg-10  col-xl-10">
                <div className="card-body p-lg-0 m-lg-0 py-md-5 px-sm-5 px-md-5 mx-md-5 py-sm-3 mx-sm-5 ">
                  <div className="row justify-content-start">
                    <div className="col-md-10 col-lg-12 col-xl-10 order-2 order-lg-1">
                      <p className="text-left h1 fw-bold my-5">Company Details</p>
                      <p className="text-left fw-bold mb-2">Location</p>
                      <p className="text-left">
                        844 Vivianne Apt. 182,Cedar Rapids, Michigan, 18969
                      </p>
                      <p className="text-left fw-bold mt-5 mb-2">Contact</p>
                      <p className="text-left mb-4 gap-1">
                        (607) 439-9021
                        <br />
                        Meredith_Jones@hotmail.com
                      </p>
                      <div className="col-12 d-flex flex-wrap gap-3 mb-5">
                        <a
                          href="..."
                          className="me-4"
                          style={{
                            color: "#4267B2",
                            fontSize: "larger",
                            // fontWeight: "bold",
                          }}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="..."
                          className="me-4"
                          style={{
                            color: "#1DA1F2",
                            fontSize: "larger",
                            // fontWeight: "bold",
                          }}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="..."
                          className="me-4"
                          style={{
                            color: "#E1306C",
                            fontSize: "larger",
                            // fontWeight: "bold",
                          }}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="..."
                          className="me-4"
                          style={{
                            color: "#0077B5",
                            fontSize: "larger",
                            // fontWeight: "bold",
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                          href="..."
                          className="me-4"
                          style={{
                            color: "#25D366",
                            fontSize: "larger",
                            // fontWeight: "bold",
                          }}
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-6">
          <section className="">
            <div className="row d-flex justify-content-end align-items-end h-100">
              <div className="col-lg-10  col-xl-10">
                <div className="card-body p-lg-0 m-lg-0 mb-lg-5 py-md-5 px-sm-5 px-md-5 mx-md-5 py-sm-3 mx-sm-5 mb-sm-5">
                  <div className="row justify-content-start">
                    <div className="col-md-10 col-lg-12 col-xl-10 order-2 order-lg-1">
                      <p className="text-left h1 fw-bold my-5">Drop Us A Line</p>
                      <p className="text-left mb-3 mt-1 mb-3">
                        Required fields are marked
                        <span style={{ color: "red" }}>*</span>
                      </p>
                      <form>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="textField"
                              className="form-control"
                              placeholder="Subject(Optional)"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="mb-3" style={{ width: "100%" }}>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Write your message here..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="d-flex justify-content-left mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn text-nowrap btn-lg px-5"
                            style={{
                              backgroundColor: "#52057B",
                              color: "white",
                            }}
                          >
                            Send Mail
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
  );
};

export default Contact;
