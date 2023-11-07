import React from "react";
import {RiArrowDropDownLine} from "react-icons/ri";
import styles from "./Navbar.module.css";
import images from "../../constants/images";
const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbarLogo}>
        <img src={images.name} alt="logo" />
      </div>
      <ul className={styles.app__navbarLinks}>
        <li className={styles.linksItem}>
          <a href="#home">Home</a>
        </li>
        <li className={`${styles.linksItem} ${styles.submenu}`}>
          <a href="#about">Pages</a>
          <span><RiArrowDropDownLine/></span>
          <ul className={styles.linksItem__submenu}>
            <li className={`${styles.linksItem} ${styles.submenuItem}`}><a href="#about">About Us</a> </li>
            <li className={`${styles.linksItem} ${styles.submenuItem}`}><a href="#about">Service</a></li>
          </ul>
        </li>
        <li className={`${styles.linksItem}`}>
          <a href="#menu">Contact Us</a>
        </li>
        <li className={`${styles.linksItem}`}>
          <a href="#award">Blog</a>
        </li>
      </ul>
      <div className={styles.app__navbarBookTable}>
        <a href="/" className="p__cormorant">
          Reservation
        </a>
        <span className={styles.underline}></span>
      </div>
    </nav>
  );
};

export default Navbar;
