import React from "react";
import "./Pagination.css";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li onClick={previousPage} className={"page-number " + (currentPage === 1 ? "disabled" : "")}>
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              "page-number " + (number === currentPage ? "active" : "")
            }
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className={"page-number " + (currentPage === pageNumbers.length ? "disabled" : "")}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
