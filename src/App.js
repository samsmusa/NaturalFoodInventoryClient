import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MyItem from "./pages/MyItem/MyItem";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Profile from "./pages/Profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion, AnimatePresence } from "framer-motion";
import auth from "./firebase.init";
import RequireAuth from "./component/RequireAuth/RequireAuth";

function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        
          <Route path="/myitem" element={<RequireAuth><MyItem /></RequireAuth>}></Route>
        
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
        {/* <Route path="/editcourse" element={<CreateCourse />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
