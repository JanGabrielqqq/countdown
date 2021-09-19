import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { storeTimeActions } from "../../Store/storeTime";
import CSSTransition from "react-transition-group/CSSTransition";

function Modal(props) {
  const dispatch = useDispatch();

  const [formDisabled, setFormDisabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [inputDay, setInputDay] = useState("");
  const [inputHour, setInputHour] = useState("");
  const [inputMin, setInputMin] = useState("");
  const [inputSec, setInputSec] = useState("");
  const [radioOption, setRadioOption] = useState("");

  const dayHandler = (event) => {
    setInputDay(event.target.value);
  };
  const hourHandler = (event) => {
    setInputHour(event.target.value);
  };
  const minHandler = (event) => {
    setInputMin(event.target.value);
  };
  const secHandler = (event) => {
    setInputSec(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      time:
        +inputDay * 3600 * 24 + +inputHour * 3600 + +inputMin * 60 + +inputSec,
      isSubmitted: true,
      radioOption: radioOption,
    };
    setInputDay("");
    setInputHour("");
    setInputMin("");
    setInputSec("");
    setRadioOption("");

    dispatch(storeTimeActions.formSubmitted(data));
  };
  useEffect(() => {
    if (radioOption === "") {
      setButtonDisabled(false);
      setFormDisabled(false);
    }

    if (radioOption === "StopWatch") {
      setFormDisabled(false);
      setButtonDisabled(true);
    }
    if (radioOption === "Countdown") {
      setFormDisabled(true);
    }
    if (
      radioOption === "Countdown" &&
      inputSec === "" &&
      inputMin === "" &&
      inputHour === "" &&
      inputDay === ""
    ) {
      setButtonDisabled(false);
    }
    if (
      inputSec !== "" ||
      inputMin !== "" ||
      inputHour !== "" ||
      inputDay !== ""
    ) {
      setButtonDisabled(true);
    }
  }, [inputSec, inputMin, inputHour, inputDay, radioOption]);

  const radioOptionHandler = (event) => {
    setRadioOption(event.target.value);
  };

  useEffect(() => {
    const openModal = () => {
      dispatch(storeTimeActions.openModal());
    };
    setTimeout(openModal, 300);
  }, [dispatch]);

  return (
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={!props.isSubmitted}
        appear={!props.isSubmitted}
        timeout={500}
        classNames={{
          enterActive: styles.modalOpening,
          enterDone: "",
          exitActive: styles.modalClosing,
          exitDone: "",
        }}
      >
        <div className={styles.overlay}>
          {!props.isSubmitted && <div className={styles.backdrop}></div>}
          <div className={styles.modal}>
            <h2>Set Countdown</h2>

            <form onSubmit={submitHandler}>
              <div className={styles.radio} onChange={radioOptionHandler}>
                <label className={styles.radioLabel}>
                  <input
                    type='radio'
                    className={styles.radioInput}
                    name='option'
                    value='Countdown'
                  />
                  <div className={styles.radioButton}></div>
                  Countdown
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type='radio'
                    className={styles.radioInput}
                    name='option'
                    value='StopWatch'
                  />
                  <div className={styles.radioButton}></div>
                  StopWatch
                </label>
              </div>

              <div className={styles.form}>
                <label className={styles.label}>DAY</label>
                <input
                  className={styles.input}
                  type='number'
                  onChange={dayHandler}
                  disabled={!formDisabled}
                />
                <br />
                <label className={styles.label}>HOUR</label>
                <input
                  className={styles.input}
                  type='number'
                  onChange={hourHandler}
                  disabled={!formDisabled}
                />
                <br />
                <label className={styles.label}>MINUTES</label>
                <input
                  className={styles.input}
                  type='number'
                  onChange={minHandler}
                  disabled={!formDisabled}
                />
                <br />
                <label className={styles.label}>SECONDS</label>
                <input
                  className={styles.input}
                  type='number'
                  onChange={secHandler}
                  disabled={!formDisabled}
                />
                <Button disabled={!buttonDisabled} innerText='Sumbit' />{" "}
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Modal;
