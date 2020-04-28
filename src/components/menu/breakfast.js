import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Styles from './menu.module.scss';
import tableStyles from '../table/table.module.scss';

const BreakfastMenu = () => (
  <Flex flexWrap="wrap" justifyContent="space-between" alignItems="top">
    <h3 className={Styles.heading}>Served till noon</h3>
    <p className={Styles.description}>All plates served with beans &amp; your choice of tortilla or bread.</p>
    <Box mb={4} className={Styles.menu} width={1}>
      <Flex width={1} pr={4} pb={3} className={tableStyles.itemTitle}>
          <Text className={tableStyles.label} width={[2/5]} textAlign="left">&nbsp;</Text>
          <Text className={tableStyles.value} width={[1/5]} textAlign="right">Burro</Text>
          <Text className={tableStyles.value} width={[1/5]} textAlign="right">Torta</Text>
          <Text className={tableStyles.value} width={[1/5]} textAlign="right">Plate</Text>
      </Flex>
      <p className={Styles.suhead}>Potatos</p>
      <Flex width={1} pr={4} pb={3} className={tableStyles.item}>
          <Text className={tableStyles.label} width={[2/5]} textAlign="left">Chorizo</Text>
          <Text className={tableStyles.value} width={[1/5]} textAlign="right">4.75</Text>
          <Text className={tableStyles.value} width={[1/5]} textAlign="right">4.95</Text>
          <Text className={tableStyles.value} width={[1/5]} textAlign="right">6.50</Text>
      </Flex>
    </Box>
  </Flex>
);

export default BreakfastMenu;
