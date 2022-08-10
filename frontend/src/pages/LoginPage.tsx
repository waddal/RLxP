import React from "react";
import Login from "../components/Login";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Login />
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledLoginPage = styled.div`
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
`;
