import { createSlice } from "@reduxjs/toolkit";

const lapTime = createSlice({
  name: "laptime",
  initialState: {
    time: null,
    lapTimeData: [],
    showLogHistory: false,
    i: 0,
  },
  reducers: {
    timeHistory(state, action) {
      state.time = action.payload;
    },
    storeLapTime(state, action) {
      state.i++;
      const data = {
        id: state.i,
        day: Math.floor(state.time / 60 / 60 / 24),
        hour: Math.floor((state.time / 60 / 60) % 24),
        min: Math.floor((state.time / 60) % 60),
        sec: Math.floor(state.time % 60),
      };
      state.lapTimeData = [data, ...state.lapTimeData];
    },
    showLogHistory(state) {
      state.showLogHistory = !state.showLogHistory;
    },
    clearLogHistory(state) {
      state.lapTimeData = [];
    },
  },
});
export const lapTimeActions = lapTime.actions;
export default lapTime;
