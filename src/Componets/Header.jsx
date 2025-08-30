import React from "react";
import logo from "../assets/Logo.png"

function App() {
  // These functions need to be defined in your component
  const openMenu = () => {
    // your menu opening logic
   
  };

  const closeMenu = () => {
    // your menu closing logic
 
  };

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{ width: "200px", height: "auto" }}
          />
         
          <ul id="sidemenu">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-text">
          <p>Web Developer: Learner</p>
          <h1>Hi, I'm <span style={{color :"red"}}>Anil Maharana</span> <br />From India</h1>
        </div>
      </div>
    </div>
  );
}

export default App;