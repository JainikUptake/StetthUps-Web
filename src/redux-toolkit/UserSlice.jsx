import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const API_LOGIN = process.env.REACT_APP_API_URL;

// register

export const registerClg = createAsyncThunk(
  "user/getAllColleges",
  async () => {
    try {
      const response = await axios.get(
        `${API_LOGIN}/v1/get/colleges`
      );
      console.log(response, "main");
      return response
    } catch (error) {
      console.log(error, "error here");
    }
  }
);









export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential) => {
    try {
      const response = await axios.post(
        `${API_LOGIN}/v1/email/login`,
        userCredential
      );
      console.log(response, "main");
    } catch (error) {
      console.log(error, "error here");
    }
  }
);

// 
export const loginWithPhone = createAsyncThunk(
  "user/loginWithPhone",
  async ({userPhone}) => {
    console.log(userPhone, " in block")

    try {
      console.log(userPhone, " in block")
      const response = await axios.post(
        `${API_LOGIN}/v1/send/otp`,
        userPhone
      );
      console.log(response, "main");
      return response
    } catch (error) {
      console.log(error, "------------------error here");
      throw error
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "request failed ") {
          state.error = "access denied";
        } else {
          state.error = action.error.message;
        }
      });



      // login with number

      builder
      .addCase(loginWithPhone.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginWithPhone.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginWithPhone.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
        console.log(state.error , "rtk error here<<<<<<<<<<<<<<<<<<")

      });

      // register Clg
      builder
      .addCase(registerClg.pending, (state) => {
        state.loading = true;
        // state.user = null;
        state.error = null;
      })
      .addCase(registerClg.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
        state.error = null;
      })
      .addCase(registerClg.rejected, (state, action) => {
        state.loading = false;
        // state.user = null;
        state.error = action.error.message;

      });
  },
});

export default userSlice.reducer;
