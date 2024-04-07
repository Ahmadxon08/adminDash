// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
// import SideBar from "./components/side/SideBar";
// import "./sass/Main.scss";
// import Home from "./pages/Home/Home";

import Router from "./router/router";

// import Edit from "./pages/Edit";
// import Add from "./pages/Add";
// import HomeTeacher from "./pages/Home/HomeTeacher";
// import AddTeacher from "./pages/AddTeacher";
// import EditTeacher from "./pages/EditTeacher";
// import { useState } from "react";
// // import Login from "./pages/Login";
// // import Profile from "./pages/Profile";
// import RequireAuth from "./components/RequireAuth";
// import { AuthProvider } from "./components/Auth";
// import Profile from "./pages/Profile";
// import Login from "./pages/Login";

const App = () => {
  // const [toogle, setToggle] = useState(false);

  // const toggleSidebar = () => {
  //   setToggle(!toogle);
  // };
  return (
    <div >
      <Router/>
      {/* <BrowserRouter>
        <AuthProvider>
          {" "}
          <RequireAuth>
            <SideBar toogle={toogle} />
          </RequireAuth>
          <div className="appPage">
            <RequireAuth>
              <Header toggleSidebar={toggleSidebar} />{" "}
            </RequireAuth>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/teacher"
                element={
                  <RequireAuth>
                    <HomeTeacher />
                  </RequireAuth>
                }
              />
              <Route
                path="/add"
                element={
                  <RequireAuth>
                    <Add />
                  </RequireAuth>
                }
              />
              <Route
                path="/addTeacher"
                element={
                  <RequireAuth>
                    <AddTeacher />
                  </RequireAuth>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <RequireAuth>
                    <Edit />
                  </RequireAuth>
                }
              />
              <Route
                path="/teacher/:id"
                element={
                  <RequireAuth>
                    <EditTeacher />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
