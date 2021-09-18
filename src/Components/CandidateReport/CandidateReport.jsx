import React from "react";
import "./CandidateReport.css";
import { ReportHeader } from "../ReportHeader/ReportHeader";
import { ReportTable } from "../ReportTable/ReportTable";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";


export const CandidateReport = ({ catchId }) => {

  const id = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {

    fetch(`http://localhost:3333/api/candidates/${id.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [catchId, id.id]);

  return (
    <Fragment>
      <Header />
      <ReportHeader user={user} />
      <ReportTable id={id.id} />
      <Footer />
    </Fragment>
  );
}
