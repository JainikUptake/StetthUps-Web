import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

// Make Result By Quiz

export const makeResult = createAsyncThunk(
  "user/makeResult",
  async (userScore) => {
    try {
      // console.log()
      const response = await baseURL.post(`/v1/make/result`, userScore);
      console.log(response, "main");
      return response
    } catch (error) {
      console.log(error, "error here");
    }
  }
);


const makeResultByQuiz = createSlice({
    name:"makesResultByQuiz",
    initialState:{
        makeResultByQuiz: null,
     loadingMakeResult: false,
     errorMakeResult: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(makeResult.pending, (state) => {
            state.loadingMakeResult = true;
            state.makeResultByQuiz = null;
            state.errorMakeResult = null;
          })
          .addCase(makeResult.fulfilled, (state, action) => {
            state.loadingMakeResult = false;
            state.makeResultByQuiz = action.payload; 
            state.errorMakeResult = null;
          })
          .addCase(makeResult.rejected, (state, action) => {
            state.loadingMakeResult = false;
            state.makeResultByQuiz = null;
            state.errorMakeResult = action.error.message;
          });
    }
})



export const makeResultByQuizSliceReducer = makeResultByQuiz.reducer;
