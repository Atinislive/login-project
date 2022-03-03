import React from 'react'
import {getUser, removeUserSession  } from './Common';

const Dashboard = (props) => {
    const user = getUser();
    const handleLogout=()=>{
        removeUserSession();
        props.history.push('/Login');
    }
  return (
    <div>
<h1>hey</h1>
    Welcome {user.name}!<br/> <br/>
    <input
    type="button"
    value="Logout"
    onClick={handleLogout}/>
    </div>
  )
}

export default Dashboard