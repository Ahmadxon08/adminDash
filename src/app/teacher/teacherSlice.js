import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate(); // This line should be inside a function component

const initialState = {
  loading: false,
  teachers: [],
  error: "",
};

export const fetchTeacher = createAsyncThunk(
  "teacher/fetchTeacher",
  async () => {
    try {
      const res = await axios.get("http://localhost:4000/teacher");
      const data = await res.data;
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const addTeacher = createAsyncThunk(
  "teacher/addTeacher",
  async (teacherData) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/teacher",
        teacherData
      );
      const data = await res.data;

      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  extraReducers: (builder) => {
    ///fetch----------- teacher data from server
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
    ///Add----------- teacher data from server
    builder.addCase(addTeacher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTeacher.fulfilled, (state, action) => {
      state.loading = false;
      state.teachers = [...state.teachers, action.payload];
      state.error = "";
    });
    builder.addCase(addTeacher.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export const teacherReducer = teacherSlice.reducer;
