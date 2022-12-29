import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Program from "./Components/Program";
import React from "react";
import Footer from "./Components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (

    <>
<BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/program" element={<Program />}></Route>
        
        </Routes>
      </div>
    </BrowserRouter>
    

   






    </>
    
  );
}

export default App;
