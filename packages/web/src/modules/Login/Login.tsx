import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

import {
  LoginContainer,
  LoginInsideContainer,
  LoginTitle,
} from "./Login.styles";

const Login = () => (
  <LoginContainer>
    <LoginTitle>mu</LoginTitle>

    <LoginInsideContainer>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={ForgotPassword} />
      </Switch>
    </LoginInsideContainer>
  </LoginContainer>
);

export default Login;
