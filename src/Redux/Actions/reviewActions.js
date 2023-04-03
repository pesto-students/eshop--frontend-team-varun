import axios from "axios";

export const addReview = async (productId, rating, comment) => {
  try {
    console.log(localStorage.getItem("token")); 
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

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
