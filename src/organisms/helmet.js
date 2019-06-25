import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Helmet = ({ theme = {} }) => (
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
          {/* <meta name="description" content={description} /> */}
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
