import React from 'react';
import {Box, Text} from 'rebass';
import Styles from './intro.module.scss';

const Intro = () => (
    <Box className={Styles.intro}>
        <Text textAlign="center">Serving authentic Mexican family recipes for<br/>
        Breakfast, Lunch and Dinner.</Text>
        <Text textAlign="center">M-F 6:30am to 4pm Sat 6:30 till 2pm</Text>
        <Text textAlign="center">FREE Delivery with a $35 minumum.</Text>
        <Text textAlign="center">Stop in to see (and smell!) our full selection<br/>
  of traditional Mexican pastries and bolillo<br/>
  (Mexican white bread) baked fresh daily!</Text>
    </Box>
);

export default Intro;