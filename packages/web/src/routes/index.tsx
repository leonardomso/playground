import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../modules/App/App";
import Login from "../modules/Login/Login";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Login} />
      <Route exact path="/forgot" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
