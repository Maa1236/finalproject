import "./App.css";
import { Services } from "./Services/Services";
import { useState } from "react";
import { Login } from "./Components/Login/Login";
import { MainPage } from "./Components/MainPage/MainPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { CandidateReport } from "./Components/CandidateReport/CandidateReport";


function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [catchId, setCatchId] = useState(undefined);
  let history = useHistory();


  async function letMeIn(event) {
    event.preventDefault();
    let data = await Services(inputEmail, inputPassword);
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      history.push('/candidates')
    }
  }

  let token = localStorage.getItem("token");
  if (!token) {
    history.push("/login");
  }

  return (
    <Switch>
      <Route exact path="/candidates">
        <MainPage
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setCatchId={setCatchId}
          catchId={catchId}
        />
      </Route>
      <Route exact path="/candidates/:id">
        <CandidateReport />
      </Route>

      <Route exact path="/login">
        <Login
          setInputEmail={setInputEmail}
          setInputPassword={setInputPassword}
          letMeIn={letMeIn}
        />
      </Route>
      <Redirect from="" to="/candidates" />
    </Switch>
  );
}


export default App;
