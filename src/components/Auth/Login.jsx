import { Form, Formik } from "formik";
import { object, string } from "yup";
import FormError from "../FormError/FormError";
import FormTitle from "../FormTitle/FormTitle";
import InputField from "../InputField/InputField";
import SubmitButton from "../SubmitButton/SubmitButton";

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
        <FormTitle>Log in</FormTitle>
        <InputField type="text" name="userName" />
        <FormError name="userName" />
        <InputField type="password" name="password" />
        <FormError name="password" />
        <SubmitButton>Log in</SubmitButton>
      </Form>
    </Formik>
  );
};

export default Login;
