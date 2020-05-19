import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Social from '../components/social';
import Styles from './index.module.scss';

const ContactPage = () => (
   <Layout>
      <div className={Styles.main}>
        <div className={Styles.section}>
          <Intro className={Styles.intro} />
          <Social className={Styles.social} />
        </div>
      </div>
  </Layout>
);
export default ContactPage;

