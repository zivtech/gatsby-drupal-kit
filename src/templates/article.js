import React from "react"
import Img from "gatsby-image"

import Layout from "../layouts"
import Container from "../components/container"
import { rhythm } from "../utils/typography"
import constants from "../utils/constants"

const ArticleTemplate = ({ data }) => (
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
        <h1>{data.nodeArticle.title}</h1>
        <Img
              fluid={
                data.nodeArticle.relationships.field_image.localFile.childImageSharp.fluid
              }
/>
   
          <strong>Category:</strong>       
            <ul>
                {data.nodeArticle.relationships.field_tags &&
                  data.nodeArticle.relationships.field_tags.map(ing => <li> {ing.name}</li>)}
            </ul>
     
        <div
          css={{
            display: `flex`,
            justifyContent: `space-between`,
            marginBottom: rhythm(2),
          }}
        >
          <div css={{ width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(2)})` }}>
 
          </div>
          <div css={{ width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(2)})` }}>
            <div>
              <strong>Preparation time:</strong>
            </div>
            <div> minutes</div>
            <div>
              <strong>Cooking time:</strong>
            </div>
            <div> minutes</div>
            <div>
              <strong>Difficulty:</strong>
            </div>
            <div></div>
          </div>
        </div>
        <div css={{ background: `white`, padding: rhythm(1.5) }}>
          <h2>What you'll need and how to make this dish</h2>
          <div css={{ display: `flex`, justifyContent: `space-between` }}>
          <div dangerouslySetInnerHTML={{__html: data.nodeArticle.body.value }} />
          </div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    nodeArticle(fields: { slug: { eq: $slug } }) {
      ...ArticleNode
    }
  }
`
