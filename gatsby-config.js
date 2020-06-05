const manifestConfig = require('./config/manifest');

//const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: `Azteca Kitchen & Bakery`,
    description: `Phase 1 of the Azteca site`,
    url: `/`,
    author: `Jason J Geiger (130public.net)`,
    business: {
      name:"Azteca Kitchen & Bakery",
      url:"http://aztecakitchenandbakery.com/",
      image: "http://aztecakitchenandbakery.com/assets/azteca-logo.svg",
      address:{
        addressLocality: `Phoenix`,
        addressRegion: `AZ`,
        postalCode: `85007`,
        streetAddress: `416 N 7th Ave`
      },
      telephone:`602-253-5864`,
      fax:`602-253-0945`,
      openingHours: {
        formatted:[
          "M-F 6:30am to 4pm",
          "Sat 7am till 2pm"
        ],
        schema:[   
          "Mo-Fr 06:30-16:00",
          "Sa 07:00-14:00",
        ]
      },
      "priceRange": "$",
      "servesCuisine": [
          "Mexican",
          "Hispanic"
      ]
    }
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