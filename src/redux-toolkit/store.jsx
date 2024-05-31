import { configureStore } from "@reduxjs/toolkit";
import { loginWithEmailReducer } from "./authSlice";
import { GetStateAndCitySliceReducer } from "./auth/registerSlice";

const store = configureStore({
    reducer: {
        userLoginWithEmail:loginWithEmailReducer,
        GetStateAndCity:GetStateAndCitySliceReducer,
    },
});
export default store;