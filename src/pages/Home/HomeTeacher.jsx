/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Students from "./Students";
import { Button } from "@mui/material";
import { PersonAddAlt } from "@mui/icons-material";

// import { useDarkMode } from "./DarkMode";

const HomeTeacher = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");
  // const [cuurentPage, setCurentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  // useEffect(()=>{
  //   const fetchUsers=async()=>{
  //     const data=await fetchData(cuurentPage, 10);
  //     if(data){
  //       setStudents(data.students);
  //       setTotalPages(data.totalPages);
  //     }
  //   }
  //   fetchUsers();
  // }, [currentPage])

  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/teacher");
      setStudents(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:3000/teacher/${selectedId}`);
      fetchStudent();
      setShowModal(false);
    } catch (error) {
      console.log(error.message);
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

  useEffect(() => {
    fetchStudent();
  }, []);

  ///////////////////////////////////////////////////

  return (
    <div className="home">
      <div className="container">
        <div className="home_head">
          <span>Teachers' info</span>
          <div className="texts_act">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder="Search..."
            />
            <select value={filterGroup} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="junior">Junior</option>
              <option value="middle">Middle</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <div className="btn">
            <Link to="/addTeacher">
              <Button color="success" variant="contained">
                <PersonAddAlt
                  sx={{
                    fontSize: "40px",
                    width: "50px",
                  }}
                />
              </Button>
            </Link>
          </div>
          {/* <div className="btnMode">
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
          </div> */}
        </div>
        <div className="home_body">
          <div className="body_head">
            <span className="id">Teacher ({filteredStudents.length})</span>
            <span>FirstName</span>
            <span>LastName</span>
            <span>Age</span>
            <span>Group</span>
            <span>Action</span>
          </div>
          <div className="body_data">
            <Students
              students={filteredStudents}
              showModal={showModal}
              setShowModal={setShowModal}
              setSelectedId={setSelectedId}
              deleteStudent={deleteStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeacher;
