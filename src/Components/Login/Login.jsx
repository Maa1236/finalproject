import React from "react";
import "./Login.css";
import { useState } from "react";
import { Services } from "../../Services/Services";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  let history = useHistory();

  async function letMeIn(event) {
    event.preventDefault();
    let data = await Services(inputEmail, inputPassword);
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      history.push("/candidates");
    }
  }

  async function letMeInEnterKey(event) {
    if (event.key === 'Enter') {
      let data = await Services(inputEmail, inputPassword);
      if(data.accessToken){
        localStorage.setItem("token", data.accessToken);
        history.push("/candidates");
      }
    }
  }

  return (
    <div className="newClassForCss" click="onclick">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign In</h2>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
          onKeyDown={letMeInEnterKey}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setInputPassword(event.target.value);
          }}
          onKeyDown={letMeInEnterKey}
        />
        <button type="submit" className="btn btn-dark " onClick={letMeIn}>
          Login
        </button>
      </div>
    </div>
  );
};
