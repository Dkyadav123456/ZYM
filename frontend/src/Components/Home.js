import React from 'react'
import '../CSS/Home.css'
import Footer from './Footer'
import About from "./About"
import Program from "./Program"
import Pricing from "./Pricing"
import { Link } from 'react-router-dom'
//import logo from '../Images/zymbg.jpg'
export default function Home() {
  return (
    <>
    <div id="home">
    <section class="hero">
        <h1 class="hero-title">
          THE BEST FITNESS STUDIO <br />
          IN THE CITY
        </h1>

        <a href="/program" class="hero-btn-get-started">GET STARTED</a>
      </section>

      <About></About>
      <Program></Program>
      <Pricing></Pricing>
      <Footer/>
    </div>

    </>
   
  )
}
