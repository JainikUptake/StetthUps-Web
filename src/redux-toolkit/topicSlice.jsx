import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";


export const GetTopicBySubjectId = createAsyncThunk (
    "user/getTopicBySubjectId",
    async (id) => {
        try {
            const response = await baseURL.get(`/v1/get/topic/${id}`)
            console.log(response.data.data, "response in slice")
            return response?.data?.data
        } catch (error) {
            console.log(error)
            
        }
    }
)

const getTopicBySubjectId = createSlice({
    name:"getTopicBySubjectID",
    initialState:{
        getTopicBySubjectID: null,
     loading: false,
     error: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(GetTopicBySubjectId.pending, (state) => {
            state.loading = true;
            state.getTopicBySubjectID = null;
            state.error = null;
          })
          .addCase(GetTopicBySubjectId.fulfilled, (state, action) => {
            state.loading = false;
            state.getTopicBySubjectID = action.payload; 
            state.error = null;
          })
          .addCase(GetTopicBySubjectId.rejected, (state, action) => {
            state.loading = false;
            state.getTopicBySubjectID = null;
            state.error = action.error.message;
          });
    }
})



export const getTopicBySubjectIdSliceReducer = getTopicBySubjectId.reducer;
