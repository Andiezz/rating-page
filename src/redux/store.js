import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import answerReducer from "./answerSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    answer: answerReducer,
    auth: authReducer  
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});