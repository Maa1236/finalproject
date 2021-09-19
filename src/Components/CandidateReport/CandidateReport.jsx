import React from "react";
import "./CandidateReport.css";
import { ReportHeader } from "../ReportHeader/ReportHeader";
import { ReportTable } from "../ReportTable/ReportTable";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ReportIDFetch } from "../../Services/Services";

export const CandidateReport = () => {
  const id = useParams();
  console.log(id)
  const [user, setUser] = useState({});

  useEffect(() => {
    ReportIDFetch(id.id)
      .then((data) => setUser(data));
  }, [id.id]);

  return (
    <Fragment>
      <Header />
      <ReportHeader user={user} />
      <ReportTable id={id.id} />
      <Footer />
    </Fragment>
  );
};
