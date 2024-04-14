import axios from "axios";
import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
} from "./StudentType";

export const fetchStudentsRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST,
  };
};

export const fetchStudentsSuccess = (users) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: users,
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    dispatch(fetchStudentsRequest());
    try {
      const res = await axios.get("http://localhost:3000/students");
      const data = res?.data;
      dispatch(fetchStudentsSuccess(data));
    } catch (error) {
      dispatch(fetchStudentsFailure(error));
    }
  };
};
