import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./category.css";

const Category = ({cates}) => {
  return (
    <div className="choice-category">
      <SectionHeader title="Choice Category"/>
      <div className="choice-category-brands d-flex align-items-center gap-5 overflow-x-auto px-5">
        {cates?.map((cat) => (
          <div className="brands">
            <img src={cat.icon} alt="" />
            <p>{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
