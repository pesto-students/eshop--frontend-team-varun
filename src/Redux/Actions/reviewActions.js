import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const addReview = async (productId, rating, comment) => {
  
  try {
    const res = await axios.put(
      "http://localhost:4000/api/v1/review",
      {
        rating,
        comment,
        productId,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    toast.success("Review Added");
  } catch (error) {
    toast.error("Something went wrong");
  }
};
