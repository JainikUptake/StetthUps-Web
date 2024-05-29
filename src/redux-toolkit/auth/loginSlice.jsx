import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const REGISTER_API = process.env.REACT_APP_API_URL;

const initialState = {
  loading: false,
  token: localStorage.getItem("token") || null,
  error: null,
};