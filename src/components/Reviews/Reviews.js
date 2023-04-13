import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="py-4 mt-3 border border-1 rounded-2 d-flex flex-column p-3 bg-light align-items-center">
      <div className="container m-0 p-0 ">
        <div className="container d-flex flex-column gap-1 m-0 p-0 align-items-center">
          <p className="m-0 fw-semibold">{review.name}</p>
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
        </div>
      </div>
      <p className="m-0 mt-3" style={{ fontSize: "14px" }}>
        {review.comment}
      </p>
    </div>
  );
};

export default Reviews;
