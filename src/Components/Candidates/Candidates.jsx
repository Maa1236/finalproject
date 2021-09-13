import React from "react";
import "./Candidates.css";
import { Search } from "../Search/Search";
import { useState } from "react";

import { CandidateCard } from "../CandidateCard/CandidateCard";
import { Fragment } from "react/cjs/react.production.min";

export const Candidates = ({ setIsLogIn, setLeadToReport, candidates, setCatchId }) => {

    const [search, setSearchTerm] = useState("");
    console.log(candidates)
    if (candidates === "jwt expired") {
        localStorage.clear()
        setIsLogIn(false);
        window.location.reload(true)
    }
    let mappingTheCandidates = candidates.filter((candid) => {
        let result = null;
        if (search === "") {
            result = candid;
        } else if (candid.name.toLowerCase().includes(search.toLowerCase())) {
            result = candid;
        } return result;
    }).map((candidate, index) => {

        return (

            <CandidateCard
                setLeadToReport={setLeadToReport}
                key={index}
                setCatchId={setCatchId}
                candidate={candidate} />
        );
    });

    return (
        <Fragment>
            <Search setSearchTerm={setSearchTerm} />
            <div className="containerMain">
                {mappingTheCandidates}
            </div>

        </Fragment>
    )
}
