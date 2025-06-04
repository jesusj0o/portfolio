import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mb-15">
        <Navbar />
      </div>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
