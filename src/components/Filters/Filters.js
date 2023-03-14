import React from "react";
import "./filters.css";

const Filters = () => {
  return (
    <div className="filter_card">
      <p>Filters</p>
      <div className="divider" />
      <div className="filter-cat">
        <p>Category</p>
        <label>
          <input
            type="radio"
            name="bestSeller"
            id="bestSeller"
            checked={false}
          />
          Best Seller
        </label>
        <label>
          <input
            type="radio"
            name="latestUploads"
            id="latestUploads"
            checked={false}
          />
          latestUploads
        </label>
        <label>
          <input
            type="radio"
            name="recommendations"
            id="recommendations"
            checked={false}
          />
          Recommendations
        </label>
      </div>
      <div className="divider" />
      <div className="filter-cat">
        <p>Condition</p>
        <label>
          <input type="radio" name="new" id="new" checked={false} />
          New
        </label>
        <label>
          <input type="radio" name="seconds" id="seconds" checked={false} />
          Seconds
        </label>
      </div>
      <div className="divider" />
      <div className="filter-price">
        <p>Price</p>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Min"
        />
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Max"
        />
        <a href="#" className="btn btn-primary">
          Submit
        </a>
      </div>
      <div className="divider" />
      <div className="filter-cat">
        <p>Other</p>
        <label>
          <input
            type="radio"
            name="readystock"
            id="readystock"
            checked={false}
          />
          Ready Stock
        </label>
        <label>
          <input type="radio" name="preorder" id="preorder" checked={false} />
          Pre Order
        </label>
      </div>
    </div>
  );
};

export default Filters;
