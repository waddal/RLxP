import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);
  const [user, setUser] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("logging in with: ", user.credentials);
    axios
      .post("endpoint/here", user.credentials)
      .then((res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.token);
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        //implement validation, user should be routed to signup if credentials are new/unlisted
        navigate("/user");
      });
  };

  const handleHiddenPassword = () => {
    setHidden(!hidden);
  };

  return (
    <div className="Login">
      <h1>login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleChange}
            value={user.credentials.username}
            autoComplete="off"
          />
        </label>
        <label htmlFor="password">
          <input
            type={hidden ? "password" : "text"}
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
            value={user.credentials.password}
            autoComplete="off"
          />
        </label>
        <div id="hideBtn" onClick={handleHiddenPassword}>
          {hidden ? "●" : "○"}
        </div>
        <button id="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
