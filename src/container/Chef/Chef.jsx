import React from 'react';
import styles from './Chef.module.css';
import images from '../../constants/images';

const Chef = () => (
  <div className={styles.wrapper}>
    <div className={styles.chefInfo}>
      <div className={styles.chefInfoImage}>
        <img src={images.chef} alt="chef" />
      </div>
      <div className={styles.chefInfoContent}>
        <h3 className='p__cormorant'>Chef's Word</h3>
        <img src={images.spoon} alt="spoon logo" />
        <h1 className='subHeadtext__cormorant'>What we believe</h1>
        <p className={`p__opensans ${styles.infoText}`}><span>
          <img src={images.quote} alt="quote" />
        </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius vitae et dolorem nisi exercitationem autem? Dolorum sit itaque ipsam atque nobis vel dolore accusantium deleniti ipsa natus voluptatum repudiandae autem libero, praesentium nostrum provident aut in a tempora odio.</p>
        <p className={styles.chefName}>Kevin Luo</p>
        <p className={styles.chefTitle}>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
