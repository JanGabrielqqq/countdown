import Button from "./UI/Button";
import styles from "./ButtonDisplay.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { storeTimeActions } from "../Store/storeTime";
import { lapTimeActions } from "../Store/LapTime";

function ButtonDisplay() {
  const dispatch = useDispatch();
  const lapTime = useSelector((state) => state.lapTime.time);
  const stopInterval = () => {
    dispatch(storeTimeActions.openModal());
    dispatch(lapTimeActions.clearLogHistory());
  };
  const radioOption = useSelector((state) => state.time.radioOption);

  const pauseAndPlay = (event) => {
    dispatch(storeTimeActions.setPauseOrPlay(lapTime));
  };
  const addLapHistory = () => {
    dispatch(lapTimeActions.storeLapTime());
  };
  const showLogHistory = () => {
    dispatch(lapTimeActions.showLogHistory());
  };

  return (
    <>
      {radioOption === "Countdown" && (
        <div className={styles.buttonDisplay}>
          <Button innerText={"\u23F8|\u23F5"} onClick={pauseAndPlay} />
          <Button innerText='RESET' onClick={stopInterval} />
        </div>
      )}
      {radioOption === "StopWatch" && (
        <div className={styles.buttonDisplay}>
          <Button innerText={"\u23F8|\u23F5"} onClick={pauseAndPlay} />
          <Button innerText='RESET' onClick={stopInterval} />
          <Button innerText='LAP' onClick={addLapHistory} />
          <Button innerText='Show Lap History' onClick={showLogHistory} />
        </div>
      )}
    </>
  );
}

export default ButtonDisplay;
