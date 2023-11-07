import React from 'react'
import images from '../../constants/images';
import styles from './Testimony.module.css';

const Testimony = (props) => {
  const { name, job, image, quote } = props;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.customer}>
        <div className={styles.customerImage}>
          <img src={image} alt={name} />
          <div className={styles.quoteIcon}>
            <img src={images.quote} alt="quote" />
          </div>
        </div>
        <div className={styles.customerContent}>
          <p className={styles.quote}>{quote}</p>
          <p className={styles.name}>{name}</p>
          <p className={styles.job}>{job}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimony
