import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  // const askMeIfIamSure = () => {
  //   document.querySelector(".youSureBubble").style.display = "block";
  // };
  // const notSure = () => {
  //   document.querySelector(".youSureBubble").style.display = "none";
  // };
  const [show, setShow] = useState(false);
  const handleCloseBubble = () => setShow(false);
  const handleShowBubble = () => setShow(true);

  const logOut = () => {
    localStorage.clear();
  };
  return (
    <nav className="navbar navbar-dark paddingNav">
      <div className="container-fluid">
        <h1 className="navbar-brand">Interviews Reports</h1>
        <form className="d-flex">
          <Link to="/candidates" className="btn btn-light linkHover">
            Candidates
          </Link>

          <button className="btn btn-light " type="button" onClick={handleShowBubble}>
            Log Out
          </button>
          <div
            className="youSureBubble"
            style={{ display: show ? "block" : "none" }}
          >
            <p>Are you sure?</p>
            <div className="yesNoButtonDiv">
              <button className="btn btn-light yesNo" type="button" onClick={handleCloseBubble}>
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
