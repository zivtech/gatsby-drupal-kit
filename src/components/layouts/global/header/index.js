import React from "react";
import styled from "styled-components"

// These style components create HTML elements with a autogenerate class
// styles are not inline, they end up in a seperate CSS file
// We aren't barbarians! 
const HeaderWrapper = styled.div`


`
const Logo = styled.h1`
  font-size:4em;
  text-align:center;
`

const MenuList = styled.ul`
  text-align:center;
  clear:both;
  margin:0 auto;
`

const MenuListItem = styled.li`
  float:left;
  list-style:none;
  font-size:1.5em;
  margin:0 1em 0 1em;
`

const Header = props => { 
  // By Default... we're simply using data from tags taxonomy as the 
  // the main menu
  return (
    // Generic Div defined by styled component above
    <HeaderWrapper>
      <Logo>
        Drupal Gatsby Kit
      </Logo>
      <MenuList>
        <MenuListItem>
        <a href="/">Home</a>
        </MenuListItem>
        {props.items &&
          props.items.map(ing => <MenuListItem key={ing.node.path.alias}><a href={ing.node.path.alias}> {ing.node.name}</a></MenuListItem>)}
      </MenuList>
    </HeaderWrapper>

  )
}

export default Header;
