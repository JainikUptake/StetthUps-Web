import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const GetCaseByTopicId = createAsyncThunk(
  "user/getCaseByTopicId",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/get/case/topic/${id}`);
      console.log(response.data.data, "response in slice");
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getCaseByTopicId = createSlice({
  name: "getCaseByTopicId",
  initialState: {
    getCaseByTopicId: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCaseByTopicId.pending, (state) => {
        state.loading = true;
        state.getCaseByTopicId = null;
        state.error = null;
      })
      .addCase(GetCaseByTopicId.fulfilled, (state, action) => {
        state.loading = false;
        state.getCaseByTopicId = action.payload;
        state.error = null;
      })
      .addCase(GetCaseByTopicId.rejected, (state, action) => {
        state.loading = false;
        state.getCaseByTopicId = null;
        state.error = action.error.message;
      });
  },
});

export const getCaseByTopicIdSliceReducer = getCaseByTopicId.reducer;
