import React from "react";
import { Link } from "react-router-dom";
import "./dealcards.css";

const Dealcards = (props) => {
  return (
    <div className="deal-card">
      <Link
        to={`/product/${props.deall._id}`}
        className="text-decoration-none text-dark"
      >
        <div className="deal-image p-2">
          <img
            src={props.deall.images[0].url}
            alt="Not found"
            className="img-fluid "
          />
        </div>
        <div className="deal-content">
          <p className="deal-title">{props.deall.name}</p>
          <div className="deal-body">
            <h5 className="deal-price mb-0">{`₹ ${props.deall.price}`}</h5>
            <div className="deal-rating d-flex gap-1 align-items-center">
              <img src="../assets/star.png" alt="" />
              <p className="m-0">{props.deall.rating}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dealcards;
