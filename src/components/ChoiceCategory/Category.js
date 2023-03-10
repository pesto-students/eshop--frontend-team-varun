import React from "react";
import "./category.css";

const Category = ({cates}) => {
  return (
    <div className="category">
      <div className="brand_title">
        <p>Choice Category</p>
      </div>
      <div className="brands_row">
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
