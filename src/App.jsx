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

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <div className="appPage">
          <Header />
          <Routes>
            <Route path="/student" element={<Home />} />
            <Route path="/teacher" element={<HomeTeacher />} />
            <Route path="/add" element={<Add />} />
            <Route path="/addTeacher" element={<AddTeacher />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/teacher/:id" element={<EditTeacher />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
