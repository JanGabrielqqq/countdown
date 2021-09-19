import React from "react";
import styles from "./LapHistoryData.module.scss";

function LapHistoryData(props) {
  return (
    <>
      <div className={styles.LapHistoryData}>
        <h3>|</h3>
        <h3>{props.day}</h3>
        <h3>:</h3>
        <h3>{props.hour}</h3>
        <h3>:</h3>
        <h3>{props.min}</h3>
        <h3>:</h3>
        <h3>{props.sec}</h3>
        <h3>|</h3>
      </div>
    </>
  );
}

export default LapHistoryData;
