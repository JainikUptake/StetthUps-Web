import { configureStore } from "@reduxjs/toolkit";
import { loginWithEmailReducer } from "./authSlice";
import { GetAllCollegesSliceReducer, GetStateAndCitySliceReducer, RegisterUserSliceReducer } from "./auth/registerSlice";

const store = configureStore({
    reducer: {
        userLoginWithEmail:loginWithEmailReducer,
        GetStateAndCity:GetStateAndCitySliceReducer,
        GetAllColleges:GetAllCollegesSliceReducer,
        RegisterUser:RegisterUserSliceReducer,
    },
});
export default store;