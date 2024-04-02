import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/side/SideBar";
import "./sass/Main.scss";
import Home from './pages/Home/Home';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
