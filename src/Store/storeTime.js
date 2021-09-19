import { createSlice } from "@reduxjs/toolkit";

const storeTime = createSlice({
  name: "time",
  initialState: {
    time: null,
    timeReverse: null,
    isSubmitted: true,
    radioOption: "",

    pauseOrPlay: false,
    timeStored: null,
  }, //initial states,
  reducers: {
    formSubmitted(state, action) {
      if (action.payload.radioOption === "Countdown") {
        state.time = action.payload.time;
        state.isSubmitted = action.payload.isSubmitted;
        state.radioOption = action.payload.radioOption;
        state.timeReverse = null;
        state.isSubmitted = true;
      }
      if (action.payload.radioOption === "StopWatch") {
        state.timeReverse = 0;
        state.isSubmitted = action.payload.isSubmitted;
        state.radioOption = action.payload.radioOption;
        state.time = null;
        state.isSubmitted = true;
      }
    },
    openModal(state, action) {
      state.time = null;
      state.timeReverse = null;
      state.isSubmitted = false;
    },
    setPauseOrPlay(state, action) {
      state.pauseOrPlay = !state.pauseOrPlay;
      if (state.pauseOrPlay === true && state.radioOption === "Countdown") {
        state.time = null;
        state.timeStored = action.payload;
      }
      if (state.pauseOrPlay === false && state.radioOption === "Countdown") {
        state.time = state.timeStored;
        state.timeStored = null;
      }
      if (state.pauseOrPlay === true && state.radioOption === "StopWatch") {
        state.timeReverse = null;
        state.timeStored = action.payload;
      }
      if (state.pauseOrPlay === false && state.radioOption === "StopWatch") {
        state.timeReverse = state.timeStored;
        state.timeStored = null;
      }
    },
  },
});

export const storeTimeActions = storeTime.actions;
export default storeTime;
