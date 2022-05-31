import styled from "styled-components";
import { devices } from "../../theme/theme";

const Container = styled.div`
  margin: 5rem auto;
  width: 100%;
  max-width: 20rem;

  ${devices.mobile} {
    max-width: unset;
    width: 100%;
  }

  ${devices.laptop} {
    display: flex;
    justify-content: space-between;
  }
`;

const CardContainer = ({ children }) => <Container>{children}</Container>;

export default CardContainer;
