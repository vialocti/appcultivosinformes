import { configureStore } from "@reduxjs/toolkit";

import infoSlice from "./info.slice";


export const store = configureStore({
    reducer:{
        info:infoSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
