import "./App.css";
import { Services } from "./Services/Services";
import { useState,useEffect } from "react";
import { Login } from "./Components/Login/Login";
import { MainPage } from "./Components/MainPage/MainPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { CandidateReport } from "./Components/CandidateReport/CandidateReport";
import {ReportsAdministration} from "./Components/ReportsAdministration/ReportsAdministration"


function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [catchId, setCatchId] = useState(undefined);
  const [reports, setReports] = useState([]);
  let history = useHistory();


  useEffect(() => {
    console.log("use efect odradio")
    fetch("http://localhost:3333/api/reports", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }) 
      .then((response) =>  response.json())
      .then((reporti) => { 
        if(typeof reporti !== "string") {
    
            return reporti.map((user) => {
              return {
                id: user.id,
                candidateId: user.candidateId,
                candidateName: user.candidateName,
                companyId: user.companyId,
                companyName: user.companyName,
                interviewDate: user.interviewDate,
                phase: user.phase,
                status: user.status,
                note: user.note,
              }
            })
          } else {
            localStorage.clear();
            history.push('/login')
          }
      })
      .then((data) => setReports(data))
  }, [history]);

console.log("51. linija u appu, reports:")
console.log(reports)

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
        <CandidateReport reports={reports}/>
      </Route>

      <Route exact path="/reportsAdministration">
        <ReportsAdministration reports={reports} />
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
