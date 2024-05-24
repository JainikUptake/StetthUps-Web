import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const GetQuizByCaseId = createAsyncThunk(
  "user/getQuizByCaseId",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/get/quiz/case/${id}`);
      console.log(response?.data?.data[0]?.quiz, "response in slice");
      return response?.data?.data[0]?.quiz;
    } catch (error) {
      console.log(error);
    }
  }
);

const getQuizByCaseId = createSlice({
    name: "getQuizByCaseId",
    initialState: {
    getQuizByCaseId: null,
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetQuizByCaseId.pending, (state) => {
          state.loading = true;
          state.getQuizByCaseId = null;
          state.error = null;
        })
        .addCase(GetQuizByCaseId.fulfilled, (state, action) => {
          state.loading = false;
          state.getQuizByCaseId = action.payload;
          state.error = null;
        })
        .addCase(GetQuizByCaseId.rejected, (state, action) => {
          state.loading = false;
          state.getQuizByCaseId = null;
          state.error = action.error.message;
        });
    },
  });
  
  export const getQuizByCaseIdSliceReducer = getQuizByCaseId.reducer;