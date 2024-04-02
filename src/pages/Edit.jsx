import { Link, useParams } from "react-router-dom";
import "./Add.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    group: "All",
  });

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/students/${id}`);
      setEditData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStudent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const editStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/students/${id}`, editData);
      window.location.href = "/";
    } catch (error) {
      console.log(error.message, "hatolik bor");
    }
  };

  return (
    <div className="add">
      <div className="container">
        <div className="add_head">
          <Link to="/">go back</Link>
          <span>Edit student</span>
        </div>
        <div className="add_body">
          <div className="add_info">
            <div className="info">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                value={editData.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div className="info">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                value={editData.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </div>
            <div className="info">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                value={editData.age}
                onChange={handleChange}
                name="age"
              />
            </div>
            <div className="info">
              <label htmlFor="group">Group</label>
              <select
                name="group"
                value={editData.group}
                onChange={handleChange}
              >
                <option value="All">All</option>
                <option value="N45">N45</option>
                <option value="N50">N50</option>
                <option value="N38">N38</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <Link onClick={editStudent} to="/">
              Save Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
