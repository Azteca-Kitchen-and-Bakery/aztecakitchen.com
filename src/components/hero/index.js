import React from 'react';
import { Image } from 'rebass';
import styles from './hero.module.scss';
import HeroImage from '../../assets/hero.jpg';

const Hero = () => (
    
    <div className={styles.container}>
        <Image
            width={1}
            src={HeroImage}
        />
    </div>

);

export default Hero;
