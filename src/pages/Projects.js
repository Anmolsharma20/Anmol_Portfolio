// src/pages/Projects.js
import React, { useEffect } from "react";
import projectsData from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
useEffect(() => {


  
  const cards = gsap.utils.toArray(".project-card");

  gsap.fromTo(
    cards,
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.5, // cards enter one after another
      scrollTrigger: {
        trigger: ".projects-list", // single trigger
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
}, []);

  return (
    <div
      className="projects-container"
      style={{ padding: "0 6rem 6rem 6rem" }}
    >
      <h2 style={{ marginTop: "5rem", marginBottom: "3rem" }}>
        My Projects
      </h2>
      <div
        className="projects-list"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            className="project-card" // important for animation
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
