import React from "react";
import styles from "./CountdownWrapper.module.scss";

function CountdownWrapper(props) {
  return <div className={styles.countdown}>{props.children}</div>;
}

export default CountdownWrapper;
