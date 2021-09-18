import React from "react";
import "./Header.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  let history = useHistory();
  let location = useLocation();


  const [show, setShow] = useState(false);
  

  const handleCloseBubble = () => setShow(false);
  const handleShowBubble = () => setShow(true);
  const handleShowButton = () => {
    history.push("/candidates");
  };



  const logOut = () => {
    localStorage.clear();
  };

  var button = null;
  if (location.pathname === "/candidates") {
    button = (
      <Link to="/reportsAdministration" className="btn btn-light linkHover">
        Administration report
      </Link>
    );
  } else if (location.pathname === "/reportsAdministration") {
    button = (
      <button className="btn btn-light linkHover" onClick={handleShowButton}>
        Candidates
      </button>
    );
  } else {
    button=<div>
      <button className="btn btn-light linkHover" onClick={handleShowButton} style= {{"margin-right": "15px"}}>
        Candidates
      </button>
      <Link to="/reportsAdministration" className="btn btn-light linkHover">
        Administration report
      </Link>
    </div>;
  }
  return (
    <nav className="navbar navbar-dark paddingNav">
      <div className="container-fluid">
        <h1 className="navbar-brand">Interviews Reports</h1>
        <form className="d-flex">
          {button}

          <button
            className="btn btn-light "
            type="button"
            onClick={handleShowBubble}
          >
            Log Out
          </button>
          <div
            className="youSureBubble"
            style={{ display: show ? "block" : "none" }}
          >
            <p>Are you sure?</p>
            <div className="yesNoButtonDiv">
              <button
                className="btn btn-light yesNo"
                type="button"
                onClick={handleCloseBubble}
              >
                No
              </button>
              <Link
                onClick={logOut}
                to="/login"
                className="btn btn-light linkHover yesNo"
              >
                Yes
              </Link>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};
