import { Field } from "formik";
import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const StyledField = styled(Field)`
  width: 100%;
  height: 2rem;
  border: 1px solid ${colors.lightBlue};
  margin-bottom: ${margins.md};
  box-sizing: border-box;
`;

const InputField = ({ type, name }) => <StyledField type={type} name={name} />;

export default InputField;
