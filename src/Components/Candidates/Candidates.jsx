import React from "react";
import "./Candidates.css";
import { Search } from "../Search/Search";
import { useEffect, useState } from "react";
import { CandidateCard } from "../CandidateCard/CandidateCard";
import { Fragment } from "react/cjs/react.production.min";

export const Candidates = ({ setIsLogIn, setLeadToReport, candidates, setCatchId }) => {

    if (candidates === "jwt expired") {
        localStorage.clear()
        setIsLogIn(false);
        window.location.reload(true)
    }

    let candidateComponent = candidates.map((candidate) => {
        return (
            <CandidateCard setCatchId= {setCatchId} candidate={candidate} key={candidate.id} setLeadToReport={setLeadToReport} />
        )
    })

    return (
        <Fragment>
            <Search />
            <div className="containerMain">
                {candidateComponent}
            </div>
        </Fragment>
    )
}
