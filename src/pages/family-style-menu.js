import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import FamilyMenu from '../components/menu/family';
import Styles from './index.module.scss';

const IndexPage = () => (
   <Layout>
    <div className={Styles.main}>
      <div className={Styles.section}>
        <h2 className={Styles.heading} id="#menu/family-style">Family style</h2>
        <FamilyMenu />
        <Intro minimal={true} />
        <Social />
     </div>
    </div>
  </Layout>
);
export default IndexPage;

