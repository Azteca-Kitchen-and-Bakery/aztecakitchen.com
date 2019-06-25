import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import Layout from '../templates/layout';
import Hero from '../molecules/hero';
import Table from '../molecules/table';

const table = [
    {
      type:"title",
      value:"Section title 1"
    },
    {
      type:"table",
      value:[
        {
          label:"item 1 let's make this one really long",
          value:"value 1"
        },
        {
          label:"item 2",
          value:"value 2"
        },
        {
          label:"item 3",
          value:"value 3"
        },
      ]
    }
]

const section = table.map(({ type, value }, index) => (
  <Box width={1} key={index}>
    {type === "title" && <Heading width={1} mt={4} mb={2}>Section title</Heading>}
    {type === "table" && <Table data={value} />}
    </Box>
));

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
        <Box width={1}>
          {section}
        </Box>
        <Box width={1}>
          {section}
        </Box>
        <Box width={1}>
          {section}
        </Box>
        <Box width={1}>
          {section}
        </Box>
        <Box width={1}>
          {section}
        </Box>
        <Box width={[1,1/2]}>
          {section}
        </Box>
        <Box width={[1,1/2]}>
          {section}
        </Box>
      </Flex>
    </div>
  </Layout>
);
export default IndexPage;

