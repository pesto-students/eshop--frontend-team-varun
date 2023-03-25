import React, { useState } from "react";
import "./filters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ childToParent }) => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <div className="filter-card text-start px-3 pb-4 mb-3">
      <div className="filter-card-title mt-4 mb-3 d-flex align-items-center justify-content-between me-3">
        <p className="mb-0 p-0 fw-semibold fs-5">Filters</p>
        {category || minPrice > 0 || maxPrice > 0 ? (
          <FontAwesomeIcon
            icon={faClose}
            className="bg-secondary p-2 text-white"
            onClick={() => {
              setCategory("");
              setMinPrice(0);
              setMaxPrice(0);
              childToParent("", 0, 9999999);
            }}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="divider" />
      <div className="filters-category d-flex flex-column">
        <p className="m-0 my-3 fw-semibold fs-6">Category</p>
        <label>
          <input
            className="me-2 mb-3"
            type="radio"
            name="bestSeller"
            id="bestSeller"
            checked={category === "Mobile"}
            onClick={() => {
              setCategory("Mobile");
              childToParent("Mobile", 0, 9999999);
            }}
          />
          Mobile
        </label>
        <label>
          <input
            className="me-2 mb-3"
            type="radio"
            name="latestUploads"
            id="latestUploads"
            checked={category === "Television"}
            onClick={() => {
              setCategory("Television");
              childToParent("Television", 0, 9999999);
            }}
          />
          Television
        </label>
        <label>
          <input
            className="me-2 mb-3"
            type="radio"
            name="recommendations"
            id="recommendations"
            checked={category === "Laptop"}
            onClick={() => {
              setCategory("Laptop");
              childToParent("Laptop", 0, 9999999);
            }}
          />
          Laptop
        </label>
      </div>
      <div className="divider" />
      <div className="filters-condition d-flex flex-column">
        <p className="m-0 my-3 fw-semibold fs-6">Condition</p>
        <label>
          <input
            className="me-2 mb-3"
            type="radio"
            name="new"
            id="new"
            checked={false}
          />
          New
        </label>
        <label>
          <input
            className="me-2 mb-3"
            type="radio"
            name="seconds"
            id="seconds"
            checked={false}
          />
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
          style={{ marginBottom: "12px" }}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Max"
          style={{ marginBottom: "12px" }}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button
          className="btn btn-primary border-0 mb-4"
          style={{ backgroundColor: "#52057B" }}
          onClick={() => childToParent(category, minPrice, maxPrice)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Filters;
