import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import { object, string } from "yup";
import { colors, margins } from "../../theme/theme";

const SubmitButton = styled.button`
  width: 100%;
  height: 2rem;
  margin-top: ${margins.md};
  background: ${colors.darkBlue};
  color: ${colors.bg};
`;

const validationSchema = object({
  userName: string().required(),
  password: string().required(),
});

const Login = () => {
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
        <Field type="text" name="userName" />
        <ErrorMessage name="userName" />
        <Field type="password" name="password" />
        <SubmitButton type="submit">Log in</SubmitButton>
        <ErrorMessage name="password" />
      </Form>
    </Formik>
  );
};

export default Login;
