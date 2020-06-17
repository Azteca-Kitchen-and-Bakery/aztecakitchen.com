import React from 'react';
import ReactHelmet from 'react-helmet';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import FamilyMenu from '../components/menu/family';
import Styles from './index.module.scss';

const menuSchema = {
  "@context": "http://schema.org",
  "@type": "Menu",
  "name": "Family style menu",
  "mainEntityOfPage": `https://www.aztecakitchen.com/family-style-menu`,
  "inLanguage": "English"
}

const FamilyStylePage = () => (
   <Layout>
     <ReactHelmet>
      <script type="application/ld+json">
          {JSON.stringify(menuSchema)}
      </script>
     </ReactHelmet>
    <div className={Styles.main}>
      <div className={Styles.section}>
        <h2 className={Styles.heading}>Family style</h2>
        <FamilyMenu />
        <Intro minimal={true} />
        <Social />
     </div>
    </div>
  </Layout>
);
export default FamilyStylePage;

