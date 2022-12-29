import React from "react";
import '../CSS/NavBar.css'
import {Link} from 'react-router-dom'
import logo from '../Images/logo3.jpg'
export default function NavBar() {
  return (
    <>

<div class="topnav" id="myTopnav">

  <Link className="active" aria-current="page" exact to={'/'}>Home</Link>
  <Link className="active" aria-current="page" exact to={'/about'}>About</Link>
  <Link className="active" aria-current="page" exact to={'/program'}>Program</Link>
  <Link className="active" aria-current="page" exact to={'/pricing'}>Pricing</Link>

  {/* <i class="fa fa-bars"></i> */}

<a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>


</div>

    </>
  );
}
