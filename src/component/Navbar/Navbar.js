import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "./../Logo/Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  let location = useLocation()
  console.log(location.pathname)
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
      <div className="container-fluid justify-content-between">
        
          <Link  className="navbar-brand" to='/'>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse ailgn-items-center" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className={location.pathname.startsWith("/myitem") ? "nav-item active-link" : "nav-item"}>
              <Link  className="nav-link active" aria-current="page" to='/myitem'>
                Manage
              </Link>
            </li>
            

            {!user ? (
          <li className="nav-item">
          <Link  className={location.pathname.startsWith("/login") ? "nav-item active-link" : "nav-item"} to='/login'>
            Login
          </Link>
        </li>
        ) : (<>
          <li className="nav-item">
              <Link  className={location.pathname.startsWith("/profile") ? "nav-item active-link" : "nav-item"} to='/profile'>
                Profile
              </Link>
            </li>
            <li className="nav-item">
          <input type="submit" className="btn btn-sm text-white table-heading" value="Sign Out" style={{ border: "none" }} onClick={()=>signOut(auth)} />
          </li>
          </>
        )}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

        