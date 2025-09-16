import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./AchievementCard.css";

const AchievementCard = ({ title, company, description, details }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="achievement-card">
      <div className="achievement-title">{title}</div>
      <div className="achievement-issuer">{company}</div>
      <div className="achievement-desc">{description}</div>

      <div className="achievement-btn">
        <button className="view-btn" onClick={() => setShow(true)}>
          View More
        </button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-muted">{company}</h6>
          <p>{details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AchievementCard;
