import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="app">
      <div
        id="carouselExampleIndicators"
        className="carousel slide pt-5"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="text-i">
              <h2 className="price">Under $1,999</h2>
              <p className="desc">Top rated Electronics & accessories</p>
              <button type="button" className="btn btn-light">
                Buy Now
              </button>
            </div>
            <img src="../assets/image1.png" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <div className="text-i">
              <h2 className="price">Under $1,999</h2>
              <p className="desc">Top rated Electronics & accessories</p>
              <button type="button" className="btn btn-light">
                Buy Now
              </button>
            </div>
            <img src="../assets/image1.png" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <div className="text-i">
              <h2 className="price">Under $1,999</h2>
              <p className="desc">Top rated Electronics & accessories</p>
              <button type="button" className="btn btn-light">
                Buy Now
              </button>
            </div>
            <img src="../assets/image1.png" className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <img className="prev-icon" src="../assets/prev.svg" alt="" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <img className="next-icon" src="../assets/next.svg" alt="" />
        </button>
      </div>

    </div>
  );
};

export default Carousel;
