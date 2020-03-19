import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Routes from "./routes/";
import * as serviceWorker from "./serviceWorker";

import { theme } from "./theme";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
