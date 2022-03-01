import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
//navigation slice is our main store that separates our store in seperate pieces/slices
//configure store is something we need to establish the data layer

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});

//reducer is just setting up the store