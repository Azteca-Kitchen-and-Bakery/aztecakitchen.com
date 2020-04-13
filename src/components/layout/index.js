import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import config from 'react-reveal/globals';
import { ScrollingProvider } from 'react-scroll-section';
import Styles from './layout.module.scss'
import Helmet from '../helmet';
import Header from '../header';
import Footer from '../footer';




const Layout = ({ children }) => (
  <Fragment>
      <ScrollingProvider>
        <Helmet />
        <div>
          <div className={Styles.layout}>
            <Header/>
            {children}
            <Footer/>
          </div>
        </div>
      </ScrollingProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
