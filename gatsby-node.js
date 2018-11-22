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
    const articleTemplate = path.resolve(`src/templates/node/article/index.js`)
    const pageTemplate = path.resolve(`src/templates/node/page/index.js`)
    const categoryTemplate = path.resolve(`src/templates/taxonomy/tag/index.js`)
    // page building queries
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
          allNodePage {
            edges {
              node {
                title
                nid
                path {
                  alias
                }
                body {
                  value
                  processed
                }
                fields {
                  slug
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
                   alias
                 }
                 body {
                   value
                   processed
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
        result.data.allNodePage.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: pageTemplate,
            context: {
              nid: node.nid
            },
          })
        })
       
        result.data.allNodeArticle.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: articleTemplate,
            context: {
              nid: node.nid
            },
          })
        })
        //pages for each term
        result.data.allTaxonomyTermTags.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: categoryTemplate,
            context: {
              tid: node.tid,
              title: node.name
            },
          })
        });
      })
    )
  })
}
