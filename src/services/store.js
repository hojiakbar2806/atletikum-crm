import expandReducer from "./slices/expandSlice";
import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./slices/darkmodeSlice";

const store = configureStore({
  reducer: {
    expand: expandReducer,
    darkmode: darkmodeReducer,
  },
});

export default store;
