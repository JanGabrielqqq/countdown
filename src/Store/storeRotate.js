import { createSlice } from "@reduxjs/toolkit";

const storeRotate = createSlice({
  name: "rotate",
  initialState: {
    dayRotate: 0,
    hourRotate: 0,
    minRotate: 0,
    secRotate: 0,
  },
  reducers: {
    rotateDay(state) {
      state.dayRotate = state.dayRotate + 360;
    },
    rotateHour(state) {
      state.hourRotate = state.hourRotate + 360;
    },
    rotateMin(state) {
      state.minRotate = state.minRotate + 360;
    },
    rotateSec(state) {
      state.secRotate = state.secRotate + 360;
    },
  },
});

export const storeRotateActions = storeRotate.actions;
export default storeRotate;
