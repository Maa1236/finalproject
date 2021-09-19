import "./App.css";
import { useEffect, useState } from "react";
import { Login } from "./Components/Login/Login";
import { MainPage } from "./Components/MainPage/MainPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { CandidateReport } from "./Components/CandidateReport/CandidateReport";
import { Loader } from "./Components/Loader/Loader";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [catchId, setCatchId] = useState(undefined);
  let history = useHistory();

  useEffect(() => {
    setIsLoading(false)
  }, [])

  let token = localStorage.getItem("token");
 
  if (!token) {
    history.push("/login");
  }

  if (isLoading) return <Loader />;

  return (
    <Switch>
      <Route exact path="/candidates">
        <MainPage
          setIsLoading={setIsLoading}
          setCatchId={setCatchId}
          catchId={catchId}
        />
      </Route>
      <Route exact path="/candidates/:id">
        <CandidateReport />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect from="" to="/candidates" />
    </Switch>
  );
}


export default App;