import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import Container from "../components/container"

const allNodeArticle = ({ data }) => (
  <Layout>
    <Container>
      <h1>Recipes</h1>
      <ul>
        {data.allNodeArticle.edges.map(({ node }) => (
          <li>
            <Link to={node.fields.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export default allNodeArticle

export const query = graphql`
  query {
    allNodeArticle(limit: 1000) {
      edges {
        node {
          title
          fields {
            slug
          }
        }
      }
    }
  }
`
