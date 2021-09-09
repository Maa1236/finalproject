import './App.css';
import {Services} from './Services/Services';
import {Fragment,useState} from 'react';
import {Login} from './Components/Login/Login';
import {MainPage} from './Components/MainPage/MainPage';

function App() {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");


  async function letMeIn(event) {
    event.preventDefault();
    let data = await Services(inputEmail, inputPassword);
    console.log(data.accessToken);
    localStorage.setItem("token", data.accessToken)
    //console.log(localStorage.getItem("token"));
  }

 
  return (
    <Fragment>
      <Login 
      setInputEmail={setInputEmail}
      setInputPassword={setInputPassword}
      letMeIn={letMeIn}
      />
      <MainPage />
    </Fragment>
    
   
  );
}

export default App;
