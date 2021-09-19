import React from "react";
import styles from "./LapHistoryModal.module.scss";
// import Context from "../Context/Context";
import Button from "../UI/Button";
import LapHistoryData from "../UI/LapHistoryData";
import { useDispatch, useSelector } from "react-redux";
import { lapTimeActions } from "../../Store/LapTime";
import CSSTransition from "react-transition-group/CSSTransition";

function LapHistoryModal(props) {
  const dispatch = useDispatch();
  const lapHistory = useSelector((state) => state.lapTime.lapTimeData);
  const addLapHistory = () => {
    dispatch(lapTimeActions.storeLapTime());
  };
  const showLogHistory = () => {
    dispatch(lapTimeActions.showLogHistory());
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.showLogHistory}
      timeout={500}
      classNames={{
        enterActive: styles.modalOpening,
        enterDone: "",
        exitActive: styles.modalClosing,
        exitDone: "",
      }}
    >
      <div className={styles.overlay}>
        {props.showLogHistory && (
          <div className={styles.backdrop} onClick={showLogHistory}></div>
        )}
        <div className={styles.LapHistoryLog}>
          <div className={styles.LapHistoryLogHeader}>
            <h3>Lap History Log</h3>
          </div>
          <div className={styles.LapHistoryLogSemiHeader}>
            <h3>Day:</h3>
            <h3>Hour:</h3>
            <h3>Min:</h3>
            <h3>Sec:</h3>
          </div>
          <div className={styles.LapHistoryBody}>
            {lapHistory.map((data) => (
              <LapHistoryData
                key={data.id}
                day={data.day}
                hour={data.hour}
                min={data.min}
                sec={data.sec}
              />
            ))}
          </div>
          <div className={styles.modalButton}>
            <Button innerText={"Lap"} onClick={addLapHistory} />
            <Button innerText={"Close"} onClick={showLogHistory} />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default LapHistoryModal;
