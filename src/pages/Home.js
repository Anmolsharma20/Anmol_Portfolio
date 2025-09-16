import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css"; // make sure this path is correct
import gsap from "gsap";

function Home() {
  useEffect(() => {
    // ✅ GSAP animations for home section
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    // Animate heading word by word
    tl.fromTo(".word", { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.3 });

    // Tagline fade in
    tl.fromTo(".tagline", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "+=0.2");

    // Intro fade in
    tl.fromTo(".intro", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "+=0.3");

    // Buttons stagger
    tl.fromTo(
      ".buttons .btn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.15 },
      "-=0.1"
    );
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h2>
          <span className="word">Hi,</span>{" "}
          <span className="word">I</span>{" "}
          <span className="word">am</span>{" "}
          <span className="word highlight">Anmol</span>
        </h2>

        <p className="tagline">Explore my work, achievements, and projects.</p>

        <p className="intro">
          A versatile developer and data analyst. Explore my projects,
          certifications, and achievements to see how I transform complex
          problems into impactful, real-world solutions.
        </p>

        <div className="buttons">
          <Link to="/about" className="btn primary">About Me</Link>
          <Link to="/projects" className="btn primary">View Projects</Link>
          <Link to="/achievements" className="btn primary">See Achievements</Link>
          <Link to="/certificates" className="btn primary">View Certificates</Link>
          <Link to="/contact" className="btn primary">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
