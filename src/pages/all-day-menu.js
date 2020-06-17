import React from 'react';
import ReactHelmet from 'react-helmet';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import AllDayMenu from '../components/menu/all-day';
import Styles from './index.module.scss';

const menuSchema = {
  "@context": "http://schema.org",
  "@type": "Menu",
  "name": "All-day menu",
  "mainEntityOfPage": `https://www.aztecakitchen.com/all-day-menu`,
  "inLanguage": "English"
}

const AllDayPage = () => (
   <Layout>
    <ReactHelmet>
      <script type="application/ld+json">
          {JSON.stringify(menuSchema)}
      </script>
     </ReactHelmet>
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
export default AllDayPage;

