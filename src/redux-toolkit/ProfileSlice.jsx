import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

const initialState =  {
    loading: false,
    profile: null,
    error: null,
  }
  

export const logout = createAsyncThunk(
  "user/logout",
  async () => {
    try {
      // console.log()
      const response = await baseURL.get(
        `/v1/logout`
      );
      console.log(response, "main");
      return response
    } catch (error) {
      console.log(error, "error here");
    }
  }
);


      //logout
      const profileSlice = createSlice({
        name: "profile",
        initialState,
        extraReducers: (builder) => {
      builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.profile = null;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.profile = null;
        state.error = action.error.message;

      })
    }
    });

export default profileSlice.reducer;
