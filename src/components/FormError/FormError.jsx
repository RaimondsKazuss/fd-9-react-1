import { ErrorMessage } from "formik";
import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const StyledError = styled(ErrorMessage)`
  display: block;
  width: 100%;
  height: 1rem;
  margin: -${margins.sm} 0 ${margins.md};
  text-align: left;
  color: ${colors.error};
`;

const FormError = ({ name }) => <StyledError name={name} component="span" />;

export default FormError;
