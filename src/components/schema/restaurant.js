import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const RestaurantSchema = () => (
    <StaticQuery
      query={graphql`
        query RestaurantSchema {
          site {
            siteMetadata {
              title
              url
              business{
                address{
                  addressLocality
                  addressRegion
                  postalCode
                  streetAddress
                }
                openingHours{
                  schema
                }
                telephone
                fax
                priceRange
                servesCuisine
              }
            }
          }
        }
      `}
      render={data => {
        const {business} = data.site.siteMetadata;
        const schema = {
          "@context": "http://schema.org",
          "@type": "Restaurant",
          "name": business.name,
          "url": business.url,
          "image": business.image,
          "telephone": business.telephone,
          "fax": business.fax,
          "address": {
              "@type": "PostalAddress",
              "addressLocality": business.address.addressLocality,
              "addressRegion": business.address.addressRegion,
              "postalCode": business.address.postalCode,
              "streetAddress": business.address.streetAddress
          },
          "openingHours": business.openingHours.schema,
          "priceRange": business.priceRange,
          "servesCuisine": business.servesCuisine,
          "hasMenu": [
            {
             "@type": "Menu",
             "name": "Breakfast menu",
             "url": `${data.site.siteMetadata}/breakfast-menu`
            },
            {
             "@type": "Menu",
             "name": "All-day menu",
             "url": `${data.site.siteMetadata}/all-day-menu`
            },
            {
              "@type": "Menu",
              "name": "Family style menu",
              "url": `${data.site.siteMetadata}/family-style-menu`
             }
          ]
      }
      return ('')
    }}
  />
);
  export default RestaurantSchema;