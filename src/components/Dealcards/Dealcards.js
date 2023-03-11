import React from "react";
import "./dealcards.css";

const Dealcards = (props) => {
  return (
    <div className="col">
      <div class="d-flex gap-2 col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
        <div className="card border border-2">
          <div>
            <img src={props.deall.icon} className="card-img-top" alt="..." />
          </div>
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
      </div>
    </div>
  );
};

export default Dealcards;
