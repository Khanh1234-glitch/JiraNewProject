import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import SignIn from "./Slices/auth/SignIn";
import  Category  from './Slices/Category';
const store = configureStore({
  reducer: {
    SignIn,
    Category
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
