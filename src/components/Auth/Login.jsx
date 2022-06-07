import { Form, Formik } from "formik";
import { object, string } from "yup";
import styled from "styled-components";

import FormError from "../FormError/FormError";
import FormTitle from "../FormTitle/FormTitle";
import InputField from "../InputField/InputField";
import SubmitButton from "../SubmitButton/SubmitButton";
import { colors, paddings, margins } from "../../theme/theme";

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

const ForgotPasswordText = styled(FormSwitchText)`
  margin: -${margins.sm} 0 ${margins.sm};
`;

const validationSchema = object({
  userName: string().required(),
  password: string().required(),
});

const Login = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Log in</FormTitle>
        <InputField type="text" name="userName" />
        <FormError name="userName" />
        <InputField type="password" name="password" />
        <FormError name="password" />
        <ForgotPasswordText onClick={() => formChangeHandler("forgot")}>
          Forgot password?
        </ForgotPasswordText>
        <SubmitButton>Log in</SubmitButton>
        <FormFooter>
          <FormSwitchText onClick={() => formChangeHandler("register")}>
            Dont have an account? Join now!
          </FormSwitchText>
        </FormFooter>
      </Form>
    </Formik>
  );
};

export default Login;
