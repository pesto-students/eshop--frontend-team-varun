import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./category.css";

const Category = ({ cates }) => {
  return (
    <div className="choice-category">
      <SectionHeader title="Choice Category" />
      <div className="choice-category-brands d-flex align-items-center gap-5 overflow-x-auto">
        {cates?.map((cat, index) => (
          <div key={index} className="brands">
            <div className="brand-img">
              <img src={cat.icon} alt="" />
            </div>
            <p>{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
