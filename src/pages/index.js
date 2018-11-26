import React from "react";
import {graphql } from "gatsby";
import {Helmet} from "react-helmet";
import Layout from "../components/layouts/default";
import Teaser from "../components/content/teaser";
import Featured from "../components/content/featured";

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <Helmet
      title="This is here Helmet elment is your <title> attribute!"
    />
    {data.featuredArticle.edges.map(({ node }) => (
      <Featured
        key={node.nid}
        image={node.relationships.field_image.localFile.childImageSharp.fluid}
        title={node.title}
        path={node.path.alias}
        node={node}
        content={node.body.value}
      />
    ))}
    {data.latestArticles.edges.map(({ node }) => (
      <Teaser
        key={node.nid}
        image={node.relationships.field_image.localFile.childImageSharp.fluid}
        title={node.title}
        path={node.path.alias}
        node={node}
        content={node.body.value}
      />
    ))}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query pageQuery {
    latestArticles: allNodeArticle(
      limit: 1000
      skip: 1
      sort: { fields: nid, order: DESC }
    ) {
      edges {
        node {
          ...ArticleNode
        }
      }
    }
    featuredArticle: allNodeArticle(
      limit: 1
      sort: { fields: nid, order: DESC }
    ) {
      edges {
        node {
          ...ArticleNode
        }
      }
    }
  }
`;
