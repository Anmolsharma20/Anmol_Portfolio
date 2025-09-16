import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievement";
// import Contact from "./pages/Contact";
import Certificate from "./pages/Certificates";
import About from "./pages/About";

import "./theme.css";   // global theme

function App() {
  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");
    const handleMouseMove = (e) => {
      glow.style.setProperty("--x", `${e.clientX}px`);
      glow.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      {/* Mouse Glow */}
      <div className="mouse-glow"></div>

      {/* Page Layout */}
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content container full_length">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/achievements" element={<Achievements />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
