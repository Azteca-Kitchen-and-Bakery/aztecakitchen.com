import React from 'react';
import { Flex, Box, Link } from 'rebass';
import styles from './header.module.scss'
import Brand from '../../atoms/brand'

const links_left = [
  {
    name: "All day menu",
    value: "/menu/all-day"
  },
  {
    name: "Breakfast menu",
    value: "/menu/breakfast"
  }
];
const links_right = [
  {
    name: "Order by the LB",
    value: "/menu/order-by-the-pound"
  },
  {
    name: "Contact us",
    value: "/contact"
  }
];
const navLinks = (link_arr) => {
  return (
    link_arr.map(({ name, value }) => (
      <Link flex="1" className={styles.link} key={name} href={value}>
        {name}
      </Link>
    ))
  )
}

const Header = () => (
  
    <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={0}
        className={styles.header}
      >
        <Flex width={1/4}>{navLinks(links_left)}</Flex>
        <Box 
          width={1/2}
          css={{
            textAlign: 'center'
          }}
        >
          <Brand />
        </Box>
        <Flex width={1/4}>{navLinks(links_right)}</Flex>
      </Flex>

);

export default Header;