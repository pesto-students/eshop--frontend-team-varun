import React from "react";

const Description = ({ currentProduct }) => {
  return (
    <div
      className="border border-secondary-subtle rounded my-4 px-4 py-4 mx-5"
      style={{ background: "white" }}
    >
      <p className="fw-semibold fs-6">Description</p>
      <div className="col">
        <div className="row">
          <div className="col-4 fw-semibold mt-2">Brand</div>
          <div className="col-4 mt-2">{currentProduct?.brand}</div>
        </div>
        <div className="row">
          <div className="col-4 fw-semibold mt-2">Category</div>
          <div className="col-4 mt-2">{currentProduct?.category}</div>
        </div>
        <div className="row">
          <div className="col-4 fw-semibold mt-2">Price</div>
          <div className="col-4 mt-2">{currentProduct?.price}</div>
        </div>
        <div className="row">
          <div className="col-4 fw-semibold mt-2">Rating</div>
          <div className="col-4 mt-2">
            {currentProduct?.rating}
            <span
              className="fa fa-star ms-2"
              style={{ color: "orange" }}
            ></span>
          </div>
        </div>
        <div className="row">
          <div className="col-4 fw-semibold mt-2">Stock</div>
          <div className="col-4 mt-2">{currentProduct?.stock}</div>
        </div>
      </div>
      <hr className="m-0 mt-4" />
      <p className="fw-semibold fs-6 mt-4">About this item</p>
      <p>
        <span className="">{currentProduct?.description}</span>
      </p>
      {/* <ul className="m-0">
        {otherFeatures.map((b) => (
          <li>
            {b.name}: {b.value}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Description;
