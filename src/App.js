import './App.css';
import {Services} from './Services/Services';
import {Fragment,useEffect,useState} from 'react';
import {Login} from './Components/Login/Login';
import {MainPage} from './Components/MainPage/MainPage';

function App() {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);


  async function letMeIn(event) {
    event.preventDefault();
    let data = await Services(inputEmail, inputPassword);
    
    if(data.accessToken){
      localStorage.setItem("token", data.accessToken)
      setIsLogIn(true);
    }
  }

  useEffect(()=>{
    if(localStorage.getItem("token")){
        setIsLogIn(true);
    }
  },[]);
  
    //localStorage.clear()
  // console.log(localStorage.getItem("token"));
  // console.log(isLogIn)
 
  return (
    <Fragment>
      {isLogIn ? <MainPage setIsLogIn={setIsLogIn} /> : <Login 
      setInputEmail={setInputEmail}
      setInputPassword={setInputPassword}
      letMeIn={letMeIn}
      />} 
    </Fragment>   
  );
}

export default App;
