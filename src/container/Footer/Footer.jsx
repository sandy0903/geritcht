import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import images from "../../constants/images";

const Footer = () => (
  <div className={styles.wrapper}>
    <div>

      <div>
        <h5>Contact Us</h5>
        <p>9 W 53rd St; New York, NY 10019, USA</p>
        <p>Phone: +1 212-708-9400</p>
      </div>
      <div>
        <h1 className={styles.title}>Gerícht</h1>
        <p>
          “The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon logo" />
        <div className={styles.social}>

        <FaFacebookF/>
        <FaTwitter/>
        <IoLogoInstagram/>
        </div>
      </div>
      <div>
        <h5>Working Hours</h5>
        <p>Monday - Friday:</p>
        <p>08:00 am -12:00 am</p>
        <p>Saturday - Sunday:</p>
        <p>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div>@2021 Gericht. All Rights Reserved</div>
  </div>
);

export default Footer;
