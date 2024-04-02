import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import { useState } from "react";
import axios from "axios";
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
          <Link to="/">go back</Link>
          <span>Add student</span>
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
                <option value="N45">N45</option>
                <option value="N50">N50</option>
                <option value="N38">N38</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <Link onClick={postStudent}>Add Student</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
