const manifestConfig = require('./config/manifest');
require('dotenv').config();

//const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: `Azteca Kitchen & Bakery`,
    description: `Phase 1 of the Azteca site`,
    url: `/`,
    author: `Jason J Geiger (130public.net)`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    }
  ]
}