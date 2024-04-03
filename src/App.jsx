import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/side/SideBar";
import "./sass/Main.scss";
import Home from "./pages/Home/Home";

import Edit from "./pages/Edit";
import Add from "./pages/Add";
import HomeTeacher from "./pages/Home/HomeTeacher";
import AddTeacher from "./pages/AddTeacher";
import EditTeacher from "./pages/EditTeacher";
import { useState } from "react";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./components/Auth";

const App = () => {
  const [toogle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toogle);
  };
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <SideBar toogle={toogle} />{" "}
          <div className="appPage">
            <Header toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teacher" element={<HomeTeacher />} />
              <Route path="/add" element={<Add />} />
              <Route path="/addTeacher" element={<AddTeacher />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/teacher/:id" element={<EditTeacher />} />
              {/* <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              /> */}
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
