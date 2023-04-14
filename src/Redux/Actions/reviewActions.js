import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BASE_URL } from "../../Services/helper";

export const addReview = async (productId, name, rating, comment) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/review`,
      {
        rating,
        name,
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
