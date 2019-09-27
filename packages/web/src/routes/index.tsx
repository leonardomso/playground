import React from "react";
import { History } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../components/App/App";
import Login from "../components/Login/Login";

interface RoutesProps {
  history: History;
}

const Routes: React.FC<RoutesProps> = ({ history }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={App}
        history={history}
      />
      <Route
        exact
        path="/login"
        component={Login}
        history={history}
      />
      <Route
        exact
        path="/cadastrar"
        component={Login}
        history={history}
      />
      <Route
        exact
        path="/recuperar"
        component={Login}
        history={history}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;