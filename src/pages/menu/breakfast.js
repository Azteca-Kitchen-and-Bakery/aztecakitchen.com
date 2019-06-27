import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../../templates/layout';
import MenuFooter from '../../organisms/menu-footer';
import Menu from '../../organisms/menu';

const BreakfastItems = [
  {
    type:"table",
    value:[
      {
        label:"item 1 let's make this one really long",
        value:"value 1"
      },
      {
        label:"item 2",
        value:"value 2"
      },
      {
        label:"item 3",
        value:"value 3"
      },
    ]
  }
]


const BreakfastMenu = () => (
  <Layout>
    <Box>
      <Heading>Breakfast menu</Heading>
      <Menu items={BreakfastItems} />
    </Box>
    <MenuFooter/>
  </Layout>
);

export default BreakfastMenu;
