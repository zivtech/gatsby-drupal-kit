import React from "react"
import { Link, graphql } from "gatsby"
import gray from "gray-percentage"
import Img from "gatsby-image"

import Layout from "../../components/layouts/default"
import Container from "../../components/common/container"
import Teaser from "../../components/content/teaser"
import Featured from "../../components/content/featured"
import { rhythm } from "../../utils/typography"
import constants from "../../utils/constants"
import queries from "../../utils/queries"
import StaticComponent from "../../examples/example-static.js"
import StaticProps from "../../examples/example-props.js"
import ExampleWrapper from "../../examples/example-wrapper.js"
import ExampleStateful from "../../examples/example-stateful.js"
const ExamplePage = ({ data }) => (
  
  <Layout data={data}>
    <StaticComponent />
    <StaticProps name="dude" greeting="Yo" message="Chillin, and stuff" />
    <ExampleWrapper>
      <StaticProps name="Friend" greeting="We are wrapping." message="Chillin, and stuff" />
    </ExampleWrapper>
    <ExampleWrapper>
      <ExampleStateful name="Friend" greeting="We are wrapping." message="Chillin, and stuff" />
    </ExampleWrapper>
  </Layout>
)

export default ExamplePage

export const query = graphql`
  query exampleQuery {
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

