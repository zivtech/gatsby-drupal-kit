import React from "react"
import { Link, graphql } from "gatsby"
import gray from "gray-percentage"
import Img from "gatsby-image"

import Layout from "../components/layouts/default"
import Container from "../components/common/container"
import Teaser from "../components/content/teaser"
import Featured from "../components/content/featured"
import { rhythm } from "../utils/typography"
import constants from "../utils/constants"
import queries from "../utils/queries"

const IndexPage = ({ data }) => (
  
  <Layout data={data}>
    <Container>
      {data.featuredArticle.edges.map(({ node }) => (

      <Featured
        key={node.nid}
        image={node.relationships.field_image.localFile.childImageSharp.fluid} title={node.title}
        path={node.path.alias}
        node={node}
        content={node.body.value}
      />

      ))}
      {data.latestArticles.edges.map(({ node }) => (

        <Teaser
          key={node.nid}
          image={node.relationships.field_image.localFile.childImageSharp.fluid} title={node.title}
          path={node.path.alias}
          node={node}
          content={node.body.value}
        />

      ))}

    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query pageQuery {
  ...AllPages
  ...AllTags
  latestArticles: allNodeArticle(
    limit: 1000
    skip: 1
    sort: {
      fields: nid
      order: DESC
    }
    
  ) {
    edges {
      node {
        ...ArticleNode
      }
    }
  }
  featuredArticle: allNodeArticle(
      limit: 1
      sort: {
        fields: nid
        order: DESC
      }
      
    ) {
      edges {
        node {
          ...ArticleNode
        }
      }
    }
  }
`

