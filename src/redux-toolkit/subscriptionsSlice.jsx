import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";


export const SubscriptionPlan = createAsyncThunk (
    "user/SubscriptionPlan",
    async () => {
        try {
            const response = await baseURL.get("/v1/get/subscription/plan")
            console.log(response.data.data , "response in slice")
            return response?.data?.data
        } catch (error) {
            console.log(error)
            
        }
    }
)

const subscriptionPlanSlice = createSlice({
    name:"plan",
    initialState:{
     subscriptionPlans: null,
      loading: false,
      error: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(SubscriptionPlan.pending, (state) => {
            state.loading = true;
            state.subscriptionPlans = null;
            state.error = null;
          })
          .addCase(SubscriptionPlan.fulfilled, (state, action) => {
            state.loading = false;
            state.subscriptionPlans = action.payload; 
            state.error = null;
          })
          .addCase(SubscriptionPlan.rejected, (state, action) => {
            state.loading = false;
            state.subscriptionPlans = null;
            state.error = action.error.message;
          });
    }
})

export default subscriptionPlanSlice.reducer