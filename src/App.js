import React, { useEffect ,useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./compo/Login";
import Dashboard from "./compo/Dashboard";
import { getToken, removeUserSession, setUserSession } from "./compo/Common";
import axios from "axios";
import PublicRoute from "./compo/PublicRoute";
import PrivateRoute from "./compo/PrivateRoute";



const App = () => {
  const [authLoading,setAuthLoading]=useState(true);

  useEffect(()=> {
    const token =getToken();
    if (!token){
      return
    }
    axios.get( `http://analyticsv.pythonanywhere.com/varifyToken?token${token}`) .then(
      response=>{
        setUserSession(response.data.token, response.data.user)
setAuthLoading(false)
      }).catch( error=>{
        removeUserSession()
        setAuthLoading(false)
      })
  },
  []);
  
 if (authLoading && getToken())
 {
   return <div className="content">Checking your Details..</div>
 }

  return (<div>
    <div className="App">
      <BrowserRouter>
      
        <div className="header">
          <Link exact activeclassName= "active" to="/" >Home</Link>
          <Link activeclassName= "active" to="/Login" > Login</Link>
          <Link activeclassName= "active" to="/Dashboard" >Dashboard </Link>
        </div>
 <div className="content">
          <Switch>
          <Route  exact path="/" component ={Home} />
            <PublicRoute  path = "/Login" component = {Login}/>
            <PrivateRoute  path = "/Dashboard" component= {Dashboard}/>
          </Switch>
          </div>
      </BrowserRouter>
    </div>
    </div>
  );
};

export default App;
