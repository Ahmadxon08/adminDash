import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import { useState } from "react";
import axios from "axios";
import { Button, MenuItem, TextField } from "@mui/material";
import { GroupAdd, KeyboardBackspace } from "@mui/icons-material";
const Add = () => {
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
        await axios.post("http://localhost:3000/students", formData);
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
          <Link to="/">
            <Button color="success" variant="contained">
              <KeyboardBackspace sx={{ fontSize: "35px" }} />
            </Button>
          </Link>
          <span>Add student</span>
        </div>
        <div className="add_body">
          <div className="add_info">
            <div className="input">
              <TextField
                label="First Name"
                onChange={handleChange}
                name="firstName"
                type="text"
                id="firstName"
                size="medium"
                sx={{ width: "300px" }}
                value={formData.firstName}
                required
              />
            </div>
            <div className="input">
              <TextField
                label="Last Name"
                onChange={handleChange}
                name="lastName"
                type="text"
                size="medium"
                sx={{ width: "300px" }}
                value={formData.lastName}
                required
                id="lastName"
              />
            </div>
            <div className="input">
              <TextField
                label="Age"
                onChange={handleChange}
                name="age"
                type="number"
                size="medium"
                sx={{ width: "300px" }}
                value={formData.age}
                required
                id="age"
              />
            </div>
            <div className="input">
              <TextField
                select
                label="Group"
                onChange={handleChange}
                name="group"
                value={formData.group}
                size="medium"
                id="group"
                sx={{ width: "300px" }}
                required
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="N45">N45</MenuItem>
                <MenuItem value="N50">N50</MenuItem>
                <MenuItem value="N38">N38</MenuItem>
              </TextField>
            </div>

            {/* <div className="info">
              <label htmlFor="group">Group</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                id="group"
                required={formData.group}
              >
                <option value="All">All</option>
                <option value="">N45</option>
                <option value="">N50</option>
                <option value="">N38</option>
              </select>
            </div> */}
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

export default Add;
