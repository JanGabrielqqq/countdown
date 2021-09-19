import React from "react";
import SocialMedia from "./SocialMedia";
import styles from "./Footer.module.scss";
import ButtonDisplay from "./ButtonDisplay";

function Footer() {
  return (
    <footer className={styles.attribution}>
      <ButtonDisplay />
      <SocialMedia />
      <div>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'
        >
          Jan Gabriel H. Que
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
