import React from 'react'
import styles from './Customers.module.css'
import images from '../../constants/images';
import Testimony from '../../components/Testimony/Testimony';

const Customers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.customerHeader}>
        <h3 className='p__cormorant'>Testimony</h3>
        <img src={images.spoon} alt="spoon logo" />
        <h1 className='subHeadtext__cormorant'>Happy Customers</h1>
      </div>
      <div className={styles.customers}>
        <Testimony image={images.chef} name={'Wade Warren'} job={'Sommelier'} quote={'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'}/>
        <Testimony image={images.chef} name={'Wade Warren'} job={'Sommelier'} quote={'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'}/>
        <Testimony image={images.chef} name={'Wade Warren'} job={'Sommelier'} quote={'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'}/>
        <Testimony image={images.chef} name={'Wade Warren'} job={'Sommelier'} quote={'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'}/>
      </div>
    </div>
  )
}

export default Customers
