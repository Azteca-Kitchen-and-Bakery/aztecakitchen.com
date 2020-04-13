import React from 'react';
import { Flex, Heading, Box } from 'rebass';
import Menu from '../menu';
import MenuData from '../../data/allday-menu';

const AllDayMenu = () => (
    <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="top"
      >
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
      <Box width={[1]}>
        <Menu items={MenuData.combos} />
      </Box>
      <Box width={[1]}>
        <Menu items={MenuData.specials} />
      </Box>
      <Box width={[1]}>
        <Menu items={MenuData.sides} />
      </Box>
    </Flex>
);

export default AllDayMenu;
