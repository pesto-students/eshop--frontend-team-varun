import React from 'react';
import ReactStars from "react-rating-stars-component";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./AddReview.css"
import TextField from './../TextField/TextField';
import { addReview } from '../../Redux/Actions/reviewActions';

const AddReview = ({id}) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className='container ms-5 '>
            <p className="m-0 fw-semibold fs-4 p-0">Add Your Review</p>
            <form className='mb-3'>
                <TextField label="Name" idfor="name" type="text" hint="Your Name"/>
                <TextField label="Email" idfor="email" type="email" hint="Your Email"/>
                <TextField label="Review" idfor="review" type="textarea" hint="Your Review" />
                <p className='mt-4'>Ratings <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={34}
                    isHalf={true}
                    emptyIcon={<FontAwesomeIcon icon={faStar} />}
                    halfIcon={<FontAwesomeIcon icon={faStarHalfStroke} />}
                    fullIcon={<FontAwesomeIcon icon={faStar} />}
                    activeColor="#ffd700"
                /></p>
                <button
                    type="button"
                    className="btn text-nowrap btn-md px-5 mt-4"
                    style={{
                        backgroundColor: "#52057B",
                        color: "white",
                    }}
                onClick={()=>{
                    addReview(id, 4, "Very Nice Mobile");
                }}
                >
                    Submit
                </button>
            </form>

        </div>
    )
}

export default AddReview