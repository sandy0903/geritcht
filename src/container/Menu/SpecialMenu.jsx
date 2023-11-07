import React from 'react';
import Button from '../../components/Button/Button';
import images from '../../constants/images';
import styles from './SpecialMenu.module.css';

const SpecialMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.menuHeader}>
      <h3 className='p__cormorant'>Menu that fits you palatte</h3>
      <img src={images.spoon} alt="spoon logo" />
      <h1 className='subHeadtext__cormorant'>Today's special</h1>
    </div>
    <div className={styles.menuElement}>
      <div className={styles.menuContent}>
        <h1 className='subText__cormorant'>Wine & Beer</h1>
        <ul>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Chapel Hill Shiraz</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$56</p>
            </div>
            <p className='p__opensans'>AU | Bottle</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Catena Malbec</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$59</p>
            </div>
            <p className='p__opensans'>AR | Bottle</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>La Vieille Rosé</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$44</p>
            </div>
            <p className='p__opensans'>FR | 750 ml</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Rhino Pale Ale</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$31</p>
            </div>
            <p className='p__opensans'>CA | 750 ml</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Irish Guinness</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$26</p>
            </div>
            <p className='p__opensans'>IE | 750 ml</p>
          </li>
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <img src={images.menu} alt="menu section" />
      </div>
      <div className={styles.menuContent}>
        <h1 className='subText__cormorant'>Cocktails</h1>
        <ul>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Aperol Spritz</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$20</p>
            </div>
            <p className='p__opensans'>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Dark 'N' Stormy</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$16</p>
            </div>
            <p className='p__opensans'>Dark rum | Ginger beer | Slice of lime. </p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Daiquiri</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$10</p>
            </div>
            <p className='p__opensans'>Rum | Citrus juice | Sugar</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Old Fashioned</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$31</p>
            </div>
            <p className='p__opensans'>Bourbon | Brown sugar | Angostura Bitters</p>
          </li>
          <li>
            <div>
              <h5 className='p__cormorantGolden'>Negroni</h5>
              <span className={styles.spaceLine}></span>
              <p className='p__cormorant'>$26</p>
            </div>
            <p className='p__opensans'>Gin | Sweet Vermouth | Campari | Orange garnish</p>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.menuFooter}>
      <Button>View More</Button>
    </div>
  </div>
);

export default SpecialMenu;
