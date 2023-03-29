import React from "react";
import GradientSVG from "./gradientSVG";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Reviews from "../../components/Reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AddReview from './../AddReview/AddReview';
import "./productReview.css";

const ProductReview = ({ allReviews }) => {
  const idCSS = "hello";
  const percentage = 4.5;
  return (
    <div className={allReviews ? "container-fluid" : "container m-0 p-0 ms-5"} style={{ marginTop: "24px" }}>
      <div className="container w-100 p-0">
        <div className="row p-0">
          <div className="col-lg-7 col-sm-12">
          <p className={`m-0 fw-semibold fs-4 p-0 ${allReviews ? "ms-4" : ""}`}>Reviews (200)</p>
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
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
          <div className="col-lg-5 col-sm-12">
            <AddReview />
          </div>
        </div>

      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default ProductReview;
