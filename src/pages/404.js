import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Box width={[320, 400, 600]} m="auto">
      <Heading color="primaryDark" fontSize={['9rem', '13rem', '16rem']}>
        404
      </Heading>
      <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']}>
        {"There isn't anything here"}
      </Heading>
    </Box>
  </Layout>
);

export default NotFoundPage;
