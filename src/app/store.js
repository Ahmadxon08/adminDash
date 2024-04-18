// store.js

import { configureStore } from "@reduxjs/toolkit";
import { teacherReducer } from "./teacher/teacherSlice";
import { studentReducer } from "./student/studentSlice";


const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    student:studentReducer
  },
});

export default store;
