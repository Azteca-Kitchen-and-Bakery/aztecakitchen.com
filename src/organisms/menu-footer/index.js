import React from 'react';
import {Box,Text} from 'rebass';
import Address from '../../molecules/address';
import Phone from '../../molecules/phone';
import Social from '../../molecules/social';

const MenuFooter = () => (
    <Box width={1}>
        <Text textAlign="center">FREE Delivery with a $35 minumum.</Text>
        <Address />
        <Phone />
        <Social />
    </Box>
);
export default MenuFooter;