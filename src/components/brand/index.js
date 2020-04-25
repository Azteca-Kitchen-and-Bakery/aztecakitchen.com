import React from 'react';
import {Link, Image} from 'rebass';
import Logo from '../../assets/azteca-logo.svg';

const logoStyle = {
    width:192
}

const Brand = () => (
    <Link href="/">
        <Image width={[1/2,1/4]} src={Logo} style={logoStyle} />
    </Link>
);
export default Brand;