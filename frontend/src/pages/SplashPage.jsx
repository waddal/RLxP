import React from "react";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <div className="SplashPage">
      <h1>SplashPage</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        sign up
      </button>
    </div>
  );
};

export default SplashPage;
