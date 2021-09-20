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
import { Loader } from "../Loader/Loader";

export const CandidateReport = ({ setIsLoading, isLoading }) => {

  const idObject = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    ReportIDFetch(idObject.id).then((data) => setUser(data));
    setIsLoading(false);
  }, [idObject.id, setIsLoading]);

  if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Header />
      <ReportHeader user={user} />
      <ReportTable id={idObject.id} />
      <Footer />
    </Fragment>
  );
};
