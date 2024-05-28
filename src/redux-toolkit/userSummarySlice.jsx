import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const GetSummary = createAsyncThunk(
  "user/getSummary",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/get/quiz/case/${id}`);
      console.log(response?.data?.data, "response in slice");
      return response?.data?.data
    } catch (error) {
      console.log(error);
    }
  }
);

const getSummary = createSlice({
    name: "getuserSummary",
    initialState: {
    getuserSummary: null,
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetSummary.pending, (state) => {
          state.loading = true;
          state.getuserSummary = null;
          state.error = null;
        })
        .addCase(GetSummary.fulfilled, (state, action) => {
          state.loading = false;
          state.getuserSummary = action.payload;
          state.error = null;
        })
        .addCase(GetSummary.rejected, (state, action) => {
          state.loading = false;
          state.getuserSummary = null;
          state.error = action.error.message;
        });
    },
  });
  
  export const getSummarySliceReducer = getSummary.reducer;