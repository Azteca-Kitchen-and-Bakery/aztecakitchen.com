import React from 'react';
import { Flex, Heading, Box } from 'rebass';
import Layout from '../../templates/layout';
import Menu from '../../organisms/menu';
import MenuFooter from '../../organisms/menu-footer';
import MenuData from '../../data/allday-menu';

const AllDayMenu = () => (
  <Layout>
    <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
      <Heading>All day menu</Heading>
      <Box width={1}>
        <Menu items={MenuData.burritos} />
      </Box>
      <Box width={1}>
        <Menu items={MenuData.tacos} />
      </Box>
      <Box width={[1,1/2]}>
        <Menu items={MenuData.tostadas} />
      </Box>
      <Box width={[1,1/2]}>
        <Menu items={MenuData.enchiladas} />
      </Box> 
      <Box width={[1,1/2]}>
        <Menu items={MenuData.tamales} />
      </Box>
      <Box width={[1,1/2]}>
        <Menu items={MenuData.quesadilla} />
      </Box> 
      <Box width={[1,1/2]}>
        <Menu items={MenuData.torta} />
      </Box>
      <Box width={[1,1/2]}>
        <Menu items={MenuData.menudo} />
      </Box> 
      <Box width={1}>
        <Menu items={MenuData.combos} />
      </Box>
      <Box width={1}>
        <Menu items={MenuData.sides} />
      </Box>
      <MenuFooter />
    </Flex>
  </Layout>
);

export default AllDayMenu;
