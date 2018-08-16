const path = require(`path`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

    const slug = 'articles/' + node.nid;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

} 

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const recipeTemplate = path.resolve(`src/templates/recipe.js`)
    const categoryTemplate = path.resolve(`src/templates/category.js`)
    // Query for recipe nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
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
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // pages for each article.
        result.data.allNodeArticle.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: recipeTemplate,
            context: {
              slug: node.fields.slug
            },
          })
        })
        result.data.allTaxonomyTermTags.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: categoryTemplate,
            context: {
              tid: node.tid
            },
          })
        });
      })
    )
  })
}
