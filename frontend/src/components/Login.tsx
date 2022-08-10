import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);
  const [user, setUser] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleLogin = (e: any) => {
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
    <StyledLogin>
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
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  form {
    margin: 10px;
  }

  input {
    outline: none;
    border: 1px solid black;
    text-indent: 2px;
  }

  #submit {
    border: 1px solid #212121;
    padding: 2px 6px;

    &:hover {
      border: 1px solid black;
      background-color: azure;
    }
  }

  #hideBtn {
    cursor: default;
  }
`;
