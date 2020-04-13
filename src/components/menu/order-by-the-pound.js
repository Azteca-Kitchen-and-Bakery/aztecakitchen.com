import React from 'react';
import { Heading, Box } from 'rebass';
import MenuFooter from '../../organisms/menu-footer';
import Layout from '../../templates/layout';



const PoundMenu = () => (
  <Layout>
    <Box width={1}>
      <Heading>Order by the pound menu</Heading>
      <MenuFooter/>
    </Box>
    
  </Layout>
);

export default PoundMenu;
