import React from "react";

const Reviews = ({review}) => {
  return (
    <div className="border-bottom py-4 mt-3">
      <div className="container d-flex m-0 p-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle"
          style={{ height: "45px" }}
          alt="Avatar"
        />
        <div className="container d-flex flex-column gap-1">
          <p className="m-0 fw-semibold">{review.name}</p>
          <div className="rating d-flex gap-1">
            {[...Array(5)].map((star, index) => {
              return (
                <span key={index} className="star" style={{ color: index < review.rating ? "orange" : "gray" }}>
                  &#9733;
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <p className="m-0 mt-3" style={{ fontSize: "16px" }}>
        {review.comment}
      </p>
    </div>
  );
};

export default Reviews;
