import React, { useState } from "react";
import "./filters.css";

const Filters = ({childToParent}) => {
  const [category, setCategory] = useState("");

  return (
    <div className="filter-card text-start px-3 pb-4">
      <div className="filter-card-title mt-4 mb-3">
        <p className="mb-0 p-0 fw-semibold fs-5">Filters</p>
      </div>
      <div className="divider" />
      <div className="filters-category d-flex flex-column">
        <p className="m-0 my-3 fw-semibold fs-6">Category</p>
        <label>
          <input className="me-2 mb-3"
            type="radio"
            name="bestSeller"
            id="bestSeller"
            checked={category === "Mobile"}
            onClick={()=> {
              setCategory("Mobile");
              childToParent("Mobile");
            }}
          />
          Mobile
        </label>
        <label>
          <input className="me-2 mb-3"
            type="radio"
            name="latestUploads"
            id="latestUploads"
            checked={category === "Television"}
            onClick={()=> {
              setCategory("Television");
              childToParent("Television");
            }}
          />
          Television
        </label>
        <label>
          <input className="me-2 mb-3"
            type="radio"
            name="recommendations"
            id="recommendations"
            checked={category === "Laptop"}
            onClick={()=> {
              setCategory("Laptop");
              childToParent("Laptop");
            }}
          />
          Laptop
        </label>
      </div>
      <div className="divider" />
      <div className="filters-condition d-flex flex-column">
        <p className="m-0 my-3 fw-semibold fs-6">Condition</p>
        <label>
          <input className="me-2 mb-3" type="radio" name="new" id="new" checked={false} />
          New
        </label>
        <label>
          <input className="me-2 mb-3" type="radio" name="seconds" id="seconds" checked={false} />
          Seconds
        </label>
      </div>
      <div className="divider" />
      <div className="filters-price d-flex flex-column">
        <p className="m-0 my-3 fw-semibold fs-6">Price</p>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Min"
          style={{marginBottom: "12px"}}
        />
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Max"
          style={{marginBottom: "12px"}}
        />
        <a href="/" className="btn btn-primary border-0 mb-4" style={{ backgroundColor: "#52057B" }}>
          Submit
        </a>
      </div>
      <div className="divider" />
      <div className="filters-condition d-flex flex-column">
        <p className="m-0 my-3 fw-semibold fs-6">Other</p>
        <label>
          <input className="me-2 mb-3"
            type="radio"
            name="readystock"
            id="readystock"
            checked={false}
          />
          Ready Stock
        </label>
        <label>
          <input className="me-2" type="radio" name="preorder" id="preorder" checked={false} />
          Pre Order
        </label>
      </div>
    </div>
  );
};

export default Filters;