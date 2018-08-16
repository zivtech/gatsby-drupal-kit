export default {
  paleYellow: `#f4f2e9`,
  darkYellow: `#e5e1d2`,
  darkGray: `#737373`,
}
export const pageQuery = graphql`
query {
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
  allNodeArticle {
     edges {
       node {
         title
         nid
         path {
           langcode
           alias
         }
         body {
           value
         }
         fields {
           slug
         }
       }
     }
   }
 }
`