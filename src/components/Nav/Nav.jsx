import { useState } from "react";
import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const StyledNav = styled.header`
  border: 1px solid #ff0ff0;
  width: 100%;
  height: 4rem; //64px
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
  background: ${colors.bg};
`;

const BurgerBtn = styled.button`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
`;

const DropDown = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  width: 7rem;
  height: 7rem;
  background: ${colors.bg};
  border: 1px solid #ff0000;
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <Logo>R</Logo>
      <BurgerBtn onClick={() => setIsOpen(!isOpen)}>≡≡</BurgerBtn>
      {isOpen && <DropDown>menu items</DropDown>}
    </StyledNav>
  );
};

export default Nav;
