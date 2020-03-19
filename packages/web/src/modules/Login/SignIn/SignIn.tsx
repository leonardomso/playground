import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "../../../system/Form/Form";
import Input from "../../../system/Input/Input";
import Button from "../../../system/Button/Button";
import GoogleButton from "../../../system/GoogleButton/GoogleButton";
import Link from "../../../system/Link/Link";

import { LoginTextContainer, LoginText } from "../Login.styles";

interface SignInProps {}

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

const SignIn: React.FC<SignInProps> = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useFormik<SignInFormProps>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: false
  });

  return (
    <Fragment>
      <LoginTextContainer>
        <LoginText>
          Sign in to your account and listen to your favorite podcasts.
        </LoginText>
      </LoginTextContainer>

      <Form onSubmit={handleSubmit} height={"100%"}>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
          mt={20}
        />

        <Button type="submit" mt={20} isSubmitting={isSubmitting}>
          Sign In
        </Button>

        <GoogleButton type="button" text="Sign in with Google" mt={20} />

        <Link
          to="/signup"
          message="Don't have an account? Create account"
          mt={20}
        />

        <Link to="/forgot" message="Forgot your password?" mt={20} />
      </Form>
    </Fragment>
  );
};

export default SignIn;
