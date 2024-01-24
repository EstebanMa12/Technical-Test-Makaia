import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import {thunk} from 'redux-thunk'



export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: () => [thunk],
});

