import React, { useState } from "react";

const Login = () => {
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
  };

  const handleHiddenPassword = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleChange}
            value={user.credentials.username}
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
          />
        </label>
        <div onClick={handleHiddenPassword}>{hidden ? "●" : "○"}</div>
        <button id="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
