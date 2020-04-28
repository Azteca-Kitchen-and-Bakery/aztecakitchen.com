import React from 'react';
import { Heading, Box } from 'rebass';
import MenuFooter from '../../organisms/menu-footer';
import Layout from '../../templates/layout';
import Styles from './menu.module.scss';


const PoundMenu = () => (
  <Layout>
    <Box mb={4} className={Styles.menu} width={1} mb={1}>
      <Heading>Order by the pound menu</Heading>
      <MenuFooter/>
    </Box>
    
  </Layout>
);

export default PoundMenu;
