import { Form, Formik } from "formik";
import { object, string } from "yup";
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
  email: string().email().required(),
});

const Forgot = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Reset passwod</FormTitle>
        <InputField type="text" name="email" />
        <FormError name="email" />
        <SubmitButton>Submit</SubmitButton>
        <FormFooter>
          <FormSwitchText onClick={() => formChangeHandler("register")}>
            Dont have an account? Join now!
          </FormSwitchText>
        </FormFooter>
      </Form>
    </Formik>
  );
};

export default Forgot;
