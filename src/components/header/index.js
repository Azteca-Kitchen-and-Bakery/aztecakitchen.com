import React from 'react';
import { Flex, Box } from 'rebass';
import { Link } from 'gatsby';
import Styles from './header.module.scss'
import Brand from '../brand'

const activeStyle = { color: '#ff3333' };

class Header extends React.Component {

  render(){
    return (
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="top"
        className={Styles.header}
      >
        <Flex className={Styles.left} width={[1,1/3]}>
          <div>
          <Link 
            activeClassName={Styles.active}
            className={Styles.link} to="all-day-menu">All day menu</Link>
          <Link 
            activeClassName={Styles.active}
            className={Styles.link} to="breakfast-menu">Breakfast</Link>
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
          <div>
            <Link 
              activeClassName={Styles.active}
              className={Styles.link} 
              to="/family-style-menu">Family style</Link>
            <Link 
              activeClassName={Styles.active}
              className={Styles.link} to="/#contact">Contact</Link>
            </div>
        </Flex>
      </Flex>
    )
  }
};

export default Header;