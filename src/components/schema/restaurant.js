import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {JSONLD, Product, AggregateRating} from 'react-structured-data';

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
          // "openingHours": openingHours.schema,
          "priceRange": business.priceRange,
          "servesCuisine": business.servesCuisine
      }
      return ('')
    }}
  />
);
  export default RestaurantSchema;