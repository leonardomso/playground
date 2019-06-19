import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import axe from 'react-axe'

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { theme } from "./styles/Theme/Theme";
import reset from "./styles/constants/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const history = createBrowserHistory();

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

ReactDOM.render(
    <Fragment>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/" component={App} history={history} />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
        <GlobalStyle />
    </Fragment>, 
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
