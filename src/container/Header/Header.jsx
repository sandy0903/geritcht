import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";
import images from "../../constants/images";
import Button from "../../components/Button/Button";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.headerSection}>
    <Navbar />
    <div className={styles.headerMain}>
      <div className={styles.headerContent}>
        <p className="p__cormorant">Chase the new Flavour</p>
        <div><img src={images.spoon} alt="spoon signature" className='spoon__img'/></div>
        <p className="headtext__cormorant">The key to Fine dining</p>
        <p className={`p__opensans ${styles.text}`}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <Button>Explore Menu</Button>
      </div>
      <div className={styles.headerImg}>
        <div className={styles.carousel}>
          <img src={images.carousel01} alt="carousel1" className="carousel__item img" />
        </div>
        <div className={styles.carouselBtn}>
          <button><GrPrevious/></button>
          <button><GrNext/></button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
