import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  students: [],
  error: "",
};

export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      const data = await res.data;
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.students = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStudent.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export const studentReducer = studentSlice.reducer;

export const studentActions = studentSlice.actions;
