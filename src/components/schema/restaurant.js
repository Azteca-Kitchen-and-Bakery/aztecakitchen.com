import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const RestaurantSchema = () => (
    <StaticQuery
      query={graphql`
        query RestaurantSchema {
          site {
            siteMetadata {
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
        const {name,url,image,address,openingHours,telephone,fax,priceRange,servesCuisine} = data.site.siteMetadata.business;
        
        return (
          <script type="application/ld+json">
            {
            `{
                  "@context": "http://schema.org",
                  "@type": "Restaurant",
                  "name": "${name}",
                  "url": "${url}",
                  "image": "${image}",
                  "telephone": "${telephone}",
                  "fax": "${fax}",
                  "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "${address.addressLocality}",
                      "addressRegion": "${address.addressRegion}",
                      "postalCode": "${address.postalCode}",
                      "streetAddress": "${address.streetAddress}"
                  },
                  "openingHours": "${openingHours.schema}",
                  "priceRange": "${priceRange}",
                  "servesCuisine": "${servesCuisine}"
              }`
            }
          </script>
        );
      }}
    />
  );
  export default RestaurantSchema;