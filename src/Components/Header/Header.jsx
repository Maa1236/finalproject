import React from "react";
import "./Header.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  let history = useHistory();
  let local = useLocation();


  const [show, setShow] = useState(false);
  

  const handleCloseBubble = () => setShow(false);
  const handleShowBubble = () => setShow(true);
  const handleShowButton = () => {
    history.push("/candidates");
  };



  const logOut = () => {
    
    localStorage.clear();
  };

  const goToAdmin = () => {
    history.push("/reportsAdministration")
    history.go('/reportsAdministration');
   
  }

  var button = null;
  if (local.pathname === "/candidates") {
    button = (
     
      <button onClick={goToAdmin} className="btn btn-light linkHover">Administration Report</button>
    );
  } else if (local.pathname === "/reportsAdministration") {
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
    
      <button onClick={goToAdmin} className="btn btn-light linkHover">Administration Report</button>
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
