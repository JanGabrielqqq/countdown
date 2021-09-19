import React from "react";
import styles from "./SocialMedia.module.scss";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import stars from "../images/bg-stars.svg";
import hills from "../images/pattern-hills.svg";
function SocialMedia() {
  return (
    <>
      <>
        <img className={styles.imgStars} src={stars} alt='' />
        <img className={styles.imgHills} src={hills} alt='' />
      </>
      <div className={styles.socIcon}>
        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
          <img className='icons' src={facebook} alt='' />
        </a>
        <a href='https://www.pinterest.com' target='_blank' rel='noreferrer'>
          <img className='icons' src={pinterest} alt='' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <img className='icons' src={instagram} alt='' />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
