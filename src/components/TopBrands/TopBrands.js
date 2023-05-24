import React from "react";
import "./topBrands.css";
import Marquee from "react-fast-marquee";

const brands = [
  "../assets/intel.png",
  "../assets/boat.png",
  "../assets/hp.png",
  "../assets/noise.png",
  "../assets/microsoft.png",
  "../assets/dell.png",
  "../assets/sony.png",
  "../assets/bose.png",
  "../assets/samsung.png",
  "../assets/lg.png",
];

const TopBrands = () => {
  return (
    <div className="top_brands">
      <div className="title_brand">
        <p>Top Brands</p>
      </div>
      <Marquee className="brands_img" gradient={false}>
        {brands.map((b, index) => (
          <div key={index} className="mx-4">
            <img src={b} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;
