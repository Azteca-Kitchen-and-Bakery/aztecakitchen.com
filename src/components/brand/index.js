import React from 'react';
import {Link} from 'gatsby'
import {Image} from 'rebass';
import Logo from '../../assets/azteca-logo.svg';

const logoStyle = {
    width:192
}

const Brand = () => (
    <Link to="/">
        <Image width={[1/2,1/4]} src={Logo} style={logoStyle} />
    </Link>
);
export default Brand;