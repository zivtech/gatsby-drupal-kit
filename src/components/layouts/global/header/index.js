import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderWrapper = styled.div`
  background-color: #eee;
  padding: 2em 3em;
  justify-content: center;
  text-align: center;
`;
const Logo = styled.h1`
  font-size: 4em;
  margin: 0px;
  padding: 0px;
`;

const NavWrapper = styled.div`
  margin: 1em auto;
  padding:1em 0;
  width:960px;

`;
const MenuList = styled.ul`
  margin: 1em auto;
  li {
    float: left;
    list-style: none;
    font-size: 1.5em;
    padding: 0px;
    margin: 0 2em 0 0em;
  }
`;

const Header = props => {
  // By Default... we're simply using data from tags taxonomy as the
  // the main menu
  return (
    // Generic Div defined by styled component above
    <HeaderWrapper>
      <Logo>Drupal Gatsby Kit</Logo>
      <NavWrapper>
        <MenuList>
          <li>
            <Link to="/">Home</Link>
          </li>
          {props.items &&
            props.items.map(ing => (
              <li key={ing.node.path.alias}>
                <Link to={ing.node.path.alias}>{ing.node.name}</Link>
              </li>
          ))}
        </MenuList>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
