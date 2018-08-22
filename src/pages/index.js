import React from "react"
import { Link } from "gatsby"
import gray from "gray-percentage"
import Img from "gatsby-image"

import Layout from "../layouts"
import Container from "../components/atoms/container"
import Teaser from "../components/organisms/teaser"
import { rhythm } from "../utils/typography"
import constants from "../utils/constants"
import queries from "../utils/queries"
const IndexPage = ({ data }) => (
  <Layout data={data}>
    <Container>
      <h1>Articles</h1>

        {data.allNodeArticle.edges.map(({ node }) => (

            <Teaser 
              image={node.relationships.field_image.localFile.childImageSharp.fluid} title={node.title} 
              path={node.path.alias} 
              content={node.body.value}
            />

        ))}
  
    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    ...AllTags
    allNodeArticle(limit: 1000) {
      edges {
        node {
          ...ArticleNode
        }
      }
    }
  }
`

