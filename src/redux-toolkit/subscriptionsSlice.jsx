import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";


export const SubscriptionPlan = createAsyncThunk (
    "user/SubscriptionPlan",
    async () => {
        try {
            const response = await baseURL.post("/v1/get/subscription/plan")
            
        } catch (error) {
            
        }
    }
)