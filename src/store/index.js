import { configureStore } from "@reduxjs/toolkit";

import infoSlice from "./info.slice";
import authSlice from "./auth.slice";


export const store = configureStore({
    reducer:{
        info:infoSlice,
        authuser:authSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
