import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../utlis/axios";

export const userQuestion = createAsyncThunk("user/FAQs", async () => {
  try {
    const response = await baseURL.get(`/v1/get/faq`);
    console.log(response.data.data, "response in slice");
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
});

const FaqsSlice = createSlice({
  name: "faqs",
  initialState: {
    faqs: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userQuestion.pending, (state) => {
        state.loading = true;
        state.faqs = null;
        state.error = null;
      })
      .addCase(userQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.faqs = action.payload;
        state.error = null;
      })
      .addCase(userQuestion.rejected, (state, action) => {
        state.loading = false;
        state.faqs = null;
        state.error = action.error.message;
      });
  },
});

export const faqsSliceReducer = FaqsSlice.reducer;
