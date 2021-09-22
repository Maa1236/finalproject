import "./App.css";
import { useEffect, useState } from "react";
import { Login } from "./Components/Login/Login";
import { MainPage } from "./Components/MainPage/MainPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { CandidateReport } from "./Components/CandidateReport/CandidateReport";
import { Loader } from "./Components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();
  let token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(false);
    if (!token) {
      history.push("/login");
    }
  }, [history, token]);



  if (isLoading) return <Loader />;

  return (
    <Switch>
      <Route exact path="/candidates">
        <MainPage setIsLoading={setIsLoading} />
      </Route>

      <Route exact path="/candidates/:id">
        <CandidateReport setIsLoading={setIsLoading} isLoading={isLoading} />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect from="" to="/candidates" />
    </Switch>
  );
}

export default App;
