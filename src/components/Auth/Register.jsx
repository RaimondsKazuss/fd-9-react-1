import { Form, Formik } from "formik";
import { object, string, ref } from "yup";
import styled from "styled-components";

import FormError from "../FormError/FormError";
import FormTitle from "../FormTitle/FormTitle";
import InputField from "../InputField/InputField";
import SubmitButton from "../SubmitButton/SubmitButton";
import { colors, paddings } from "../../theme/theme";

const FormFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: ${paddings.sm} 0;
`;

const FormSwitchText = styled.div`
  color: ${colors.darkBlue};
`;

const validationSchema = object({
  name: string().required(),
  surname: string().required(),
  email: string().email().required(),
  password: string().required(),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required(),
});

const Register = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Registration</FormTitle>
        <InputField type="text" name="name" />
        <FormError name="name" />
        <InputField type="text" name="surname" />
        <FormError name="surname" />
        <InputField type="text" name="email" />
        <FormError name="email" />
        <InputField type="password" name="password" />
        <FormError name="password" />
        <InputField type="password" name="repeatPassword" />
        <FormError name="repeatPassword" />
        <SubmitButton>Sign up</SubmitButton>
        <FormFooter>
          <FormSwitchText onClick={() => formChangeHandler("login")}>
            Already have an account? Log in!
          </FormSwitchText>
        </FormFooter>
      </Form>
    </Formik>
  );
};

export default Register;
