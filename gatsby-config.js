const manifestConfig = require('./config/manifest');
require('dotenv').config();

//const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: `Site title`,
    url: `https://example.com/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: true,
          camelCase: true,
          localIdentName: '[name]--[local]'
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    'gatsby-plugin-styled-components',
  ]
}