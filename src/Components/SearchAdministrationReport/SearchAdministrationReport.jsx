import React from "react";
import "./SearchAdministrationReport.css"

export const SearchAdministrationReport = ({ setAdminSearch }) => {
  return (
    <div className="navbar withoutBorderBottom">
      <div className="container-fluid">
        <form className="d-flex formBorder">
          <i className="material-icons">search</i>
          <input
            className="inputWithoutBorder"
            type="search"
            placeholder="Search"
            onChange={(event) => {
                setAdminSearch(event.target.value)
            }}
          ></input>
        </form>
      </div>
    </div>
  );
};



