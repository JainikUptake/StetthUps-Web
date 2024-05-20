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
        const response = await baseURL.get(`/v1/logout`);
        console.log(response.data, "Logout response data");
        return response.data; // Ensure this returns the actual data
      } catch (error) {
        console.log(error, "error here");
        throw error; // Ensure to throw the error so it can be caught in the rejected case
      }
    }
  );
  

  const profileSlice = createSlice({
    name: "profile",
    initialState: {
      loading: false,
      profile: null,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(logout.pending, (state) => {
          state.loading = true;
          state.profile = null;
          state.error = null;
        })
        .addCase(logout.fulfilled, (state, action) => {
          state.loading = false;
          state.profile = action.payload; // Ensure this updates the profile with response data
          state.error = null;
        })
        .addCase(logout.rejected, (state, action) => {
          state.loading = false;
          state.profile = null;
          state.error = action.error.message;
        });
    },
  });
  
  export default profileSlice.reducer;
  