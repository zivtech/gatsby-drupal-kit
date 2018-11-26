
import { graphql } from 'gatsby'

export const ArticleNode = graphql`
fragment ArticleNode on node__article { 
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


