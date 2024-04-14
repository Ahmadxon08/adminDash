import {
  FETCH_STUDENTS_FAILURE,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
} from "./StudentType";

const initialState = {
  students: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
        error: "",
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        students: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
 export default reducer;