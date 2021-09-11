import React from "react";
import "./CandidateReport.css";
import { ReportHeader } from "../ReportHeader/ReportHeader";
import { ReportTable } from "../ReportTable/ReportTable";
import { Fragment } from "react";


export const CandidateReport = ({ candidates, catchId }) => {
    return (
        <Fragment>
            <ReportHeader catchId={catchId} candidates = {candidates} />
            <ReportTable />
        </Fragment>

    )
}