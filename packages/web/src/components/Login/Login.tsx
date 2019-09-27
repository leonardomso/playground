import React from "react";
import { Switch, Route } from "react-router-dom";
import { History } from "history";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

import {
	StyledLogin,
	LoginWrapper,
	MuTitle,
	SubTextContainer,
	SubText
} from "./Login.styles";

interface LoginProps {
	history: History;
}

const Login: React.FC<LoginProps> = ({ history }) => (
	<StyledLogin>
		<LoginWrapper>
			<MuTitle>Mu</MuTitle>

			<SubTextContainer>
				<SubText>
					The best boilerplate for your GraphQL projects.
					</SubText>
			</SubTextContainer>

			<Switch>
				<Route
					path="/login"
					component={SignIn}
					history={history}
				/>
				<Route
					path="/cadastrar"
					component={SignUp}
					history={history}
				/>
				<Route
					path="/recuperar"
					component={ForgotPassword}
					history={history}
				/>
			</Switch>
		</LoginWrapper>
	</StyledLogin>
);

export default Login;