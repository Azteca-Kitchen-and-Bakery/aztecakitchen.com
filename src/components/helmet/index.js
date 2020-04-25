import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import RestaurantSchema from '../schema/restaurant'

const Helmet = () => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `}
    render={data => {
      const siteMeta = data.site.siteMetadata;
      
      return (
        <ReactHelmet>
            <meta charSet="utf-8" />
            <title>{siteMeta.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
            {/* <meta name="description" content={description} /> */}
            <RestaurantSchema />
        </ReactHelmet>
      );
    }}
  />
);

export default Helmet;
