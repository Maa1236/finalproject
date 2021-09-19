import React, { Fragment, useState, useEffect } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { useHistory } from "react-router-dom";

export const MainPage = ({ setIsLoading, setCatchId, catchId }) => {

  let history = useHistory();
  const [candidates, setCandidates] = useState([]);

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

  if (candidates === "jwt expired" || candidates === "jwt malformed" || candidates === "invalid token") {
    localStorage.clear()
    history.push('/login')
    window.location.reload(true)
}

  return (
    <Fragment>
      <Header 
      />
        <Candidates
          setCatchId={setCatchId}
          candidates={candidates}
          catchId={catchId}
        />
      <Footer />
    </Fragment>
  );
};