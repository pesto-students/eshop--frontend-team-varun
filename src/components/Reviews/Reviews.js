import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <div className="border-bottom py-4">
      <div className="container d-flex m-0 p-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle"
          style={{ height: "45px" }}
          alt="Avatar"
        />
        <div className="container d-flex flex-column gap-1">
          <p className="m-0 fw-semibold">Pablo Kahsandra</p>
          <div className="rating d-flex gap-1">
            {[...Array(5)].map((star) => {
              return (
                <span className="star" style={{ color: "orange" }}>
                  &#9733;
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <p className="m-0 mt-3" style={{ fontSize: "16px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        blanditiis repellendus nemo fugiat. Ipsum architecto pariatur
        exercitationem id nemo corporis!
      </p>
    </div>
  );
};

export default Reviews;
