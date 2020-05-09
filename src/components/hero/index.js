import React from 'react';
import styles from './hero.module.scss';
import HeroImage from '../../assets/hero.jpg';

const Hero = () => (
    
    <div className={styles.container}>
        <img
            src={HeroImage}
            // src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/88246815_967066107020542_817631559963006403_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=IE1zFfFqLdEAX82a-EY&oh=39ccb74de0ac908077f233b039ad455f&oe=5EDE9ABA"
        />
    </div>

);

export default Hero;
