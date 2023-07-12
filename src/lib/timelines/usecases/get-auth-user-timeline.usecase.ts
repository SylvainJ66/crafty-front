import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAuthUserTimeline = createAsyncThunk(
    "timelines/getAuthUserTimeline",
    () => {
        return {
            user: "Alice",
            messages:[
                {
                    text: "Hello it's Bob",
                    author: "Bob",
                    publishedAt: "2023-05-16T12:06:00.000Z"
                },
                {
                    text: "Hello it's Alice",
                    author: "Alice",
                    publishedAt: "2023-05-16T12:05:00.000Z"
                },
            ]
        }
    }
)