import React from "react";
import "./Candidates.css";
import { Search } from "../Search/Search";
import { useEffect, useState } from "react";
import { CandidateCard } from "../CandidateCard/CandidateCard";
import { Fragment } from "react/cjs/react.production.min";

export const Candidates = ({ setIsLogIn }) => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogIn(true);
        }      
    }, [setIsLogIn]);
    console.log(candidates)

    if (candidates === "jwt expired") {
        localStorage.clear()
        setIsLogIn(false);
        window.location.reload(true)  
    }

    let candidateComponent = candidates.map((candidate, index) => {
        return (
            <CandidateCard candidate={candidate} />
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