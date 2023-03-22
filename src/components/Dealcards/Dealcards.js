import React from "react";
import "./dealcards.css";

const Dealcards = (props) => {
  return (
    <div className="deal-card">
      <div className="deal-image">
        <img src={props.deall.icon} alt="" className="img-fluid" />
      </div>
      <div className="deal-content">
        <p className="deal-title">{props.deall.title}</p>
        <div className="deal-body">
          <h5 className="deal-price mb-0">₹59,990</h5>
          <div className="deal-rating d-flex gap-1 align-items-center">
            <img src="../assets/star.png" alt="" />
            <p className="m-0">4.9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealcards;
