import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { PersonAddAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacher } from "../../app/teacher/teacherSlice";
import Teacher from "./Teacher";

const HomeTeacher = () => {
  const { error, teachers, loading } = useSelector((state) => state.teacher);
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");

  useEffect(() => {
    dispatch(fetchTeacher());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(teachers)) {
      setStudents(teachers);
    }
  }, [teachers]);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/teacher/${id}`);
      dispatch(fetchTeacher());
    } catch (error) {
      console.error("Error deleting teacher:", error.message);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    setFilterGroup(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const isInGroup = filterGroup === "All" || student.group === filterGroup;
    const matchedStudent =
      (student.firstName &&
        student.firstName.toLowerCase().includes(searchTerm)) ||
      (student.lastName &&
        student.lastName.toLowerCase().includes(searchTerm)) ||
      (student.group && student.group.toLowerCase().includes(searchTerm));
    return isInGroup && matchedStudent;
  });

  return (
    <>
      {error && <h1>{error}</h1>}
      {loading ? (
        <div className="loading">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="home">
          <div className="container">
            <div className="home_head">
              <span>Teachers info</span>
              <div className="texts_act">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  placeholder="Search..."
                />
                <select value={filterGroup} onChange={handleFilterChange}>
                  <option value="All">Level</option>
                  <option value="junior">Junior</option>
                  <option value="middle">Middle</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
              <div className="btn">
                <Link to="/addTeacher">
                  <Button color="success" variant="contained">
                    <PersonAddAlt sx={{ fontSize: "40px", width: "50px" }} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="home_body">
              <div className="body_head">
                <span className="id">Teacher ({filteredStudents.length})</span>
                <span>FirstName</span>
                <span>LastName</span>
                <span>Age</span>
                <span>Level</span>
                <span>Action</span>
              </div>
              <div className="body_data">
                <Teacher
                  students={filteredStudents}
                  deleteStudent={deleteStudent}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeTeacher;
