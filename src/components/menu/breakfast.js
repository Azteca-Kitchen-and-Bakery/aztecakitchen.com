import React from 'react';
import { Flex, Box } from 'rebass';
import Menu from '../menu';
import MenuData from '../../data/breakfast-menu';

const BreakfastMenu = () => (
  <Flex flexWrap="wrap" justifyContent="space-between" alignItems="top">
    <Box width={1}>
      <Menu items={MenuData.breakfast} width={1} columns={2} />
    </Box>
  </Flex>
);

export default BreakfastMenu;
