import React from "react";
import styled from "styled-components"

// These style components create HTML elements with a autogenerate class
// styles are not inline, they end up in a seperate CSS file
// We aren't barbarians! 
const FooterWrapper = styled.div`
width:100%;
`
const Logo = styled.h1`
  font-size:4em;
  text-align:center;
`

const FooterList = styled.ul`
  text-align:center;
  clear:both;
  margin:0 auto;
  float:right;
`

const FooterListItem = styled.li`
  float:left;
  list-style:none;
  font-size:1.5em;
  margin:0 1em 0 1em;
`

const FooterLinks = props => {
  return (
    <FooterWrapper>
      <FooterList>
        {props.items && props.items.map( ing => 
          <FooterListItem key={ing.node.path.alias}>
            <a href={ing.node.path.alias}>{ing.node.title}</a>
          </FooterListItem>
        )}
      </FooterList>
      <p><strong>Drupal Gatsby</strong></p>
      <p>Read the <a href="https://github.com/zivtech/gatsby-drupal8"> source for this website.</a></p>
      <p><a href="http://dev-drupal-gatsby.pantheonsite.io">Drupal 8 source site</a></p>
    </FooterWrapper>
  )
}

export default FooterLinks;