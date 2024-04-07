import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import { useState } from "react";
import axios from "axios";
import { Button, MenuItem, TextField } from "@mui/material";
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
            <div className="input">
              <TextField
                label="First Name"
                onChange={handleChange}
                name="firstName"
                type="text"
                size="medium"
                sx={{ width: "300px" }}
                value={formData.firstName}
                required
                id="firstName"
              />
            </div>
            <div className="input">
              <TextField
                label="Last Name"
                onChange={handleChange}
                name="lastName"
                type="text"
                id="lastName"
                size="medium"
                sx={{ width: "300px" }}
                value={formData.lastName}
                required
              />
            </div>
            <div className="input">
              <TextField
                label="Age"
                onChange={handleChange}
                name="age"
                type="number"
                id="age"
                size="medium"
                sx={{ width: "300px" }}
                value={formData.age}
                required
              />
            </div>
            <div className="input">
              <TextField
                select
                label="Level"
                onChange={handleChange}
                name="group"
                size="medium"
                value={formData.group}
                sx={{ width: "300px" }}
                required
                id="group"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="junior">Junior</MenuItem>
                <MenuItem value="middle">Middle</MenuItem>
                <MenuItem value="senior">Senior</MenuItem>
              </TextField>
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
