import React, { useState } from "react";
import "./searchBar.css";
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = data.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

  return (
    <div className="search">
      <div className="loc">
        <img src="../assets/location.svg" alt="" />
        <p>Surat, Gujarat</p>
      </div>
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          // onChange={handleFilter}
        />
        {filteredData.length === 0 ? (
          <img src="../assets/search.svg" alt="" />
        ) : (
          // <CloseIcon id="clearBtn" onClick={clearInput} />
          // <CloseIcon id="clearBtn" />
          <>d</>
        )}
      </div>
      <button className="cat_btn">Category</button>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
