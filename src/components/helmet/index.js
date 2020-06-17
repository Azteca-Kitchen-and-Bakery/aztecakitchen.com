import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Helmet = () => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        site {
          siteMetadata {
            title
            url
            business{
              name
              url
              image
              address{
                addressLocality
                addressRegion
                postalCode
                streetAddress
              }
              openingHours{
                formatted
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
      const siteMeta = data.site.siteMetadata;
      const restuarantSchema = {
        "@context": "http://schema.org",
        "@type": "Restaurant",
        "name": siteMeta.business.name,
        "url": siteMeta.business.url,
        "image": siteMeta.business.image,
        "telephone": siteMeta.business.telephone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": siteMeta.business.address.addressLocality,
            "addressRegion": siteMeta.business.address.addressRegion,
            "postalCode": siteMeta.business.address.postalCode,
            "streetAddress": siteMeta.business.address.streetAddress
        },
        "openingHours": siteMeta.business.openingHours.schema,
        "priceRange": siteMeta.business.priceRange,
        "servesCuisine": siteMeta.business.servesCuisine,
        "hasMenu": [
          {
           "@type": "Menu",
           "name": "Breakfast menu",
           "url": `${siteMeta.business.url}/breakfast-menu`,
           "inLanguage": "English",
            "offers": {
            "@type": "Offer",
            "availabilityEnds": "T12:00"
            }
          },
          {
           "@type": "Menu",
           "name": "All-day menu",
           "url": `${siteMeta.business.url}/all-day-menu`,
           "inLanguage": "English",
          },
          {
            "@type": "Menu",
            "name": "Family style menu",
            "url": `${siteMeta.business.url}/family-style-menu`,
            "inLanguage": "English",
           }
        ]
      }
      return (
        <ReactHelmet>
            <meta charSet="utf-8" />
            <title>{siteMeta.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
            {/* <meta name="description" content={description} /> */}
            <script type="application/ld+json">
              {JSON.stringify(restuarantSchema)}
            </script>
        </ReactHelmet>
      );
    }}
  />
);

export default Helmet;
