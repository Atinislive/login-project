import React from 'react'
import { removeUserSession, getUser } from './Common';

const Dashboard = (props) => {
    const user = getUser();
    const handleLogout=()=>{
        removeUserSession();
        props.history.push('/Login');
    }
  return (
    <div>Welcome {user.name} <br/> <br/>
    <input
    type="button"
    value="Logout"
    onClick={handleLogout}/>
    </div>
  )
}

export default Dashboard