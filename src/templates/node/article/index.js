import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {Helmet} from "react-helmet";
import Layout from "../../../components/layouts/default";
import NodeInfo from "../../../components/content/node-info";
import styled from "styled-components";

const MainImage = styled(Img)`
  margin-bottom:1em;
`;

const ArticleTemplate = ({ data }) => (
  <Layout data={data}>
    <Helmet
      title={data.nodeArticle.title}
    />
    <h1>{data.nodeArticle.title}</h1>
    <MainImage
      fluid={
        data.nodeArticle.relationships.field_image.localFile.childImageSharp
          .fluid
      }
    />
    <div
      dangerouslySetInnerHTML={{
        __html: data.nodeArticle.body.processed
      }}
    />
    <NodeInfo node={data.nodeArticle} />
  </Layout>
);

export default ArticleTemplate;

export const query = graphql`
  query($nid: Int!) {
    nodeArticle(nid: { eq: $nid }) {
      ...ArticleNode
    }
  }
`;
