import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const GetResultByCaseId = createAsyncThunk(
  "user/getResultByCaseId",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/get/result/${id}`);
      console.log(response?.data?.data[0], "response in slice");
      return response?.data?.data[0]
    
    } catch (error) {
      console.log(error);
    }
  }
);

const getResultByCaseId = createSlice({
  name: "getResultByCaseId",
  initialState: {
    getResultsByCaseId: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetResultByCaseId.pending, (state) => {
        state.loading = true;
        state.getResultsByCaseId = null;
        state.error = null;
      })
      .addCase(GetResultByCaseId.fulfilled, (state, action) => {
        state.loading = false;
        state.getResultsByCaseId = action.payload;
        state.error = null;
      })
      .addCase(GetResultByCaseId.rejected, (state, action) => {
        state.loading = false;
        state.getResultsByCaseId = null;
        state.error = action.error.message;
      });
  },
});

export const getResultByCaseIdSliceReducer = getResultByCaseId.reducer;
