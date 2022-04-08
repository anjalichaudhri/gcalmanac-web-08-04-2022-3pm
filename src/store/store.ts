import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./reducers/userSlice";

const store = configureStore({
    reducer: {
        userInfo: userSlice,
    },
    middleware: [thunk],
});

export default store;
