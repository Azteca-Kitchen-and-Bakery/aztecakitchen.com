import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import AllDayMenu from '../components/menu/all-day';
import Styles from './index.module.scss';

const IndexPage = () => (
   <Layout>
    <div className={Styles.main}>
      <div className={Styles.section}>
          <h2 className={Styles.heading}>All day menu</h2>
          <AllDayMenu />
          <Intro minimal={true} />
          <Social />
      </div>
    </div>
  </Layout>
);
export default IndexPage;

