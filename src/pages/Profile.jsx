import { useNavigate } from "react-router-dom";

import "./Profile.scss";
import { useAuth } from "../components/Auth";

const Profile = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="content">
          <div className="profile_head">
            <h1>User Information</h1>
          </div>
          <div className="profile_body">
            <span>User Name: {user && user.username} </span>
            <span>User Password:{user && user.password}</span>
          </div>
          <div className="btn">
            <button onClick={handleLogOut}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
