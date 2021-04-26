import React from 'react';
import { Flex, Box } from 'rebass';
import Menu from '../menu';
import MenuData from '../../data/family-menu';
import Styles from './menu.module.scss';

const FamilyMenu = () => (
  <Flex flexWrap="wrap" justifyContent="space-between" alignItems="top">
    <Box mb={4} className={Styles.menu} width={1}>
      <Menu items={MenuData.familyDinner} width={1} columns={2} />
      <Menu items={MenuData.byThePound} width={1} columns={2} />
      <Menu items={MenuData.grilledSpecials} width={1} columns={2} />
    </Box>
  </Flex>
);

export default FamilyMenu;
