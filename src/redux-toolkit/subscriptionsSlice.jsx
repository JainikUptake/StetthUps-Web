import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";


export const SubscriptionPlan = createAsyncThunk (
    "user/SubscriptionPlan",
    async () => {
        try {
            const response = await baseURL.get("/v1/get/subscription/plan")
            // console.log(response.data.data , "response in slice")
            return response?.data?.data
        } catch (error) {
            console.log(error)
            
        }
    }
)


export const SubscriptionPlanById = createAsyncThunk (
  "user/SubscriptionPlanByid",
  async (id) => {
      try {
          const response = await baseURL.get(`/v1/get/subscription/plan/${id}`)
          // console.log(response.data.data , "response in slice")
          return response?.data?.data
      } catch (error) {
          console.log(error)
          
      }
  }
)

export const SubscriptionPlanByUser = createAsyncThunk (
  "user/SubscriptionPlanByUser",
  async () => {
      try {
          const response = await baseURL.get(`/v1/get/subscription/user`)
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
     loadingPlans: false,
     errorPlans: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(SubscriptionPlan.pending, (state) => {
            state.loadingPlans = true;
            state.subscriptionPlans = null;
            state.errorPlans = null;
          })
          .addCase(SubscriptionPlan.fulfilled, (state, action) => {
            state.loadingPlans = false;
            state.subscriptionPlans = action.payload; 
            state.errorPlans = null;
          })
          .addCase(SubscriptionPlan.rejected, (state, action) => {
            state.loadingPlans = false;
            state.subscriptionPlans = null;
            state.errorPlans = action.error.message;
          });
    }
})
const subscriptionPlanByIdSlice = createSlice({
  name:"planid",
  initialState:{
   subscriptionPlanById: null,
   
    loading: false,
    error: null,
  }, 
  reducers:{},
  extraReducers: (builder) =>{
      builder
      .addCase(SubscriptionPlanById.pending, (state) => {
          state.loading = true;
          state.subscriptionPlanById = null;
          state.error = null;
        })
        .addCase(SubscriptionPlanById.fulfilled, (state, action) => {
          state.loading = false;
          state.subscriptionPlanById = action.payload; 
          state.error = null;
        })
        .addCase(SubscriptionPlanById.rejected, (state, action) => {
          state.loading = false;
          state.subscriptionPlanById = null;
          state.error = action.error.message;
        });
  }
})

// buy subscription plan by user
const subscriptionPlanByUserSlice = createSlice({
  name:"planUser",
  initialState:{
   subscriptionPlanByUser: null,
   
   loadingUserPlans: false,
   errorUserPlans: null,
  }, 
  reducers:{},
  extraReducers: (builder) =>{
      builder
      .addCase(SubscriptionPlanByUser.pending, (state) => {
          state.loadingUserPlans = true;
          state.subscriptionPlanByUser = null;
          state.errorUserPlans = null;
        })
        .addCase(SubscriptionPlanByUser.fulfilled, (state, action) => {
          state.loadingUserPlans = false;
          state.subscriptionPlanByUser = action.payload; 
          state.errorUserPlans = null;
        })
        .addCase(SubscriptionPlanByUser.rejected, (state, action) => {
          state.loadingUserPlans = false;
          state.subscriptionPlanByUser = null;
          state.errorUserPlans = action.error.message;
        });
  }
})
// 
export const subscriptionPlanReducer = subscriptionPlanSlice.reducer
export const subscriptionPlanByIdReducer = subscriptionPlanByIdSlice.reducer

export const subscriptionPlanByUserReducer = subscriptionPlanByUserSlice.reducer