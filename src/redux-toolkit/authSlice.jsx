import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const REGISTER_API = process.env.REACT_APP_API_URL;

const initialState = {
  loading: false,
  token: localStorage.getItem("token") || null,
  error: null,
};


export const LoginWithEmail = createAsyncThunk (
    "auth/LoginWithEmail",
    async () => {
        try {
            // const response = await baseURL.get(`/v1/get/subscription/user`)
            // console.log(response.data.data , "response in slice")
            // return response?.data?.data
            console.log('hi auth')
        } catch (error) {
            console.log(error)
            
        }
    }
  )
const loginWithEmailSlice = createSlice({
    name:"loginWithEmail",
    initialState:{
        loginWithEmail: null,
     
     loadingLoginWithEmail: false,
     errorLoginWithEmail: null,
    }, 
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(LoginWithEmail.pending, (state) => {
            state.loadingLoginWithEmail = true;
            state.loginWithEmail = null;
            state.errorLoginWithEmail = null;
          })
          .addCase(LoginWithEmail.fulfilled, (state, action) => {
            state.loadingLoginWithEmail = false;
            state.loginWithEmail = action.payload; 
            state.errorLoginWithEmail = null;
          })
          .addCase(LoginWithEmail.rejected, (state, action) => {
            state.loadingLoginWithEmail = false;
            state.loginWithEmail = null;
            state.errorLoginWithEmail = action.error.message;
          });
    }
  })


export const loginWithEmailReducer = loginWithEmailSlice.reducer