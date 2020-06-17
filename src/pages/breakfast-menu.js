import React from 'react';
import ReactHelmet from 'react-helmet';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import BreakfastMenu from '../components/menu/breakfast';
import Styles from './index.module.scss';

const menuSchema = {
  "@context": "http://schema.org",
  "@type": "Menu",
  "name": "Breakfast menu",
  "mainEntityOfPage": `https://aztecakitchen.com/breakfast-menu`,
  "inLanguage": "English",
  "offers": {
    "@type": "Offer",
    "availabilityEnds": "T12:00"
  }
}

const BreakfastPage = () => (
   <Layout>
     <ReactHelmet>
      <script type="application/ld+json">
          {JSON.stringify(menuSchema)}
      </script>
     </ReactHelmet>
     <div className={Styles.main}>
      <div className={Styles.section}>
        <h2 className={Styles.heading}>Breakfast</h2>
        <BreakfastMenu />
        <Intro minimal={true} />
        <Social />
      </div>
    </div>
  </Layout>
);
export default BreakfastPage;

