import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="container d-flex flex-column gap-1 m-0 p-0 align-items-center bg-light py-4 border border-1 rounded-2">
      <p className="m-0 fw-semibold">{review.name || "User"}</p>
      <div className="rating d-flex gap-1" style={{ fontSize: "10px" }}>
        {[...Array(5)].map((star, index) => {
          return (
            <span
              key={index}
              className="star"
              style={{ color: index < review.rating ? "orange" : "gray" }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p className="m-0 mt-3" style={{ fontSize: "14px" }}>
        {review.comment}
      </p>
    </div>
  );
};

export default Reviews;
