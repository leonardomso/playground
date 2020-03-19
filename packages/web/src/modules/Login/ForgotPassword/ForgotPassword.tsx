import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "../../../system/Form/Form";
import Input from "../../../system/Input/Input";
import Button from "../../../system/Button/Button";
import Link from "../../../system/Link/Link";

import { LoginTextContainer, LoginText } from "../Login.styles";

interface ForgotPasswordProps {}

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required")
});

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useFormik<ForgotPasswordFormProps>({
    initialValues: {
      email: ""
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
          Enter your email address and we'll send you an email with a password
          reset link
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

        <Button type="submit" mt={20} isSubmitting={isSubmitting}>
          Send reset link
        </Button>

        <Link to="/signin" message="Back to Sign In" mt={20} />
      </Form>
    </Fragment>
  );
};

export default ForgotPassword;
