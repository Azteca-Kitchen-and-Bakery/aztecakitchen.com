import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import BreakfastMenu from '../components/menu/breakfast';
import Styles from './index.module.scss';

const IndexPage = () => (
   <Layout>
     <div className={Styles.main}>
      <div className={Styles.section}>
        <h2 className={Styles.heading} id="#menu/breakfast">Breakfast</h2>
        <BreakfastMenu />
        <Intro minimal={true} />
        <Social />
      </div>
    </div>
  </Layout>
);
export default IndexPage;

