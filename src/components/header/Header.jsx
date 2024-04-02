import { Button } from "@mui/material";
import "./Header.scss";
import { AccountCircle, Dehaze } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="nav_btn">
            <Button sx={{ fontSize: "100px", color: "black" }} variant="text">
              <div className="menu">
                <Dehaze sx={{ fontSize: "50px", color: "black" }} />
              </div>
            </Button>
          </div>
          <div className="login">
            <AccountCircle sx={{ fontSize: "40px" }} />
            <span>menu</span>
          </div>
          <div className="login">
            <AccountCircle sx={{ fontSize: "40px" }} />
            <span>menu</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
