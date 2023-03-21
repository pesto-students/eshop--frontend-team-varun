import React from "react";
import "./dealcards.css";
const Dealcards = (props) => {
  return (
    <div className="col">
      <div class="d-flex gap-2 col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1 h-100">
        <div className="d-flex justify-content-center align-items-center pt-4 card border border-2">
          <div class="w-50 h-100 d-flex justify-content-center align-items-center">
            <img
              src={props.deall.icon}
              className="card-img-top img-thumbnail"
              alt="..."
            />
          </div>

          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <p className="card-title">{props.deall.title}</p>

            <div className="price-sec w-100">
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
