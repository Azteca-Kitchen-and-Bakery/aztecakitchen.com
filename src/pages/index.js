import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Social from '../components/social';
import AllDayMenu from '../components/menu/all-day';
import FamilyMenu from '../components/menu/family';
import BreakfastMenu from '../components/menu/breakfast';
import Styles from './index.module.scss';

const IndexPage = () => (
   <Layout>
      <div className={Styles.main}>
        <Hero />
        <div className={Styles.section}>
          <Intro className={Styles.intro} />
          <Social className={Styles.social} />
        </div>
      </div>
  </Layout>
);
export default IndexPage;

