import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Auth/Login/Login";
import MyCourses from "./pages/MyCourses/MyCourses";
import CreateCourse from "./pages/CreateCourse/CreateCourse";
import Register from "./pages/Auth/Register/Register";
import Navbar from "./component/Navbar/Navbar";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/mycourse" element={<MyCourses />}></Route>
        <Route path="/editcourse" element={<CreateCourse />}></Route>
      </Routes>
    </div>
  );
}

export default App;
