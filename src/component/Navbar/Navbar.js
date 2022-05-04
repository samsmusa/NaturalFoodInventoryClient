import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./../Logo/Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
      <div class="container-fluid justify-content-between">
        
          <Link  class="navbar-brand" to='/'>
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse ailgn-items-center" id="navbarNav">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item">
              <Link  class="nav-link active" aria-current="page" to='/myitem'>
                Manage
              </Link>
            </li>
            

            {!user ? (
          <li class="nav-item">
          <Link  class="nav-link" to='/login'>
            Login
          </Link>
        </li>
        ) : (<>
          <li class="nav-item">
              <Link  class="nav-link" to='/profile'>
                Profile
              </Link>
            </li>
            <li class="nav-item">
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

        