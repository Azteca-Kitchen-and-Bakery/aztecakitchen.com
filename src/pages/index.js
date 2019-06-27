import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import Layout from '../templates/layout';
import Hero from '../molecules/hero';
import Intro from '../organisms/intro';
import Address from '../molecules/address';
import Phone from '../molecules/phone';
import Social from '../molecules/social';

const IndexPage = () => (
  <Layout>
    <div>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Hero />
        <Intro />
        <Address />
        <Phone />
        <Social />
      </Flex>
    </div>
  </Layout>
);
export default IndexPage;

