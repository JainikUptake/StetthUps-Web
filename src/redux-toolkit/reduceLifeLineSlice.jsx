import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const ReduceLifeLineByUser = createAsyncThunk(
  "user/reduceLifeLine",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/reduce/lifeline`);
      console.log(response?.data, "response in slice");
      return response?.data
    } catch (error) {
      console.log(error);
    }
  }
);

const reduceLifeLine = createSlice({
  name: "reduceLifeLine",
  initialState: {
    reduceLifeLine: null,
    loadingLifeLine: false,
    errorLifeLine: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ReduceLifeLineByUser.pending, (state) => {
        state.loadingLifeLine = true;
        state.reduceLifeLine = null;
        state.errorLifeLine = null;
      })
      .addCase(ReduceLifeLineByUser.fulfilled, (state, action) => {
        state.loadingLifeLine = false;
        state.reduceLifeLine = action.payload;
        state.errorLifeLine = null;
      })
      .addCase(ReduceLifeLineByUser.rejected, (state, action) => {
        state.loadingLifeLine = false;
        state.reduceLifeLine = null;
        state.errorLifeLine = action.error.message;
      });
  },
});

export const reduceLifeLineSliceReducer = reduceLifeLine.reducer;
