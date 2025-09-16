import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import experienceData from "../data/experience";
import educationData from "../data/education";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
useEffect(() => {
  // ✅ Accordion slide-in from left (faster + visible sooner)
  gsap.fromTo(
    ".accordion-wrapper",
    { x: -80, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".accordion-wrapper",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
  // Education cards appear only while visible
  gsap.utils.toArray(".education .col-md-4").forEach((card) => {
    gsap.fromTo(
      card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  // Experience cards appear only while visible
  gsap.utils.toArray(".experience .col-md-6").forEach((card) => {
    gsap.fromTo(
      card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  // Headings
  gsap.utils.toArray(".section-heading").forEach((heading) => {
    gsap.fromTo(
      heading,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);


  return (
    <section className="about container my-5">
      {/* About Me Accordion */}
      <div className="about-me mb-5">
        <h2 className="mb-4 text-center section-heading">About Me</h2>

        {/* 👇 Wrapper added */}
        <div className="accordion-wrapper">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Introduction</Accordion.Header>
              <Accordion.Body>
                Hi, I’m <b>Anmol Sharma</b>, an aspiring Software Engineer & Data
                Analyst passionate about building scalable solutions, uncovering
                insights from data, and applying AI/ML techniques to solve
                real-world problems.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>💻 Software Development</Accordion.Header>
              <Accordion.Body>
                Worked as a{" "}
                <b>Software Engineering Intern – Frontend UI/UX at MNF</b>,
                developed dynamic UIs, integrated payment gateway, optimized
                frontend, recognized as highest bug solver.
                <br />
                <br />
                <b>Projects:</b>
                <ul>
                  <li>
                    Car Rental Full-Stack Web App (MERN, deployed on Vercel)
                  </li>
                  <li>Flipkart Homepage Clone (Responsive UI with JS & CSS)</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                📊 Data Analytics & Business Intelligence
              </Accordion.Header>
              <Accordion.Body>
                Worked as a <b>Data Analyst Intern at IntelliSphere</b>, designed
                interactive dashboards, optimized data pipelines.
                <br />
                <br />
                <b>Certifications & Projects:</b>
                <ul>
                  <li>Google Data Analytics Professional Certificate</li>
                  <li>Interactive Tableau Kanban Dashboard</li>
                  <li>World Happiness Index Dashboard</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>🌍 Geospatial Analytics & AI/ML</Accordion.Header>
              <Accordion.Body>
                Trained with <b>IIRS, ISRO</b> in AI/ML for Geodata Analysis
                using Python, NumPy, Pandas, Google Earth Engine.
                <br />
                <br />
                <b>Key Projects:</b>
                <ul>
                  <li>Land & Water Classification in GEE (F1: 0.928)</li>
                  <li>Satellite Image Processing</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                ☁️ Cloud, DevOps & Security Enthusiast
              </Accordion.Header>
              <Accordion.Body>
                Practical exposure to <b>Google Earth Engine</b> and deployment
                tools like <b>Vercel</b>. Currently exploring AWS/GCP/Azure,
                Docker, Kubernetes, and DevSecOps.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>🛠️ Technical Skills</Accordion.Header>
              <Accordion.Body>
                <b>Languages & Tools:</b> Python, JavaScript, SQL, HTML, CSS,
                Bootstrap, Jupyter Notebook, Git <br />
                <b>Data & Visualization:</b> Tableau, Advanced Excel, Google
                Earth Engine, GIS <br />
                <b>Development:</b> MERN Stack, Payment Gateways, REST APIs{" "}
                <br />
                <b>AI/ML:</b> Machine Learning, Deep Learning, Remote Sensing,
                Data Modeling <br />
                <b>Core Strengths:</b> Problem-solving, adaptability,
                collaboration, analytical thinking, continuous learning
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>🏆 Recognitions & Certifications</Accordion.Header>
              <Accordion.Body>
                Twice awarded <b>“Rising Star of the Month”</b> during
                internships.
                <br />
                <br />
                <b>Certifications:</b>
                <ul>
                  <li>Google Data Analytics</li>
                  <li>ISRO AI/ML for Geodata Analysis</li>
                  <li>Cisco Introduction to Data Science</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>🌟 What Drives Me</Accordion.Header>
              <Accordion.Body>
                I’m motivated by solving challenging problems at the intersection
                of <b>data, development, and AI/ML</b>. Whether it’s creating
                intuitive UIs, designing predictive models, or analyzing
                satellite data, I enjoy combining logic, creativity, and
                technology to build impactful solutions.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      {/* Education Section */}
      <div className="education mt-5">
        <h2 className="mb-4 text-center section-heading">My Education</h2>
        <div className="row">
          {educationData.map((edu, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <EducationCard
                title={edu.title}
                institution={edu.institution}
                duration={edu.duration}
                description={edu.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience mt-5">
        <h2 className="mb-4 text-center section-heading">My Experience</h2>
        <div className="row">
          {experienceData.map((exp, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <ExperienceCard
                title={exp.title}
                role={exp.role}
                duration={exp.duration}
                description={exp.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
