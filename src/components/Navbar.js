import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">My Portfolio</NavLink>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Main navigation */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li> {/* ✅ New link */}
            <li className="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/achievements">Achievements</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/certificates">Certificates</NavLink></li>
          </ul>

          {/* Social Links Dropdown */}
          <ul className="navbar-nav ms-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="profilesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profiles
              </a>
              <ul className="dropdown-menu" aria-labelledby="profilesDropdown">
                <li><a className="dropdown-item" href="https://github.com/Anmolsharma20" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a className="dropdown-item" href="https://public.tableau.com/app/profile/anmol.sharma1795" target="_blank" rel="noopener noreferrer">Tableau</a></li>
                <li><a className="dropdown-item" href="https://leetcode.com/u/Anmolsharma20/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/anmol-sharma-6b8552226" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a className="dropdown-item" href="https://www.hackerrank.com/profile/anmolsharma14003" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
                <li><a className="dropdown-item" href="mailto:anmolsharma14003@gmail.com">Gmail</a></li>
                <li><a className="dropdown-item" href="https://docs.google.com/document/d/1U2aOHIZFcSej0FRdz-xUfDRnP3Nmv6BnxNV67-1nD3E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" download="Anmol_Sharma_Resume.pdf">Resume</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
