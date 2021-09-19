import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import CountdownWrapper from "./UI/CountdownWrapper";
import { useDispatch, useSelector } from "react-redux";
import { storeTimeActions } from "../Store/storeTime";
import { storeRotateActions } from "../Store/storeRotate";
import { lapTimeActions } from "../Store/LapTime";

function Coundown() {
  const dispatch = useDispatch();
  const timeStored = useSelector((state) => state.time.time);
  const timeReverseStored = useSelector((state) => state.time.timeReverse);

  const rotateSec = useSelector((state) => state.rotate.secRotate);
  const rotateMin = useSelector((state) => state.rotate.minRotate);
  const rotateHour = useSelector((state) => state.rotate.hourRotate);
  const rotateDay = useSelector((state) => state.rotate.dayRotate);

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (timeStored === null) {
      return;
    } else {
      let time = timeStored;

      const interval = setInterval(() => {
        setDay(Math.floor(time / 60 / 60 / 24));
        setHour(Math.floor((time / 60 / 60) % 24));
        setMin(Math.floor((time / 60) % 60));
        setSec(Math.floor(time % 60));
        time = time - 1;

        dispatch(storeRotateActions.rotateSec());

        if ((time + 2) % 60 === 0) {
          dispatch(storeRotateActions.rotateMin());
        }

        if (((time + 2) / 60) % 60 === 0) {
          dispatch(storeRotateActions.rotateHour());
        }

        if (((time + 2) / 60 / 60) % 24 === 0) {
          dispatch(storeRotateActions.rotateDay());
        }

        const storeTime = (time) => {
          dispatch(lapTimeActions.timeHistory(time));
        };
        storeTime(time);

        time = time < 0 ? clearInterval(interval) : time;
      }, 1000);
      const openModal = () => {
        dispatch(storeTimeActions.openModal());
      };

      const timeout = setTimeout(openModal, `${(time + 2) * 1000}`);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [timeStored, dispatch]);

  useEffect(() => {
    if (timeReverseStored === null) {
      return;
    } else {
      let time = timeReverseStored;
      const interval = setInterval(() => {
        setDay(Math.floor(time / 60 / 60 / 24));
        setHour(Math.floor((time / 60 / 60) % 24));
        setMin(Math.floor((time / 60) % 60));
        setSec(Math.floor(time % 60));
        time = time + 1;

        dispatch(storeRotateActions.rotateSec());

        if ((time + 2) % 60 === 0) {
          dispatch(storeRotateActions.rotateMin());
        }

        if (((time + 2) / 60) % 60 === 0) {
          dispatch(storeRotateActions.rotateHour());
        }

        if (((time + 2) / 60 / 60) % 24 === 0) {
          dispatch(storeRotateActions.rotateDay());
        }
        const storeTime = (time) => {
          dispatch(lapTimeActions.timeHistory(time));
        };
        storeTime(time);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timeReverseStored, dispatch]);

  return (
    <CountdownWrapper>
      <Card id='DAYS' timeCount={day} rotate={rotateDay} />
      <Card id='HOUR' timeCount={hour} rotate={rotateHour} />
      <Card id='MINUTES' timeCount={min} rotate={rotateMin} />
      <Card id='SECONDS' timeCount={sec} rotate={rotateSec} />
    </CountdownWrapper>
  );
}

export default Coundown;
