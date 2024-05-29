import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const GetStatistics = createAsyncThunk(
  "user/getStatistics",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/get/statistics`);
      console.log(response?.data?.data, "response in slice");
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getStatistics = createSlice({
  name: "getAllStatistics",
  initialState: {
    getUserStatistics: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetStatistics.pending, (state) => {
        state.loading = true;
        state.getUserStatistics = null;
        state.error = null;
      })
      .addCase(GetStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.getUserStatistics = action.payload;
        state.error = null;
      })
      .addCase(GetStatistics.rejected, (state, action) => {
        state.loading = false;
        state.getUserStatistics = null;
        state.error = action.error.message;
      });
  },
});

export const getStatisticsSliceReducer = getStatistics.reducer;