import React from "react";
import Layout from "../../../components/layouts/default";
import { graphql } from "gatsby";
import {Helmet} from "react-helmet";

const PageTemplate = ({ data }) => (
  <Layout data={data}>
    <Helmet title={data.nodePage.title}  />
    <h1>{data.nodePage.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.nodePage.body.value }} />
  </Layout>
);

export default PageTemplate;

export const query = graphql`
  query($nid: Int!) {
    nodePage(nid: { eq: $nid }) {
      title
      body {
        value
      }
    }
  }
`;
