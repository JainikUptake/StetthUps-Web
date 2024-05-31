import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Login_API = process.env.REACT_APP_API_URL;

// Get State And City
export const GetAllStateAndCity = createAsyncThunk(
  "city/State",
  async () => {
    try {
      console.log("api caled");
      const response = await axios.get(`${Login_API}/v1/get/state/city`);

      console.log(response?.data, "response in slice");
      return response?.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

// Get All College
export const GetAllColleges = createAsyncThunk(
    "register/getAllColleges",
    async () => {
      try {
        console.log("api caled");
        const response = await axios.get(`${Login_API}/v1/get/colleges`);
  
        console.log(response?.data, "response in slice");
        return response?.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  );
  
// User Register 
export const RegisterUser = createAsyncThunk("registerUser", async (body) => {
    try {
      const response = await axios.post(`${Login_API}/v1/register`, body);
      console.log(response, "check response from toolkit");
  
      return response;
    } catch (error) {
      // console.log(error);
      return error;
    }
  });


const GetStateAndCitySlice = createSlice({
  name: "registerCollage",
  initialState: {
    allStateAndCity: null,
    loadingStateAndCity: false,
    errorStateAndCity: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllStateAndCity.pending, (state) => {
        state.loadingStateAndCity = true;
        state.allStateAndCity = null;
        state.errorStateAndCity = null;
      })
      .addCase(GetAllStateAndCity.fulfilled, (state, action) => {
        state.loadingStateAndCity = false;
        state.allStateAndCity = action.payload;
        state.errorStateAndCity = null;
      })
      .addCase(GetAllStateAndCity.rejected, (state, action) => {
        state.loadingStateAndCity = false;
        state.allStateAndCity = null;
        state.errorStateAndCity = action.payload;
      });
  },
});

const GetAllCollegesSlice = createSlice({
    name: "registerCollage",
    initialState: {
      allCollege: null,
      loadingAllCollege: false,
      errorAllCollege: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetAllColleges.pending, (state) => {
          state.loadingAllCollege = true;
          state.allCollege = null;
          state.errorAllCollege = null;
        })
        .addCase(GetAllColleges.fulfilled, (state, action) => {
          state.loadingAllCollege = false;
          state.allCollege = action.payload;
          state.errorAllCollege = null;
        })
        .addCase(GetAllColleges.rejected, (state, action) => {
          state.loadingAllCollege = false;
          state.allCollege = null;
          state.errorAllCollege = action.payload;
        });
    },
  });
  
  const RegisterUserSlice = createSlice({
    name: "registerUser",
    initialState: {
      getRegisterUser: null,
      loadingRegisterUser: false,
      errorRegisterUser: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(RegisterUser.pending, (state) => {
          state.loadingRegisterUser = true;
          state.getRegisterUser = null;
          state.errorRegisterUser = null;
        })
        .addCase(RegisterUser.fulfilled, (state, action) => {
          state.loadingAllCollege = false;
          state.getRegisterUser = action.payload;
          state.errorRegisterUser = null;
        })
        .addCase(RegisterUser.rejected, (state, action) => {
          state.loadingRegisterUser = false;
          state.getRegisterUser = null;
          state.errorRegisterUser = action.payload;
        });
    },
  });
export const GetStateAndCitySliceReducer = GetStateAndCitySlice.reducer;
export const GetAllCollegesSliceReducer = GetAllCollegesSlice.reducer;
export const RegisterUserSliceReducer = RegisterUserSlice.reducer;


