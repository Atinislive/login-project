import React from "react";
import { useState } from "react";
import axios from "axios";
import { setUserSession } from "./Common";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://analyticsv.pythonanywhere.com/user", {
        username: "test@mail.com",
        password: "Testpassword",
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
       
        console.log("error >>> ", error);
      });
    // props.history.push('/dashboard');
  };
  return (
    <div>
      <div>
        LOGIN
        <br />
        <br />
      </div>
      <div>
        username <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        password
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      {error && <div className="error">{error} </div>}
      <input
        type="button"
        value={loading ? "Loading.." : "Login"}
        disabled={loading}
        onClick={handleLogin}
      />
    </div>
  );
};

export default Login;
