import React from "react";
import "./Header.css";

export const Header = ({ setLeadToReport, setIsLogIn }) => {
  const backToMainPage = () => {
    setLeadToReport(false);
  };

  const askMeIfIamSure = () => {
    document.querySelector(".youSureBubble").style.display = "block";
  };
  const notSure = () => {
    document.querySelector(".youSureBubble").style.display = "none";
  };

  const logOut = () => {
    localStorage.clear();
    setIsLogIn(false);
    window.location.reload(true);
  };
  return (
    <nav className="navbar navbar-dark paddingNav">
      <div className="container-fluid">
        <h1 className="navbar-brand">Interviews Reports</h1>
        <form className="d-flex">
          <button
            className="btn btn-light "
            type="button"
            onClick={backToMainPage}
          >
            Candidates
          </button>
          <button
            className="btn btn-light "
            type="button"
            onClick={askMeIfIamSure}
          >
            Log Out
          </button>
          <div className="youSureBubble">
            <p>Are you sure?</p>
            <div className="yesNoButtonDiv">
              <button
                className="btn btn-light "
                type="button"
                onClick={notSure}
              >
                No
              </button>
              <button className="btn btn-light " type="button" onClick={logOut}>
                Yes
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};
