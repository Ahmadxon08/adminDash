import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { GroupAdd, KeyboardBackspace } from "@mui/icons-material";
const AddTeacher = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    group: "",
    age: "All",
  });
  const postStudent = async () => {
    if (
      formData.firstName.length > 3 &&
      formData.lastName.length > 0 &&
      formData.age.length <= 2
    ) {
      try {
        await axios.post("http://localhost:3000/teacher", formData);
      } catch (error) {
        console.log(error.message, "hatolik bor");
      }
      navigate("/");
    } else if (formData) {
      alert("Please field your information before 😜😜😜");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add">
      <div className="container">
        <div className="add_head">
          <Link to="/teacher">
            <Button color="success" variant="contained">
              <KeyboardBackspace sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
          <span>Add Teacher</span>
        </div>
        <div className="add_body">
          <div className="add_info">
            <div className="info">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                required
              />
              {/* <TextField
                label="FirstName"
                name="firstName"
                required
                sx={{ margin: "0px", height:"20px" }}
                variant="outlined"
                onChange={handleChange}
                value={formData.firstName}
              />
              <Stack>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </Stack> */}
            </div>
            <div className="info">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
            </div>
            <div className="info">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={handleChange}
                name="age"
                required
              />
            </div>
            <div className="info">
              <label htmlFor="group">Group</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                id="group"
                required={formData.group}
              >
                <option value="All">All</option>
                <option value="junior">Junior</option>
                <option value="middle">Middle</option>
                <option value="senior">Senior</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <Link onClick={postStudent}>
              <Button variant="contained" color="success">
                <GroupAdd sx={{ fontSize: "40px" }} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
