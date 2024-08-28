import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    },
})

export default appStore;