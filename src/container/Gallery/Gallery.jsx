import React from 'react';
import styles from './Gallery.module.css';
import {blogs} from '../../constants/data';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import images from '../../constants/images';

const Gallery = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.blogHeader}>
      <h3 className='p__cormorant'>Blogs</h3>
      <img src={images.spoon} alt="spoon logo" />
      <h1 className='subHeadtext__cormorant'>Gerícht Updates</h1>
    </div>
    <Carousel>
      {Array.isArray(blogs)&&blogs?.map((item,index) => (
        <Card {...item} index={index}/>
      ))}
    </Carousel>
    <Carousel/>
  </div>

)};

export default Gallery;
