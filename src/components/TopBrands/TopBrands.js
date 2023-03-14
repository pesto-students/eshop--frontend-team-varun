import React from "react";
import "./topBrands.css";
import { brands } from "../Constants/constants";

const TopBrands = () => {
  return (
    <div className="top_brands">
      <div className="title_brand">
        <p>Top Brands</p>
      </div>
      <div className="brands_img">
        {brands.map((b) => (
          <img src={b} alt="" />
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
