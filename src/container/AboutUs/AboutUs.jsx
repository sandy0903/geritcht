import React from 'react';

import images from "../../constants/images";
import styles from './AboutUs.module.css';
import Button from '../../components/Button/Button';

const AboutUs = () => (
  <div className={`${styles.wrapper}`}>
    <div className={`${styles.wrapperContent} flex__center`}>

      <div className={styles.aboutUs}>
      <h1 className="subHeadtext__cormorant">About Us</h1>
      <div>
        <img src={images.spoon} alt="spoon " />
      </div>
      <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, iure repellendus doloremque recusandae odit ducimus aliquam quaerat dolor veniam tempora ea alias, sequi consectetur laboriosam, nulla maiores? Suscipit, nam esse.</p>
      <Button>Know More</Button>
      </div>
      <div className={styles.knife__imgWrapper}>
      <img src={images.knife} alt="knife-logo" className={styles.knife__img} width="84" height="703"/>
      </div>
      <div className={styles.history}>
    <h1 className="subHeadtext__cormorant">Our History</h1>
      <div>
        <img src={images.spoon} alt="spoon" className={styles.reverse__img}/>
      </div>
      <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, iure repellendus doloremque recusandae odit ducimus aliquam quaerat dolor veniam tempora ea alias, sequi consectetur laboriosam, nulla maiores? Suscipit, nam esse.</p>
      <Button>Know More</Button>
      </div>
    </div>
  </div>
);

export default AboutUs;
