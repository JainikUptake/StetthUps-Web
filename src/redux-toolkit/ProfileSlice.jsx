import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import baseURL from "../utlis/axios";

// const initialState =  {
//     loading: false,
//     profile: null,
//     error: null,
//   }
  
// log out
  export const logout = createAsyncThunk(
    "user/logout",
    async () => {
      try {
        const response = await baseURL.get(`/v1/logout`);
        // console.log(response.data, "Logout response data");
        return response.data; // Ensure this returns the actual data
      } catch (error) {
        // console.log(error, "error here");
        throw error; // Ensure to throw the error so it can be caught in the rejected case
      }
    }
  );

  // User Profile
  export const userProfile = createAsyncThunk(
    "user/profile",
    async () => {
      try {
        const response = await baseURL.get(`/v1/get/user`);
        // console.log(response.data.data, "user profile data");
        return response.data.data; // Ensure this returns the actual data
      } catch (error) {
        // console.log(error, "error here");
        throw error; // Ensure to throw the error so it can be caught in the rejected case
      }
    }
  );

  // change password


  export const userProfileChangePassword = createAsyncThunk(
    "user/changePassword",
    async(password )=>{
      try {
        const response = await baseURL.post(`/v1/change/password`,password)
        console.log(response,"change user password")
        return response
        
      } catch (error) {
        console.log(error, "error here");
        throw  error
        
      }
      
    }
   
  )


  const profileSlice = createSlice({
    name: "profile",
    initialState: {
      profile: null,
      loading: false,
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

        // profile

        builder
        .addCase(userProfile.pending, (state) => {
          state.loading = true;
          state.profile = null;
          state.error = null;
        })
        .addCase(userProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.profile = action.payload; // Ensure this updates the profile with response data
          state.error = null;
        })
        .addCase(userProfile.rejected, (state, action) => {
          state.loading = false;
          state.profile = null;
          state.error = action.error.message;
        });


        //  user change password in profile

        builder
        .addCase(userProfileChangePassword.pending, (state) => {
          state.loading = true;
          state.profile = null;
          state.error = null;
        })
        .addCase(userProfileChangePassword.fulfilled, (state, action) => {
          state.loading = false;
          state.profile = action.payload;
          console.log(state.profile,"---profile of state here") // Ensure this updates the profile with response data
          state.error = null;
        })
        .addCase(userProfileChangePassword.rejected, (state, action) => {
          state.loading = false;
          state.profile = null;
          state.error = action.error;
        });
    },
  });
  
  export default profileSlice.reducer;
  