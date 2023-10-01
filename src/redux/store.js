import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import answerReducer from "./answerSlice";

export const store = configureStore({
  reducer: {
    answer: answerReducer  
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});