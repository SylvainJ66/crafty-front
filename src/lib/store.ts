import {configureStore} from "@reduxjs/toolkit";
import {timelinesSlice} from "@/lib/timelines/slices/timelines.slice.ts";

export const store = configureStore({
    reducer: timelinesSlice.reducer,
});