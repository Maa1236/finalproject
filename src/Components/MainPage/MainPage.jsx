import React, { Fragment, useState, useEffect } from "react";

import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";

export const MainPage = ({ setIsLoading, isLoading, setCatchId, catchId }) => {
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


  if (isLoading) return <Loader />;

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
