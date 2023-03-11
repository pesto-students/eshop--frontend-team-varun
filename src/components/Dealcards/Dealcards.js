import React from "react";
import "./dealcards.css";

const Dealcards = (props) => {
  return (
    <div className="card">
      <img src={props.deall.icon} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-title">{props.deall.title}</p>
        <div className="price-sec">
          <h5>{props.deall.price}</h5>
          <span className="rating">
            <img src="../assets/star.png" alt="" />
            <p>{props.deall.ratings}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dealcards;
