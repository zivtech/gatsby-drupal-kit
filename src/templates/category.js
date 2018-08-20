import React from "react"
import Img from "gatsby-image"

import Layout from "../layouts"
import Container from "../components/container"
import { rhythm } from "../utils/typography"
import constants from "../utils/constants"

const RecipeTemplate = ({ data }) => (
  <Layout>
    <div
      css={{
        background: constants.paleYellow,
        padding: rhythm(1.5),
        paddingTop: 0,
        marginBottom: rhythm(3),
      }}
    >
      <Container>
        <h1>Title</h1>
      </Container>
    </div>
  </Layout>
)

export default RecipeTemplate

export const query = graphql`
  query($tid: Int!) {
   allNodeArticle {
     edges {
        node {
          ...ArticleNode
        }
     }
     
    }
  }
`
