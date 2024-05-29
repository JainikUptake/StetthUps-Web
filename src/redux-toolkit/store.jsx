import { configureStore } from "@reduxjs/toolkit";
import { loginWithEmailReducer } from "./authSlice";

const store = configureStore({
    reducer: {
        user:loginWithEmailReducer,
    },
});
export default store;