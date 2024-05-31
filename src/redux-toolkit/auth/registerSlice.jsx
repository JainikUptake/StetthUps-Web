import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Login_API = process.env.REACT_APP_API_URL;




export const GetAllStateAndCity = createAsyncThunk(
  "register/RegisterCollage",
  async () => {
    // console.log("in")
    try {
        console.log('api caled');
      const response = await axios.get(`${Login_API}/v1/get/state/city`);
    //   console.log(`${Login_API}/v1/get/state/city`)
      console.log(response?.data,"response in slice")
      return response?.data;
    } catch (error) {
        console.log(error)
      return error;
    }
  }
);

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

export const GetStateAndCitySliceReducer = GetStateAndCitySlice.reducer;
