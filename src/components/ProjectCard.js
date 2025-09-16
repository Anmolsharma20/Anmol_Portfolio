import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectCard({ name, description, details, projectUrl, skills }) {
  const [show, setShow] = useState(false);

  const visibleSkills = Array.isArray(skills) ? skills.slice(0, 3) : [];
  const remaining = Array.isArray(skills) ? skills.length - 3 : 0;

  return (
    <>
      <Card
        className="project-card shadow-sm"
        style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        <Card.Header
          style={{
            backgroundColor: "#f8f9fa",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {name}
        </Card.Header>

        <Card.Body>
          <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
            {description}
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <div className="d-flex flex-wrap gap-2">
            {visibleSkills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-secondary"
                style={{ fontSize: "0.75rem" }}
              >
                {skill}
              </span>
            ))}
            {remaining > 0 && (
              <span className="badge bg-info">+{remaining} more</span>
            )}
          </div>
        </Card.Footer>
      </Card>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{details}</p>
          <div className="d-flex flex-wrap gap-2">
            {skills?.map((skill, index) => (
              <span key={index} className="badge bg-secondary">
                {skill}
              </span>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              if (projectUrl) {
                window.open(projectUrl, "_blank");
              } else {
                alert("Project link is not available.");
              }
            }}
          >
            View Project
          </Button>

          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
