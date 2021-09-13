import "./ReportHeader.css";
import React from "react";

export const ReportHeader = ({ candidates, catchId }) => {
  var component;
  

  component = candidates.map((candidat) => {
    
    if (catchId === candidat.id) {
      const dateOfBirth = new Date(candidat.birthday);
      const y = dateOfBirth.getFullYear();
      const m = dateOfBirth.getMonth() + 1;
      const d = dateOfBirth.getDate();
      
      return (
        <div className="reportHeader">
          <img
            src="./avatar.png"
            alt="bla"
          ></img>
          <div className="infoDiv">
            <div className="nameEmail">
              <p>{candidat.name}</p>
              <p>{candidat.email}</p>
            </div>
            <div className="birthEducation">
              <p>{`Date of birth:${d}.${m}.${y}`}</p>
              <p>{candidat.education}</p>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  });
  return <div>{component}</div>;
};
