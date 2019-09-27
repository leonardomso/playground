import React from "react";
import { History } from "history";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";

import Form from "../../../system/Form/Form";
import Field from "../../../system/Field/Field";
import Button from "../../../system/Button/Button";
import Link from "../../../system/Link/Link";

import { CURRENT_USER_QUERY } from "../../../graphql/queries";
import { SIGN_UP_MUTATION } from "../../../graphql/mutations";

interface SignUpProps {
	history: History;
	useTranslation: () => any;
}

interface FormValues {
	email: string;
	password: string;
	confirmPassword: string;
}

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("Email not valid")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.oneOf([Yup.ref("password"), null], "Passwords must match")
});

const SignUp: React.FC<SignUpProps> = ({ history, useTranslation }) => {
	const [signUpUser, { error }] = useMutation(SIGN_UP_MUTATION, {
		update: (cache, { data }) => {
			const { signUpUser } = data;

			cache.writeQuery({
				query: CURRENT_USER_QUERY,
				data: {
					currentUser: signUpUser
				}
			});

			if (signUpUser !== null) {
				history.push('/browse', { currentUser: signUpUser });
			}
		}
	});

	return (
		<Formik
			initialValues={{ email: "", password: "", confirmPassword: "" }}
			onSubmit={({ email, password }: FormValues) => {
        console.log({ email, password });
				// signUpUser({
				// 	variables: {
				// 		email,
				// 		password
				// 	}
				// })
			}}
			validationSchema={validationSchema}
			render={({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<Form onSubmit={handleSubmit} height={"100%"}>
					<Field
						type="email"
						name="email"
						placeholder="Email"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						onError={errors.email}
					/>

					<Field
						marginTop={20}
						type="password"
						name="password"
						placeholder="Senha"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						onError={errors.password}
					/>

					<Field
						marginTop={20}
						type="password"
						name="confirmPassword"
						placeholder="Confirmar senha"
						value={values.confirmPassword}
						onChange={handleChange}
						onBlur={handleBlur}
						onError={errors.confirmPassword}
					/>

					{error && <h1>Looks like something went wrong! Try again</h1>}

					<Button isSubmitting={isSubmitting} type="submit" marginTop={20}>
						Criar conta
					</Button>

					<Link
						to="/login"
						message="Já tem uma conta? Entrar"
						marginTop={20}
					/>
				</Form>
			)}
		/>
	);
}

export default SignUp;