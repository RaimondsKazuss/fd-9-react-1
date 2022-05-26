import styled from "styled-components";

const StyledNav = styled.header`
  border: 1px solid #ff0ff0;
`;

const Nav = () => {
  return (
    <StyledNav>
      <div>logo</div>
      <div>burger button</div>
    </StyledNav>
  );
};

export default Nav;
