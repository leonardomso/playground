import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./routes/";
import * as serviceWorker from './serviceWorker';
import client from "./graphql/client";

import { theme } from "./system/theme";
import reset from "./system/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const history = createBrowserHistory();

ReactDOM.render(
  <Fragment>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Routes history={history} />
      </ThemeProvider>
    </ApolloProvider>
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
