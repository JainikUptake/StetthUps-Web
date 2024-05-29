import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";


export const GetSubject = createAsyncThunk (
    "user/getSubject",
    async () => {
        try {
            const response = await baseURL.get("/v1/get/subject")
            console.log(response.data.data, "response in slice")
            return response?.data?.data
        } catch (error) {
            console.log(error)
            
        }
    }
)








const getSubjectSlice = createSlice({
    name:"getSubject",
    initialState:{
     getSubject: null,
     loading: false,
     error: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(GetSubject.pending, (state) => {
            state.loading = true;
            state.getSubject = null;
            state.error = null;
          })
          .addCase(GetSubject.fulfilled, (state, action) => {
            state.loading = false;
            state.getSubject = action.payload; 
            state.error = null;
          })
          .addCase(GetSubject.rejected, (state, action) => {
            state.loading = false;
            state.getSubject = null;
            state.error = action.error.message;
          });
    }
})



export const getSubjectSliceReducer = getSubjectSlice.reducer;



