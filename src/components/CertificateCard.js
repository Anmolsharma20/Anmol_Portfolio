import React, { useState, useRef, useEffect } from "react";
import "./CertificateCard.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CertificateCard({ title, issuer, description, skills, link }) {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [hiddenCount, setHiddenCount] = useState(0);
  const [show, setShow] = useState(false); // modal state
  const skillsRef = useRef(null);

  useEffect(() => {
    if (skillsRef.current) {
      const containerWidth = skillsRef.current.offsetWidth;
      let currentWidth = 0;
      const newVisible = [];
      let countHidden = 0;

      skills.forEach((skill) => {
        // Approximate width calculation
        const skillWidth = skill.length * 8 + 24; // text length + padding
        if (currentWidth + skillWidth < containerWidth - 40) {
          newVisible.push(skill);
          currentWidth += skillWidth;
        } else {
          countHidden++;
        }
      });

      setVisibleSkills(newVisible);
      setHiddenCount(countHidden);
    }
  }, [skills]);

  // Short description truncation
  const truncateDesc = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <>
      {/* Certificate Card */}
      <div
        className="certificate-card"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="certificate-title">{title}</div>
        <div className="certificate-issuer">{issuer}</div>
        <div className="certificate-desc">{truncateDesc(description)}</div>

        {/* Skills */}
        <div className="certificate-skills" ref={skillsRef}>
          {visibleSkills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
          {hiddenCount > 0 && (
            <span className="skill-tag more">+{hiddenCount} more</span>
          )}
        </div>

        {/* Button pinned at bottom */}
        {link && (
          <div
            className="certificate-btn"
            onClick={(e) => e.stopPropagation()} // prevent modal open on button click
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Issuer:</strong> {issuer}</p>
          <p>{description}</p>
          {skills?.length > 0 && (
            <div>
              <strong>Skills:</strong>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          {link && (
            <Button variant="primary" href={link} target="_blank">
              Open Certificate
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CertificateCard;
