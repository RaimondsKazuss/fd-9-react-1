import styled from "styled-components";

const Container = styled.div`
  margin: 5rem auto;
  width: 100%;
  max-width: 20rem;
`;

const CardContainer = ({ children }) => <Container>{children}</Container>;

export default CardContainer;
