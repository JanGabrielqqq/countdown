import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <>
      <button
        className={styles.button}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.innerText}
      </button>
    </>
  );
}

export default Button;
