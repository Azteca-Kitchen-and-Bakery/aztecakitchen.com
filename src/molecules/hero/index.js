import React from 'react';
import { Image } from 'rebass';
import styles from './hero.module.scss';

const Hero = () => (
    
    <div className={styles.container}>
        <Image
            width={1}
            src='/media/placeholder.png'
            css={{
                position:'absolute'
            }}
        />
    </div>

);

export default Hero;
