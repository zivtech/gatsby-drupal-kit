import React from "react";
import Layout from "../../../components/layouts/default";
import Teaser from "../../../components/content/teaser";
import { graphql } from "gatsby";
import {Helmet} from "react-helmet";

const CategoryTemplate = ({ data }) => (
  <Layout data={data}>
    <Helmet title={data.taxonomyTermTags.name} />
    <h1>{data.taxonomyTermTags.name}</h1>
    {data.allNodeArticle.edges.map(({ node }) => (
      <Teaser
        key={node.nid}
        image={node.relationships.field_image.localFile.childImageSharp.fluid}
        title={node.title}
        path={node.path.alias}
        content={node.body.value}
        node={node}
      />
    ))}
  </Layout>
);

export default CategoryTemplate;

// origin of the tid variable
// can be found in gatsby-node.js
// call to create page
export const query = graphql`
  query($tid: Int) {
    taxonomyTermTags(tid: {eq: $tid}) {
      name
    }
    allNodeArticle(
      sort: { fields: nid, order: DESC }
      filter: {
        relationships: {
          field_tags: {
            elemMatch: {
              tid: {
                eq: $tid
              }
            }
          }
        }
      }
    ) {
      edges {
        node {
          ...ArticleNode
        }
      }
    }
  }
`;
