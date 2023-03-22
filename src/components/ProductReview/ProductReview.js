import React from "react";
import GradientSVG from "./gradientSVG";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Reviews from "../../components/Reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductReview = ({ allReviews }) => {
  const idCSS = "hello";
  const percentage = 4.5;
  return (
    <div className={allReviews ? "container-fluid" : "container"} style={{marginTop: "24px"}}>
      <p className={`m-0 fw-semibold fs-5 p-0 ${allReviews ? "ms-4" : ""}`}>Product Review</p>
      <div className="row">
        <div
          style={{ height: "150px", width: "150px", margin: "0"}}
          className={`col-4 ${allReviews ? "ms-4" : ""}`}
        >
          <GradientSVG />
          <CircularProgressbarWithChildren
            strokeWidth={15}
            value={(percentage / 5) * 100}
            styles={{
              path: { stroke: `url(#${idCSS})`, strokeLinecap: "butt" },
              trail: {
                stroke: "#E2E2E2",
              },
            }}
          >
            <div
              style={{
                fontSize: "36px",
                marginTop: 15,
                color: "black",
                fontWeight: "600",
              }}
            >
              <p>{percentage}</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="col-lg-8">
          <div className="d-flex flex-column w-100 mt-4 gap-2 ms-1">
            <div className="d-flex align-items-center">
              <p className="m-0 me-3">5 Star</p>
              <div
                className="progress w-50 border rounded-0"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{
                    background:
                      "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",
                    width: "93%",
                  }}
                ></div>
              </div>
              <p className="m-0 ms-3 text-secondary">93%</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0 me-3">4 Star</p>
              <div
                className="progress w-50 border rounded-0"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{
                    background:
                      "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",
                    width: "89%",
                  }}
                ></div>
              </div>
              <p className="m-0 ms-3 text-secondary">89%</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0 me-3">3 Star</p>
              <div
                className="progress w-50 border rounded-0"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{
                    background:
                      "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",
                    width: "1.2%",
                  }}
                ></div>
              </div>
              <p className="m-0 ms-3 text-secondary">1.2%</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0 me-3">2 Star</p>
              <div
                className="progress w-50 border rounded-0"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{
                    background:
                      "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",
                    width: "0%",
                  }}
                ></div>
              </div>
              <p className="m-0 ms-3 text-secondary">0%</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0 me-3">1 Star</p>
              <div
                className="progress w-50 border rounded-0"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{
                    background:
                      "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",
                    width: "0%",
                  }}
                ></div>
              </div>
              <p className="m-0 ms-3 text-secondary">0%</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex">
        <Reviews />
        <Reviews />
      </div>
      <div className="d-flex">
        <Reviews />
        <Reviews />
      </div>
      <div className="d-flex">
        <Reviews />
        <Reviews />
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Reviews />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Reviews />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Reviews />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Reviews />
          </div>
        </div>
        {!allReviews ? (
          <Link to="/product/allReviews" className="text-decoration-none">
            <p className="text-center mt-5 mb-0 fw-semibold fs-6 text-dark">
              See All
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </p>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default ProductReview;
