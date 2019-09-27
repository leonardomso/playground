import React from "react";
import { History } from "history";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";

import Form from "../../../system/Form/Form";
import Field from "../../../system/Field/Field";
import Button from "../../../system/Button/Button";
import Link from "../../../system/Link/Link";

interface FormValues {
	email: string;
}

interface OtherProps {
	history: History;
	useTranslation: () => any;
}

interface MyFormProps {
	initialEmail: string;
	history: History;
	useTranslation: () => any;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
	const {
		values,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
	} = props;

	return (
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

			<Button type="submit" marginTop={20}>
				Enviar link
			</Button>

			<Link
				to="/cadastrar"
				message="Não tem uma conta? Criar conta"
				marginTop={20}
			/>

			<Link
				to="/login"
				message="Já tem uma conta? Entrar"
				marginTop={20}
			/>
		</Form>
	);
};

const ForgotPassword = withFormik<MyFormProps, FormValues>({
	mapPropsToValues: ({ initialEmail }) => ({ email: initialEmail || "" }),

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email("Email not valid")
			.required("Email is required")
	}),

	handleSubmit({ email }: FormValues, { props, setSubmitting, setErrors }) {
		console.log(email);
	}
})(InnerForm);

export default ForgotPassword;
