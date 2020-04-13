import React from 'react';
import { Flex, Box, Link } from 'rebass';
import styles from './header.module.scss'
import Brand from '../brand'

const links_left = [
  {
    name: "All day menu",
    value: "/#menu/all-day"
  },
  {
    name: "Breakfast menu",
    value: "/#menu/breakfast"
  }
];
const links_right = [
  {
    name: "Family style",
    value: "/#menu/family-style"
  },
  {
    name: "Contact us",
    value: "/#contact"
  }
];
const navLinks = (link_arr) => {
  return (
    link_arr.map(({ name, value }) => (
      <Link className={styles.link} key={name} href={value}>
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
        <Flex className={styles.left} width={[1,1/3]}>{navLinks(links_left)}</Flex>
        <Box 
          className={styles.center}
          width={[1,1/3]}
          css={{
            textAlign: 'center'
          }}
        >
          <Brand />
        </Box>
        <Flex className={styles.right} width={[1,1/3]}>{navLinks(links_right)}</Flex>
      </Flex>

);

export default Header;