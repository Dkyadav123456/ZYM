import React from "react";
import '../CSS/NavBar.css'
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from 'react-router-dom'
import logo from '../Images/logo3.jpg'
export default function NavBar() {
  return (
    <>


      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            <Link smooth to="#home"> <img src="04012019-25.jpg" className="logo" /></Link>

          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <Link className="active" aria-current="page" smooth to="#home">Home</Link>
          <Link className="active" aria-current="page"  smooth to="#about">About</Link>
          <Link className="active" aria-current="page"  smooth to="#program">Program</Link>
          <Link className="active" aria-current="page" smooth to="#pricing">Pricing</Link>
          
        </div>
      </div>


    </>
  );
}
