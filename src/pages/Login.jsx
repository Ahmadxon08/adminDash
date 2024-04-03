import { useState } from "react";
import "./Login.scss";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username.length >= 3 && data.password.length >= 6) {
      navigate("/");
      login(data);
      localStorage.setItem("login", data.username && data.password);
    } else if (data) {
      alert("Username and password must be at least 3 characters long");
    }
    console.log(data);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="content">
          <div className="login_head">
            <h1>Login</h1>
          </div>
          <div className="login_body">
            <div className="login_info">
              <div className="info">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={data.username}
                  onChange={handleChange}
                  name="username"
                  id="username"
                  required
                />
              </div>
              <div className="info">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  required
                />
              </div>
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
