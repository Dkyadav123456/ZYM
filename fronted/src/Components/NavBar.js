import React from "react";
import "../CSS/NavBar.css";
// import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navBar">
      {/* <img src=  {logo} alt="logo" /> */}
      <ul className="nav-menu">
        <Link to="/Home">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/About">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/Pricing">
          {" "}
          <li>Pricing</li>
        </Link>
        <Link to="/Program">
          {" "}
          <li>Program</li>
        </Link>
      </ul>
    </div>
  );
}
