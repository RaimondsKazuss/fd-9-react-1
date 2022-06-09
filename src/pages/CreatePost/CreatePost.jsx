import styled from "styled-components";
import { Form, Formik } from "formik";
import { object, string } from "yup";

import FormError from "../../components/FormError/FormError";
import FormTitle from "../../components/FormTitle/FormTitle";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const ContentContainer = styled.div`
  height: calc(100vh - 8rem);
  width: 20rem;
  display: flex;
  align-items: center;
  margin: auto;
`;

const validationSchema = object({
  title: string().required(),
  description: string().required(),
});

const CreatePost = () => {
  return (
    <ContentContainer>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <FormTitle>Create post</FormTitle>
          <InputField type="text" name="title" />
          <FormError name="title" />
          <InputField type="text" name="description" />
          <FormError name="description" />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Formik>
    </ContentContainer>
  );
};

export default CreatePost;
