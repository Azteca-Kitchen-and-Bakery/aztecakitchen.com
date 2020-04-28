import React from 'react';
import { Flex, Box } from 'rebass';
import Menu from '../menu';
import MenuData from '../../data/allday-menu';
import Styles from './menu.module.scss';

const AllDayMenu = () => (
    <Flex flexWrap="wrap" justifyContent="space-between" alignItems="top">
      <Box mb={4} className={Styles.menu} width={1}>
        <Menu items={MenuData.burritos} width={1} columns={2} />
      </Box>
      <Box mb={4} className={Styles.menu} width={1}>
        <Menu items={MenuData.tacos} />
      </Box>
      <Box mb={4} className={Styles.menu} width={[1,1/2]}>
        <Menu items={MenuData.tostadas} />
      </Box>
      <Box mb={4} className={Styles.menu} width={[1,1/2]}>
        <Menu items={MenuData.enchiladas} />
      </Box> 
      <Box mb={4} className={Styles.menu} width={[1,1/2]}>
        <Menu items={MenuData.tamales} />
      </Box>
      <Box mb={4} className={Styles.menu} width={[1,1/2]}>
        <Menu items={MenuData.quesadilla} />
      </Box> 
      <Box mb={4} className={Styles.menu} width={[1,1/2]}>
        <Menu items={MenuData.torta} />
      </Box>
      <Box mb={4} className={Styles.menu} width={[1,1/2]}>
        <Menu items={MenuData.menudo} />
      </Box> 
      <Box mb={4} className={Styles.menu} width={[1]}>
        <Menu items={MenuData.combos} />
      </Box>
      <Box mb={4} className={Styles.menu} width={[1]}>
        <Menu items={MenuData.specials} />
      </Box>
      <Box mb={4} className={Styles.menu} width={[1]}>
        <Menu items={MenuData.sides} />
      </Box>
    </Flex>
);

export default AllDayMenu;
