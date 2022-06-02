import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import {
  colors,
  devices,
  fontSizes,
  margins,
  zIndexes,
} from "../../theme/theme";
import logoImage from "../../assets/logo-128.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import userIcon from "../../assets/icons/icon-person.svg";

const StyledNav = styled.header`
  border: 1px solid #ff0ff0;
  width: 100%;
  height: 4rem; //64px
  position: absolute;
  top: 0;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  box-sizing: border-box;
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  margin: ${margins.xs};
  background: url(${logoImage}) center/contain no-repeat ${colors.lightBlue};
`;

const NavButtonWrapper = styled.div`
  display: none;

  ${devices.mobile} {
    display: inline-block;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: ${fontSizes.md};
  color: ${colors.darkBlue};
  text-decoration: none;
  margin: ${margins.sm} 0 ${margins.sm} ${margins.sm};
`;

const HeaderNavLink = styled(StyledLink)`
  display: none;

  ${devices.mobile} {
    display: inline-block;
  }
`;

const NavButton = styled.div`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
  display: inline-block;
  background: url(${(props) => props && props.icon}) center no-repeat;
`;

const DropDown = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  width: 12rem;
  background: ${colors.bg};

  display: none;

  ${devices.mobile} {
    display: block;
  }
`;

const BurgerBtn = styled.button`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
  float: right;
  background: url(${menuIcon}) center no-repeat;

  ${devices.mobile} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  right: 0;
  top: 4rem;
  background: ${colors.bg};
  z-index: ${zIndexes.sideBar};

  ${devices.mobile} {
    display: none;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <StyledNav>
      <Logo />
      <NavButtonWrapper>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/all-posts">All posts</HeaderNavLink>
      </NavButtonWrapper>
      <NavButtonWrapper>
        <NavButton icon={plusIcon} onClick={() => navigate("/create")} />
        <NavButton
          icon={userIcon}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </NavButtonWrapper>
      <BurgerBtn onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
      {isDropdownOpen && (
        <DropDown>
          <StyledLink to="/my-posts">My posts</StyledLink>
          <StyledLink to="/auth">Log in / Register</StyledLink>
        </DropDown>
      )}

      {isSideBarOpen && (
        <MobileMenu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/all-posts">All posts</StyledLink>
          <StyledLink to="/my-posts">My posts</StyledLink>
          <StyledLink to="/create">Create a post</StyledLink>
          <StyledLink to="/auth">Log in / Register</StyledLink>
        </MobileMenu>
      )}
    </StyledNav>
  );
};

export default Nav;
