import React from "react";
import ReactStars from "react-rating-stars-component";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddReview.css";
import { addReview } from "../../Redux/Actions/reviewActions";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddReview = ({ id }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const { isAuthenthicated, currentUser } = useSelector((state) => state.user);
  const name = currentUser?.firstname + " " + currentUser?.lastname;
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleAddReview = () => {
    if (isAuthenthicated === false) {
      navigate("/signin");
    } else {
      addReview(id, name, rating, review);
    }
  };

  return (
    <div className="container-fluid">
      <p className="m-0 fw-semibold fs-4 p-0">Add Your Review</p>
      <form className="mb-3">
        <textarea
          className="form-control mt-3 mb-2 shadow-none border border-secondary-subtle"
          id="review"
          rows="3"
          placeholder="Your Review"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={34}
          isHalf={false}
          emptyIcon={<FontAwesomeIcon icon={faStar} />}
          halfIcon={<FontAwesomeIcon icon={faStarHalfStroke} />}
          fullIcon={<FontAwesomeIcon icon={faStar} />}
          activeColor="#FFA500"
        />
        <button
          type="Submit"
          className="btn text-nowrap btn-md px-5 mt-4"
          style={{
            backgroundColor: "#52057B",
            color: "white",
          }}
          onClick={handleAddReview}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
