
import React from "react"
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../../../components/examples/layout/2"
import ExampleMarkupBarf from "../../../components/examples/example-markup-barf.js"

const Example5 = (props) => {
  console.log(props)
  return (
    <Layout>
      <Helmet title="Example 3" />
      <ExampleMarkupBarf title="But is this that cool?" subtitle="I think so..."  />
      <ExampleMarkupBarf title="Why are we handling content in react?" subtitle="we'll get to that later..."  />
    </Layout>
  )
}

export default Example5
export const query = graphql`
query { 
  allNodeArticle {
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
fragment ExampleArticleNodeFragment on node__article { 
  title
  body {
    processed
    value
  }
  nid
  path {
    alias
  }
  fields {
    slug
  }
  relationships {
    field_tags {
      name
      tid
      path {
        alias
      }
    }
    field_image {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1028, maxHeight: 800) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
          resolutions {
            width
            height
          }
        }
      }
    }
  }
}
`;