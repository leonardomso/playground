import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "../../../system/Form/Form";
import Input from "../../../system/Input/Input";
import Button from "../../../system/Button/Button";
import GoogleButton from "../../../system/GoogleButton/GoogleButton";
import Link from "../../../system/Link/Link";

import { LoginTextContainer, LoginText } from "../Login.styles";

interface SignUpProps {}

interface SignUpFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

const SignUp: React.FC<SignUpProps> = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useFormik<SignUpFormProps>({
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
          Create an account now and start listen to your favorite podcasts for
          free.
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
          Create account
        </Button>

        <GoogleButton type="button" text="Sign up with Google" mt={20} />

        <Link to="/signin" message="Already have an account? Sign In" mt={20} />

        <Link to="/forgot" message="Forgot your password?" mt={20} />
      </Form>
    </Fragment>
  );
};

export default SignUp;
