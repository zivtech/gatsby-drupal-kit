import React from "react"
import Img from "gatsby-image"

import Layout from "../../../layouts"
import Container from "../../../components/atoms/container"
import Teaser from "../../../components/organisms/teaser"
import { rhythm } from "../../../utils/typography"
import constants from "../../../utils/constants"

const CategoryTemplate = ({ data }) => (
  <Layout data={data}>
    <Container>
      <h1>{data.taxonomyTermTags.name}</h1>

        {data.allNodeArticle.edges.map(({ node }) => (
            <Teaser 
              image={node.relationships.field_image.localFile.childImageSharp.fluid} title={node.title} 
              path={node.path.alias} 
              content={node.body.value}
              node={node}
            />
        ))}
  
    </Container>
  </Layout>
)

export default CategoryTemplate

// origin of the tid variable 
// can be found in gatsby-node.js
// call to create page
export const query = graphql`
  query($tid: Int) {
  ...AllPages
  ...AllTags
  taxonomyTermTags(tid :{ eq: $tid}) {
    tid
    name
  }
  allNodeArticle(
    sort: {
      fields:nid
      order: DESC
    }
    filter: {
      relationships : {
        field_tags : {
          tid:{ eq: $tid}
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
`
