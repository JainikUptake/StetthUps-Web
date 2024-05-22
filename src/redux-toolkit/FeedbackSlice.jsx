import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../utlis/axios";


// feedback
export const userFeedback = createAsyncThunk(
    "user/feedback",
    async({message})=>{
        console.log(message)
      try {
        const response = await baseURL.post(`/v1/send/feedback`,{message})
        console.log(response,"feedback slice response")
        return response
        
      } catch (error) {
        console.log(error, "error here");
        throw  error
        
      }
      
    }
   
  )


 const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
      feedback: null,
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(userFeedback.pending, (state) => {
          state.loading = true;
          state.feedback = null;
          state.error = null;
        })
        .addCase(userFeedback.fulfilled, (state, action) => {
          state.loading = false;
          state.feedback = action.payload;
          state.error = null;
        })
        .addCase(userFeedback.rejected, (state, action) => {
          state.loading = false;
          state.feedback = null;
          state.error = action.error.message;
        });
    },
  });

export const feedbackSliceReducer = feedbackSlice.reducer
