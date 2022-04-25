import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignupPage from "./pages/SignupPage";
import SplashPage from "./pages/SplashPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
