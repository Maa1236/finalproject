import React from "react";
import "./Search.css"

export const Search = () => {
  return (
    <div className="navbar borderBottom">
      <div className="container-fluid">
        <p>Candidates</p>
        <form className="d-flex formBorder">
          <i className="material-icons">search</i>
          <input
            className="inputWithoutBorder "
            type="search"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};
