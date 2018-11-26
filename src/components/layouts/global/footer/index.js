import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby";

// These style components create HTML elements with a autogenerate class
// styles are not inline, they end up in a seperate CSS file
// We aren't barbarians!
const FooterWrapper = styled.div`
  background-color: #eee;
  padding: 2em 3em;
  justify-content: center;
  text-align: center;
  .content {
    max-width: 960px;
    margin: 0 auto;
  }
  .info {
    text-align: left;
  }
`;
const FooterList = styled.ul`
  float: right;
`;

const FooterListItem = styled.li`
  float: left;
  list-style: none;
  font-size: 1.5em;
  margin: 0 0em 0 2em;
`;

const Footer = ({ data }) => {
  return (
    <FooterWrapper>
      <div className="content">
        <FooterList>
          {data.allNodePage.edges &&
            data.allNodePage.edges.map(ing => (
              <FooterListItem key={ing.node.path.alias}>
                <Link to={ing.node.path.alias}>{ing.node.title}</Link>
              </FooterListItem>
            ))}
        </FooterList>
        <div className="info">
          <p>
            <strong>Drupal Gatsby</strong>
          </p>
          <p>
            Read the{" "}
            <Link to="https://github.com/zivtech/gatsby-drupal8">
              {" "}
              source for this website.
            </Link>
          </p>
          <p>
            <Link to="http://dev-drupal-gatsby.pantheonsite.io">
              Drupal 8 source site
            </Link>
          </p>
        </div>
      </div>
    </FooterWrapper>
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
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
);
