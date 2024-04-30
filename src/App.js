import "./App.css";
import Header from "./components/header/header";
import React, { useState } from "react";
import Home from "./pages/home/home";
import SignUpForm from "./pages/sign-up/sign-up";
import LoginForm from "./pages/login/loginWithPhoneNo/loginWithPhoneNo";
import LoginFormEmail from "./pages/login/loginWithEmail/loginWithEmail";

const App = () => {
  return (
    <>
      <LoginFormEmail />
    </>
  );
};

export default App;
