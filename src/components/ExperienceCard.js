import React from "react";

function ExperienceCard({ title, role, duration, description }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2">{role}</h6>
        <p className="card-text"><strong>Duration:</strong> {duration}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;   // ✅ must be default export
