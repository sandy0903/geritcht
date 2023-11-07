import React from 'react';

import './Gallery.css';
import {blogs} from '../../constants/data';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';

const Gallery = () => {
  return (
  <div>
    <Carousel>

      {blogs?.map((item) => (
        <Card {...item}/>
      ))}

    </Carousel>
  </div>

)};

export default Gallery;
