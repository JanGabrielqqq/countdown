import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div
          className={styles.topdiv}
          style={{ transform: `rotateX(${props.rotate}deg)` }}
          id={props.id}
        >
          <h1>{props.timeCount}</h1>
          <div className={styles.lefthalfcircle}></div>

          <div className={styles.righthalfcircle}></div>
        </div>

        <div className={styles.halfbotdiv}></div>
      </div>
      <div>
        <p>{props.id}</p>
      </div>
    </div>
  );
}

export default Card;
