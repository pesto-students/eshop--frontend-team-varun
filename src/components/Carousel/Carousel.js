import React from "react";
import "./carousel.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselSlider = () => {
  return (
    <div className="carousel-slider">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../assets/slider4.png" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src="../assets/slider4.png" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src="../assets/slider4.png" className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev pe-5"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon prev-button"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span> */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ height: "32px" }}
            className="left-icon"
          />
        </button>
        <button
          className="carousel-control-next ps-5"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          {/* <span
            className="carousel-control-next-icon next-button"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span> */}
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ height: "32px" }}
            className="right-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
