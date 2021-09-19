import React, { Fragment, useState, useEffect } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import { CandidatesFetch } from "../../Services/Services";

export const MainPage = ({ setIsLoading }) => {
  let history = useHistory();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    CandidatesFetch().then((data) => {
      setCandidates(data);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  if (
    candidates === "jwt expired" ||
    candidates === "jwt malformed" ||
    candidates === "invalid token"
  ) {
    localStorage.clear();
    history.push("/login");
    window.location.reload(true);
  }

  return (
    <Fragment>
      <Header />
      <Candidates candidates={candidates} />
      <Footer />
    </Fragment>
  );
};
