import React from 'react';
import { Flex, Box } from 'rebass';
import Styles from './header.module.scss'
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
      <a className={Styles.link} key={name} href={value}>
        {name}
      </a>
    ))
  )
}

const Header = () => (
  
    <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="top"
        className={Styles.header}
      >
        <Flex className={Styles.left} width={[1,1/3]}>
          <div style={{"position":"absolute","right":0}}>
            {navLinks(links_left)}
          </div>
        </Flex>
        <Box 
          className={Styles.center}
          width={[1,1/3]}
          css={{
            textAlign: 'center'
          }}
        >
          <Brand />
        </Box>
        <Flex className={Styles.right} width={[1,1/3]}>
          <div style={{"position":"absolute","left":0}}>
            {navLinks(links_right)}
          </div>
        </Flex>
      </Flex>

);

export default Header;