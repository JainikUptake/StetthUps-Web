import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

export const GetCaseByCaseId = createAsyncThunk(
  "user/getCaseByCaseId",
  async (id) => {
    try {
      const response = await baseURL.get(`/v1/get/case/${id}`);
      console.log(response.data.data, "response in slice");
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getCaseByCaseId = createSlice({
  name: "getCaseByTopicId",
  initialState: {
    getCaseByCaseId: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCaseByCaseId.pending, (state) => {
        state.loading = true;
        state.getCaseByCaseId = null;
        state.error = null;
      })
      .addCase(GetCaseByCaseId.fulfilled, (state, action) => {
        state.loading = false;
        state.getCaseByCaseId = action.payload;
        state.error = null;
      })
      .addCase(GetCaseByCaseId.rejected, (state, action) => {
        state.loading = false;
        state.getCaseByCaseId = null;
        state.error = action.error.message;
      });
  },
});

export const getCaseByCaseIdSliceReducer = getCaseByCaseId.reducer;
