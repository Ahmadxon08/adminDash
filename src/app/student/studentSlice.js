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
      const res = await axios.get("http://localhost:4000/students");
      const data = await res.data;
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const addStudent = createAsyncThunk(
  "student/addStudent",
  async (studentData) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/students",
        studentData
      );
      const data = await res.data;
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id) => {
    try {
      const res = await axios.post(`http://localhost:4000/students/${id}`);
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
    ///////fetch student get data from server
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
    ///////add student get data from server
    builder.addCase(addStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.students = [...state.students, action.payload];
      state.error = "";
    });
    builder.addCase(addStudent.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
    ////////////////////  delete student get data from server
    builder.addCase(deleteStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
      state.error = "";
    });
    builder.addCase(deleteStudent.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export const studentReducer = studentSlice.reducer;

export const studentActions = studentSlice.actions;
