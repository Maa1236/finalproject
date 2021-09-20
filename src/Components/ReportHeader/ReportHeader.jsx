import "./ReportHeader.css";
import React from "react";


export const ReportHeader = ({ user}) => {
 
  const dateOfBirth = new Date(user.birthday);
  const y = dateOfBirth.getFullYear();
  const m = dateOfBirth.getMonth() + 1;
  const d = dateOfBirth.getDate();



  return (
    <div className="reportHeader">
      <img
        src="../avatar.png"
        alt="bla"
      ></img>
      <div className="infoDiv">
        <div className="nameEmail">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className="birthEducation">
          <p>{`Date of birth: ${d}.${m}.${y}`}</p>
          <p>{user.education}</p>
        </div>
      </div>
    </div>
  )
};
