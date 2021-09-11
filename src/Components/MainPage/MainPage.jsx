import React, { Fragment } from "react";
import "./MainPage.css";
import { Header } from "../Header/Header";
import { Candidates } from "../Candidates/Candidates";
import { Footer } from "../Footer/Footer";

export const MainPage = ({setIsLogIn}) => { 
  return (
    <Fragment>
      <Header />
      <Candidates setIsLogIn={setIsLogIn} />
      <Footer/>
    </Fragment>
  );
};
