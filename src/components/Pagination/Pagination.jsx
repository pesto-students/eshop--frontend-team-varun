import React, { useEffect, useState } from "react";
import "../Pagination/Pagination.css";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "Prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "Next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <nav aria-label="Page navigation example">
        <div class="pagination d-flex gap-3">
          <div class="col">
            <div
              class="py-2 px-3 border border-1 rounded"
              style={{ color: "#52057B", cursor: "pointer" }}
              onClick={() => onButtonClick("Prev")}
            >
              Prev
            </div>
          </div>

          <div class="row">
            {new Array(numberOfButtons).fill("").map((element, index) => (
              <div class="col mx-2 p-0">
                <div
                  class={`py-2 px-3 border border-1 rounded ${
                    index + 1 === counter ? "active" : "unActive"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setCounter(index + 1)}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div class="col">
            <div
              class=" py-2 px-3 border border-1 rounded"
              style={{ color: "#52057B", cursor: "pointer" }}
              onClick={() => onButtonClick("Next")}
            >
              Next
            </div>
          </div>
        </div>
      </nav>

      {/* <button className="btn btn-primary" onClick={() => onButtonClick("Prev")}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={() => onButtonClick("Next")}>
        Next
      </button> */}
    </div>
  );
};

export default Pagination;
