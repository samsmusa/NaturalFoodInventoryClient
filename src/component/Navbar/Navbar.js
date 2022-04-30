import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./../Logo/Logo";

const Navbar = () => {
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

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                href={"/"}
                className="nav-link dropdown-toggle nav-it"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/all"
                  // activeClassName="active-categoryMenu"
                >
                  All Courses
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/Web Development"
                  // activeClassName="active-categoryMenu"
                >
                  Web Development{" "}
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/Web Designing"
                  // activeClassName="active-categoryMenu"
                >
                  Web Designing{" "}
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/React"
                  // activeClassName="active-categoryMenu"
                >
                  React
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/NodeJs"
                  // activeClassName="active-categoryMenu"
                >
                  NodeJs
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/ML"
                  // activeClassName="active-categoryMenu"
                >
                  Machine Learning{" "}
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/Photography"
                  // activeClassName="active-categoryMenu"
                >
                  Photography
                </NavLink>
                <NavLink
                  className="dropdown-item nav-it"
                  to="/home/IOT"
                  // activeClassName="active-categoryMenu"
                >
                  IOT{" "}
                </NavLink>
              </div>
            </li>
          </ul>

          
        </div> */}
        <NavLink to="/mycourse" className="nav-it mx-2">My-item
        </NavLink>
        <NavLink to="/login" className="nav-it mx-2">Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
