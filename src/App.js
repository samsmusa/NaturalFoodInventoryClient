import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MyItem from "./pages/MyItem/MyItem";
import Login from "./pages/Auth/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/myitem" element={<MyItem />}></Route>
        {/* <Route path="/editcourse" element={<CreateCourse />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
