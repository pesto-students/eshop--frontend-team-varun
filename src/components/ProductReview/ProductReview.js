import React, { useEffect, useState } from "react";
import GradientSVG from "./gradientSVG";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Reviews from "../../components/Reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AddReview from "./../AddReview/AddReview";
import "./productReview.css";

const ProductReview = ({ allReviews, id, currentProduct }) => {
  const idCSS = "hello";
  let [five, setFive] = useState(0);
  let [four, setFour] = useState(0);
  let [three, setThree] = useState(0);
  let [two, setTwo] = useState(0);
  let [one, setOne] = useState(0);

  useEffect(() => {
    function starsPer() {
      const counts = {};
      for (const num of currentProduct?.reviews) {
        counts[num.rating] = counts[num.rating] ? counts[num.rating] + 1 : 1;
      }
      setFive(counts[5] === undefined ? 0 : counts[5]);
      setFour(counts[4] === undefined ? 0 : counts[4]);
      setThree(counts[3] === undefined ? 0 : counts[3]);
      setTwo(counts[2] === undefined ? 0 : counts[2]);
      setOne(counts[1] === undefined ? 0 : counts[1]);
    }

    starsPer();
  }, []);

  return (
    <div
      className={allReviews ? "container" : "container m-0 p-0 ms-5"}
      style={{ marginTop: "24px" }}
    >
      <div className="container w-100 p-0">
        <div className="row p-0">
          <div className="col-lg-7 col-sm-12">
            {/* <p
              className={`m-0 fw-semibold fs-4 p-0 ${allReviews ? "ms-4" : ""}`}
            >
              Reviews ({currentProduct?.numOfReviews})
            </p> */}
            <div className="row mt-3">
              <div
                style={{ height: "150px", width: "150px", margin: "0" }}
                className={`col-4 ${allReviews ? "ms-4" : ""}`}
              >
                <GradientSVG />
                {/* <CircularProgressbarWithChildren

                  strokeWidth={15}
                  value={(currentProduct?.rating / 5) * 100}
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
                    <p>{currentProduct?.rating.toFixed(1)}</p>
                  </div>
                
                </CircularProgressbarWithChildren> */}
              </div>
              <div className="col-lg-8">
                <div className="d-flex flex-column w-100 mt-4 gap-2 ms-1">
                  <div className="d-flex align-items-center">
                    <p className="m-0 me-3">5 Star</p>
                    {/* <div
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
                          width: `${(
                            (five / currentProduct?.reviews.length) *
                            100
                          ).toFixed(0)}%`,
                        }}
                      ></div>
                    </div> */}
                    {/* <p className="m-0 ms-3 text-secondary">
                      {((five / currentProduct?.reviews.length) * 100).toFixed(
                        2
                      )}
                      %
                    </p> */}
                  </div>
                  {/* <div className="d-flex align-items-center">
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
                          width: `${(
                            (four / currentProduct?.reviews.length) *
                            100
                          ).toFixed(0)}%`,
                        }}
                      ></div>
                    </div>
                    <p className="m-0 ms-3 text-secondary">
                      {((four / currentProduct?.reviews.length) * 100).toFixed(
                        2
                      )}
                      %
                    </p>
                  </div> */}
                  {/* <div className="d-flex align-items-center">
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
                          width: `${(
                            (three / currentProduct?.reviews.length) *
                            100
                          ).toFixed(0)}%`,
                        }}
                      ></div>
                    </div>
                    <p className="m-0 ms-3 text-secondary">
                      {((three / currentProduct?.reviews.length) * 100).toFixed(
                        2
                      )}
                      %
                    </p>
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
                          width: `${(
                            (two / currentProduct?.reviews.length) *
                            100
                          ).toFixed(0)}%`,
                        }}
                      ></div>
                    </div>
                    <p className="m-0 ms-3 text-secondary">
                      {((two / currentProduct?.reviews.length) * 100).toFixed(
                        2
                      )}
                      %
                    </p>
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
                          width: `${(
                            (one / currentProduct?.reviews.length) *
                            100
                          ).toFixed(0)}%`,
                        }}
                      ></div>
                    </div>
                    <p className="m-0 ms-3 text-secondary">
                      {((one / currentProduct?.reviews.length) * 100).toFixed(
                        2
                      )}
                      %
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            {currentProduct.reviews.length > 0 &&
              [...Array(!allReviews ? currentProduct.reviews.length : currentProduct.reviews.length)].map((e, index) => {
                return (
                  <div key={index}>
                    <Reviews review={currentProduct?.reviews[index]} />
                  </div>
                );
              }
            )}
            {!allReviews && currentProduct?.reviews.length > 4 ? (
              <Link
                to={`/product/${id}/allReviews`}
                className="text-decoration-none"
              >
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
          <div className="col-lg-5 col-sm-12">
            <AddReview id={id} />
          </div>
        </div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default ProductReview;
