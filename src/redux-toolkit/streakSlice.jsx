import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";


export const GetStreak = createAsyncThunk (
    "user/getStreak",
    async () => {
        try {
            const response = await baseURL.get("/v1/get/streak")
            console.log(response.data, "response in slice")
            return response?.data
        } catch (error) {
            console.log(error)
            
        }
    }
)
// claim life line


export const ClaimLifeLine = createAsyncThunk (
    "user/claimLifeLine",
    async () => {
        try {
            const response = await baseURL.get("/v1/streak/claim/lifeline")
            console.log(response.data, "response in slice")
            return response?.data
        } catch (error) {
            console.log(error)
            
        }
    }
)






const getStreakSlice = createSlice({
    name:"getStreak",
    initialState:{
     getStreak: null,
     loadingStreak: false,
     errorStreak: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(GetStreak.pending, (state) => {
            state.loadingStreak = true;
            state.getStreak = null;
            state.errorStreak = null;
          })
          .addCase(GetStreak.fulfilled, (state, action) => {
            state.loadingStreak = false;
            state.getStreak = action.payload; 
            state.errorStreak = null;
          })
          .addCase(GetStreak.rejected, (state, action) => {
            state.loadingStreak = false;
            state.getStreak = null;
            state.errorStreak = action.error.message;
          });
    }
})

const claimLifeLineSlice  = createSlice({
    name:"claimLifeLine",
    initialState:{
    claimLifeLine: null,
     loadingLifeLine: false,
     errorLifeLine: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(ClaimLifeLine.pending, (state) => {
            state.loadingLifeLine = true;
            state.claimLifeLine = null;
            state.errorLifeLine = null;
          })
          .addCase(ClaimLifeLine.fulfilled, (state, action) => {
            state.loadingLifeLine = false;
            state.claimLifeLine = action.payload; 
            state.errorLifeLine = null;
          })
          .addCase(ClaimLifeLine.rejected, (state, action) => {
            state.loadingLifeLine = false;
            state.claimLifeLine = null;
            state.errorLifeLine = action.error.message;
          });
    }
})

export const getStreakSliceReducer = getStreakSlice.reducer
export const claimLifeLineSliceReducer = claimLifeLineSlice.reducer
