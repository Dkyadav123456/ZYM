import React from "react";
import "../CSS/NavBar.css";
// import Home from "./Home";
import logo3 from "../Images/logo3.jpg";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo3} id="logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Program
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
