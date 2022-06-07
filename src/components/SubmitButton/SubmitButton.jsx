import styled from "styled-components";
import { colors } from "../../theme/theme";

const StyledButton = styled.button`
  width: 100%;
  height: 2rem;
  background: ${colors.darkBlue};
  color: ${colors.bg};
`;

const SubmitButton = ({ children }) => (
  <StyledButton type="submit">{children}</StyledButton>
);

export default SubmitButton;
