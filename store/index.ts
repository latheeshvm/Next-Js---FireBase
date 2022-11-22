import { configureStore } from "@reduxjs/toolkit";
import ActionSlice from "../features/actions/actionSlice"

const store = configureStore({
    reducer: {
     actions: ActionSlice
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store