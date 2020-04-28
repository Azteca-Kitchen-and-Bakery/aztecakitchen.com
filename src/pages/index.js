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
      <div>
        <Hero />
        <div className={Styles.section}>
          <Intro className={Styles.intro} />
          <Social className={Styles.social} />
        </div>
        <div className={Styles.section}>
          <hr/>
          <h2 className={Styles.heading} id="#menu/all-day">All day menu</h2>
          <AllDayMenu />
          <hr/>
          <h2 className={Styles.heading} id="#menu/family-style">Family style</h2>
          <FamilyMenu />
          <hr/>
          <h2 className={Styles.heading} id="#menu/breakfast">Breakfast</h2>
          <BreakfastMenu />
        </div>
      </div>
  </Layout>
);
export default IndexPage;

