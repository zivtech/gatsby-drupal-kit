import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby";

const HeaderWrapper = styled.div`
  background-color: #eee;
  padding: 2em 3em;
  .inner {
    width: 960px;
    margin: 0 auto;
    padding: 1em 0;
  }
`;

const Logo = styled.h1`
  font-size: 4em;
  margin: 0px;
  padding: 0px;
`;

const MenuList = styled.ul`
  margin: 0;
  text-align: center;
  li {
    float: left;
    list-style: none;
    font-size: 1.5em;
    padding: 0px;
    margin: 0 2em 0 0em;
  }
`;

const Header = ({ data }) => {
  // By Default... we're simply using data from tags taxonomy as the
  // the main menu
  return (
    // Generic Div defined by styled component above
    <HeaderWrapper>
      <div className="inner">
        <Logo>Drupal Gatsby Kit</Logo>
        <MenuList>
          {data.Drupal.menuByName.links &&
            data.Drupal.menuByName.links.map(ing => (
              <li key={ing.url.path}>
                <Link to={ing.url.path}>{ing.label}</Link>
              </li>
            ))}
        </MenuList>
      </div>
    </HeaderWrapper>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allNodePage {
          edges {
            node {
              title
              path {
                alias
              }
            }
          }
        }
        Drupal {
          menuByName(name: "main") {
            links {
              url {
                path
              }
              label
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);
