import "./CandidateCard.css";
import React from "react";
import { Link } from "react-router-dom";

export const CandidateCard = ({ candidate }) => {
  return (
    <Link to={`/candidates/${candidate.id}`} className="aLink">
      <div className="singleElUserCard" key={candidate.id}>
        <img src="./avatar.png" alt="bla" />
        <p className="firstName">{candidate.name} </p>
        <div className="info">
          <p>{candidate.email} </p>
        </div>
      </div>
    </Link>
  );
};
