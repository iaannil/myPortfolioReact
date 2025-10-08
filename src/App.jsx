import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Componets/Header"
// import About from "./Componets/About"
// import Services from "./Componets/Services";
import './App.css'
// import Portfolio from "./Componets/Portfolio";
// import Contact from "./Componets/Contact";
import Home from "./Componets/Home";


import Projects from "./Componets/Projects";

function App() {
  return (
    // <>
    //   <Header />
    //   <About />
    //   <Services />
    //   <Portfolio />
    //   <Contact/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/myPortfolioReact" element={<Home />} />
        <Route path="/myPortfolioReact/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
