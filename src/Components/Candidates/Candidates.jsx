import React from "react";
import "./Candidates.css";
import { Search } from "../Search/Search";
import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { CandidateCard } from "../CandidateCard/CandidateCard";

export const Candidates = ({ 
  setLeadToReport,
  candidates,
  setCatchId,
  catchId
}) => {
  let history = useHistory();
  const [search, setSearchTerm] = useState("");

  if (candidates === "jwt expired") {
    localStorage.clear();
    history.push('/login')
  }
  let mappingTheCandidates = candidates
    .filter((candid) => {
      let result = null;
      if (search === "") {
        result = candid;
      } else if (candid.name.toLowerCase().includes(search.toLowerCase())) {
        result = candid;
      }
      return result;
    })
    .map((candidate, index) => {
      return (
        <CandidateCard
          setLeadToReport={setLeadToReport}
          key={index}
          setCatchId={setCatchId}
          candidate={candidate}
          catchId={catchId}
        />
      );
    });

  return (
    <Fragment>
      <Search setSearchTerm={setSearchTerm} />
      <div className="containerMain">{mappingTheCandidates}</div>
    </Fragment>
  );
};
