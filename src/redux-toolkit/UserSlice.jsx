import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const API_LOGIN = process.env.REACT_APP_API_URL;

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential) => {
    try {
      console.log(API_LOGIN, "check url");
      console.log(`${API_LOGIN}/v1/email/login/`, "double check");
      const response = await axios.post(
        `http://13.200.241.242/api/v1/email/login/ `,
        userCredential
      );
      console.log(response, "main");
    } catch (error) {
      console.log(error, "error here");
    }

    // const response = request?.data.data;
    // localStorage.setItem("user", json.stringify(response));
    // return response;
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
  },
});

export default userSlice.reducer;
