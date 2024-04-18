import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: false,
  teachers: [],
  error: "",
};

 export const fetchTeacher = createAsyncThunk("teacher/fetchTeacher", async () => {
  try {
    const res = await axios.get("http://localhost:3000/teacher");
    const data = await res.data;
    return data;
  } catch (error) {
    return error.message;
  }
});

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTeacher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTeacher.fulfilled, (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTeacher.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export const teacherReducer = teacherSlice.reducer;

export const teacherActions = teacherSlice.actions;
