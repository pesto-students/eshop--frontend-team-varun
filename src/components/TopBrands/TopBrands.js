import React from "react";
import "./topBrands.css";
import { brands } from "../Constants/constants";
import Marquee from "react-fast-marquee";

const TopBrands = () => {
  return (
    <div className="top_brands">
      <div className="title_brand">
        <p>Top Brands</p>
      </div>
      <Marquee className="brands_img" gradient={false}>
        {brands.map((b) => (
          <div className="mx-4">
            <img src={b} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;
