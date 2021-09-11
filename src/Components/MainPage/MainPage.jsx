import React, { Fragment, useState } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { CandidateReport } from "../CandidateReport/CandidateReport";

export const MainPage = ({ setIsLogIn }) => {
  const [leadToReport, setLeadToReport] = useState(false);

  return (
    <Fragment>
      <Header setLeadToReport={setLeadToReport}/>
      {leadToReport ? (
        <CandidateReport />
      ) : (
        <Candidates setIsLogIn={setIsLogIn} setLeadToReport={setLeadToReport} />
      )}
      <Footer />
    </Fragment>
  );
};
