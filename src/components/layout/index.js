import React, { Fragment } from 'react';
import Styles from './layout.module.scss'
import Helmet from '../helmet';
import Header from '../header';
import Footer from '../footer';




const Layout = ({ children }) => (
  <Fragment>
    <Helmet />
    <div>
      <div className={Styles.layout}>
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  </Fragment>
);

export default Layout;
