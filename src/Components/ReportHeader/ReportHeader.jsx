import "./ReportHeader.css";
import React from "react";

export const ReportHeader = ({ candidates, catchId }) => {
    var component;
    let result;
    // console.log(candidates)
    component = candidates.map((candidat) => {
        //console.log(candidat)
        if (catchId === candidat.id) {
            const dateOfBirth = new Date(candidat.birthday);
            const y = dateOfBirth.getFullYear();
            const m = dateOfBirth.getMonth() + 1;
            const d = dateOfBirth.getDate();
            //console.log(`Date of birth:${d}.${m}.${y}`)
            return (<div className="reportHeader">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="bla"></img>
                <div className="nameEmail">
                    <p>{candidat.name}</p>
                    <p>{candidat.email}</p>
                </div>
                <div className="birthEducation">
                    <p>{`Date of birth:${d}.${m}.${y}`}</p>
                    <p>{candidat.education}</p>
                </div>
            </div>)
        }
        console.log(result)
        return (null);
    })
    return (
        <div>
            {component}
        </div>)

}
