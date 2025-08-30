import React from "react";
import Header from "./Componets/Header"
import About from "./Componets/About"
import Services from "./Componets/Services";
import './App.css'
import Portfolio from "./Componets/Portfolio";
import Contact from "./Componets/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact/>
    </>
  );
}

export default App;
