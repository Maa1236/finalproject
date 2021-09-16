import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { CandidateReport } from "../CandidateReport/CandidateReport";
import { Loader } from "../Loader/Loader";

export const MainPage = ({ setIsLoading, isLoading, setCatchId, catchId }) => {
  const [leadToReport, setLeadToReport] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
 

  useEffect(() => {
    
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
  }, [setIsLoading]);

  useEffect(() => {
   
    fetch("http://localhost:3333/api/reports", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setReports(data));
    setIsLoading(false);
  }, [ setIsLoading]);

  if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Header 
      setLeadToReport={setLeadToReport} 
      />
<Switch>
      {leadToReport ? (
       <Route exact path={`/candidates`}>
        <CandidateReport
          catchId={catchId}
          candidates={candidates}
          reports={reports}
        />
        </Route>
       ) : ( 
        <Candidates
          setCatchId={setCatchId}
          candidates={candidates}
         
        setLeadToReport={setLeadToReport}
        />
       )}
      </Switch>
      <Footer />
    </Fragment>
  );
};
