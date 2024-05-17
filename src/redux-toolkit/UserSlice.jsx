import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const API_LOGIN = process.env.REACT_APP_API_URL;

// declare initialState here

const initialState =  {
  loading: false,
  token:localStorage.getItem("token"),
  user: null,
  error: null,
}


// register fill collage 

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

// register verify User
export const verifyUser = createAsyncThunk(
  "user/verifyUser",
  async (userCredentials) => {
    try {
      // console.log()
      const response = await axios.post(
        `${API_LOGIN}/v1/verify/otp`,userCredentials
      );
      console.log(response.data.data.access_token, "main");
      return response.data.data
    } catch (error) {
      console.log(error, "error here");
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async () => {
    try {
      // console.log()
      const response = await axios.post(
        `${API_LOGIN}/v1/logout`
      );
      // console.log(response.data.data.access_token, "main");
      return response
    } catch (error) {
      console.log(error, "error here");
    }
  }
);






//  login user

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential) => {
    try {
      const response = await axios.post(
        `${API_LOGIN}/v1/email/login`,
        userCredential
      );
      console.log(response.data.data, "main");
      return response.data.data
    } catch (error) {
      console.log(error, "error here");
    }
  }
);

//  login with phonenumber 


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

// Slice of all auth

const userSlice = createSlice({
  name: "user",
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        console.log(state.token.access_token,"tokennnnnnnnnnnn")
        localStorage.setItem("token",state.token.access_token)
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

      // verify user

      builder
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        console.log(state.token.access_token,"tokennnnnnnnnnnn")
        localStorage.setItem("token",state.token.access_token)
        state.error = null;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;

      });

      //logout
      builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;

      });
  },
});

export default userSlice.reducer;
