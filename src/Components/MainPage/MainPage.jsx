import React, { Fragment } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";

export const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <Candidates />
    </Fragment>
  );
};
