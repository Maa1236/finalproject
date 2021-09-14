import React, { Fragment, useState, useEffect } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { CandidateReport } from "../CandidateReport/CandidateReport";
import { Loader } from "../Loader/Loader";

export const MainPage = ({ setIsLogIn, setIsLoading, isLoading }) => {
  const [leadToReport, setLeadToReport] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [catchId, setCatchId] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogIn(true);
    }
    fetch("http://localhost:3333/api/candidates", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
        setIsLoading(false);
      });
  }, [setIsLogIn, setIsLoading]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogIn(true);
    }
    fetch("http://localhost:3333/api/reports", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setReports(data));
    setIsLoading(false);
  }, [setIsLogIn, setIsLoading]);

  if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Header setLeadToReport={setLeadToReport} setIsLogIn={setIsLogIn} />
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
