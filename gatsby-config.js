module.exports = {
  siteMetadata: {
    title: 'Gatsby Drupal Kit',
    author: 'Nick Lewis',
    description: "Starting point for new Drupal 8 sites. Let's see how it goes",
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://dev-drupal-gatsby.pantheonsite.io/`,
        apiBase: `jsonapi`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open+Sans`
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [],
            },

          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-image',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/feed-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DrupalGraqhQL",
        // This is field under which it's accessible
        fieldName: "Drupal",
        // Url to query from
        url: "http://dev-drupal-gatsby.pantheonsite.io/graphql",
      },
    },
  ],
}
