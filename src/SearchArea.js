import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form  >
        <input type="text" />
        <button type="submit">Search</button>
        <select defaultValue="Sort" >
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;