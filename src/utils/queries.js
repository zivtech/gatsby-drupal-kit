
import { graphql } from 'gatsby'

export const ArticleNode = graphql`
fragment ArticleNode on node__article { 
  title
      body {
        value
      }
      path {
        alias
      }
      fields {
        slug
      }
      relationships {
        field_tags {
          name
          path {
            alias
          }
        }
        field_image {
          localFile {
            childImageSharp {
                  fluid(maxWidth: 470, maxHeight: 353) {
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

export const AllTags = graphql`
fragment AllTags on Query { 
  allTaxonomyTermTags {
    edges {
      node {
        name
        tid
        path {
          alias
        }
      }
    }
  }
}
`;

export const AllPages = graphql`
fragment AllPages on Query { 
  allNodePage {
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
`;


