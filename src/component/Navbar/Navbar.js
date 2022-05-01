import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./../Logo/Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className=" navbar navbar-expand-lg  ">
      <div className="container">
        <NavLink to="/" className="navbar-brand nav-it">
          <Logo />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <NavLink to="/mycourse" className="nav-it mx-2">
          My-item
        </NavLink>
        <div>
        {!user ? (
          <NavLink to="/login" className="nav-it mx-2">
            Login
          </NavLink>
        ) : (<>
          <NavLink to="/profile" className="nav-it mx-2">
            My Profile
          </NavLink>
          <input type="submit" className="btn btn-sm text-white" value="Sign Out" style={{backgroundColor: "#FF4500", border: "none" }} onClick={()=>signOut(auth)} />
          </>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
