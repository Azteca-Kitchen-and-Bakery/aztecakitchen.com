import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import config from 'react-reveal/globals';
import { ScrollingProvider } from 'react-scroll-section';
import styles from './layout.module.scss'
import Helmet from '../../organisms/helmet';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before { 
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  margin: 0;
  overflow-x: hidden;
}
`;
config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
      <ScrollingProvider>
        <Helmet />
        <div className={styles.layout}>
          <Header/>
          {children}
          <Footer/>
        </div>
      </ScrollingProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
