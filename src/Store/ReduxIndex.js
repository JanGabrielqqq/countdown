import { configureStore } from "@reduxjs/toolkit";
import lapTime from "./LapTime";
import storeRotate from "./storeRotate";
import storeTime from "./storeTime";

const Store = configureStore({
  reducer: {
    time: storeTime.reducer,
    rotate: storeRotate.reducer,
    lapTime: lapTime.reducer,
  },
});

export default Store;

// useDispatch -> react-redux to dispatch data
// useSelector -> react-redux to get stored data
