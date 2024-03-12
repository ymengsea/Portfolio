import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="container-fluid nav-container">
      <div className="container">
        <nav className="navbar navbar-expand-lg fw-bolder">
          <a className="navbar-brand">
            <Link className="nav-link" to="/" style={{ fontFamily: "'Playball', cursive" }}>
              Y Meng Sea
            </Link>
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-2">
                {/* add class appear */}
                <NavLink className={({ isActive }) => (isActive ? "appear nav-link link" : "nav-link link")} to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className={({ isActive }) => (isActive ? "appear nav-link link" : "nav-link link")} to="/work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className={({ isActive }) => (isActive ? "appear nav-link link" : "nav-link link")} to="/Resume">
                  <div className="d-flex align-items-center">
                    Resume
                    <MdOutlineFileDownload className="fs-4" />
                  </div>
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink className={({ isActive }) => (isActive ? "appear nav-link link" : "nav-link link")} to="/Contact">
                  Cont
                  <MdOutlineAlternateEmail className="fs-5" />
                  ct
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
