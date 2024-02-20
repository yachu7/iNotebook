import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  let history = useNavigate();
const handleLogout = () =>{
  localStorage.removeItem('token');
  history("/login");
}
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"
    style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className="d-flex">
          <NavLink className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
          <NavLink className="btn btn-primary mx-1" to="/signup" role="button">SignUp</NavLink></form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button> }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
