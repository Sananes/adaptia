const path = require(`path`)
const siteConfig = require(`./src/data/services`)

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "_helpers.scss";',
        includePaths: [
          'src/styles',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'adaptia-design',
        short_name: 'adaptia',
        start_url: '/',
        background_color: '#02284B',
        theme_color: '#FECA30',
        display: 'minimal-ui',
        icon: 'src/images/adaptia-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    // `gatsby-plugin-remove-serviceworker`,
  ],
}
