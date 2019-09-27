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
import { SIGN_IN_MUTATION } from "../../../graphql/mutations";

interface SignInProps {
  history: History;
  useTranslation: () => any;
}

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

const SignIn: React.FC<SignInProps> = ({ history, useTranslation }) => {
  const [signInUser, { error }] = useMutation(SIGN_IN_MUTATION, {
    update: (cache, { data }) => {
      const { signInUser } = data;

      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          currentUser: signInUser
        }
      });

      if (signInUser !== null) {
        history.push('/browse', { currentUser: signInUser });
      }
    }
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={({ email, password }: FormValues) => {
        console.log('email and password', { email, password })
        // signInUser({
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

          {error && <h1>Looks like something went wrong! Try again</h1>}

          <Button isSubmitting={isSubmitting} type="submit" marginTop={20}>
            Entrar
					</Button>

          <Link
            to="/cadastrar"
            message="Não tem uma conta? Criar conta"
            marginTop={20}
          />
        </Form>
      )}
    />
  )
}

export default SignIn;