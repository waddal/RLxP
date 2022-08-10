import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <StyledSplash>
      <h1>R L xP</h1>
      <section>
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
      </section>
    </StyledSplash>
  );
};

export default SplashPage;

const StyledSplash = styled.div`
  background-color: blanchedalmond;
  height: 250px;
  width: 250px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 12px;

  section {
    display: flex;
  }

  button {
    border: 1px solid #212121;
    padding: 2px 6px;
    margin: 6px 6px;

    &:hover {
      border: 1px solid black;
      background-color: azure;
    }
  }
`;
