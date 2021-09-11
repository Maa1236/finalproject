import React from "react";
import "./Candidates.css";
import { Search } from "../Search/Search";
import { useEffect, useState } from "react";
import { CandidateCard } from "../CandidateCard/CandidateCard";
import { Fragment } from "react/cjs/react.production.min";

export const Candidates = ({ setIsLogIn, setLeadToReport }) => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogIn(true);
        }
        fetch("http://localhost:3333/api/candidates", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.json())
            .then(data => setCandidates(data));
       
    }, [setIsLogIn]);
    console.log(candidates)

    if (candidates === "jwt expired") {
        localStorage.clear()
        setIsLogIn(false);
        window.location.reload(true)  
    }

    let candidateComponent = candidates.map((candidate) => {
        return (
            <CandidateCard candidate={candidate} key={candidate.id} setLeadToReport={setLeadToReport}/>
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