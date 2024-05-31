import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Login_API = process.env.REACT_APP_API_URL;




export const LoginWithEmail = createAsyncThunk(
  "auth/LoginWithEmail",
  async (userCredential, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${Login_API}/v1/email/login`, userCredential);
      console.log(response?.data?.data,"response")
      console.log(response?.data?.data?.access_token , "res token")
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const loginWithEmailSlice = createSlice({
  name: "loginWithEmail",
  initialState: {
    loginWithEmails: null, 
  token: localStorage.getItem("token") || null,
  loadingLoginWithEmail: false,
    errorLoginWithEmail: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginWithEmail.pending, (state) => {
        state.loadingLoginWithEmail = true;
        state.loginWithEmails = null;
        state.errorLoginWithEmail = null;
      })
      .addCase(LoginWithEmail.fulfilled, (state, action) => {
        state.loadingLoginWithEmail = false;
        state.token = action.payload;
        console.log(state.token.access_token, "tokennnnnnnnnnnn");
        localStorage.setItem("token", state.token.access_token);
        state.errorLoginWithEmail = null;
      })
      .addCase(LoginWithEmail.rejected, (state, action) => {
        state.loadingLoginWithEmail = false;
        state.loginWithEmails = null;
        state.errorLoginWithEmail = action.payload;
      });
  },
});

export const loginWithEmailReducer = loginWithEmailSlice.reducer;
