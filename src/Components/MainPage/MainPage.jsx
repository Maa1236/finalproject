import React, { Fragment, useState, useEffect } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { CandidateReport } from "../CandidateReport/CandidateReport";
import { Loader } from "../Loader/Loader";

export const MainPage = ({ setIsLogIn }) => {
  const [leadToReport, setLeadToReport] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [catchId, setCatchId] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogIn(true);
      setIsLoading(false)
    }
    fetch("http://localhost:3333/api/candidates", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }, [setIsLogIn]);
  console.log(candidates);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogIn(true);
      setIsLoading(false)
    }
    fetch("http://localhost:3333/api/reports", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setReports(data));
  }, [setIsLogIn]);
  console.log(reports);

  if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Header setLeadToReport={setLeadToReport} setIsLogIn={setIsLogIn}/>
      {leadToReport ? (
        <CandidateReport
          catchId={catchId}
          candidates={candidates}
          reports={reports}
        />
      ) : (
        <Candidates
          setCatchId={setCatchId}
          candidates={candidates}
          setIsLogIn={setIsLogIn}
          setLeadToReport={setLeadToReport}
        />
      )}
      <Footer />
    </Fragment>
  );
};
