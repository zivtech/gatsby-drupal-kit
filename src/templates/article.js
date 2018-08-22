import React from "react"
import Img from "gatsby-image"
import styles from "./article.module.css"
import Layout from "../layouts"
import Container from "../components/atoms/container"
import { rhythm } from "../utils/typography"
import constants from "../utils/constants"

const ArticleTemplate = ({ data }) => (
  <Layout data={data}>
    <div
      className={styles.article}
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

     
  
        <div css={{ background: `white`, padding: rhythm(1.5) }}>
        
          <div css={{ display: `flex`, justifyContent: `space-between` }}>

          <div dangerouslySetInnerHTML={{__html: data.nodeArticle.body.value }} />
          </div>
          <div className={styles.articleInfo}>
          <strong>Filed under:</strong>       
       
                {data.nodeArticle.relationships.field_tags &&
                  data.nodeArticle.relationships.field_tags.map(ing => <a className={styles.tag} href={ing.path.alias}> {ing.name} </a>)}
          </div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    ...AllTags
    nodeArticle(fields: { slug: { eq: $slug } }) {
      ...ArticleNode
    }
  }
`;
