import React from "react";
import Card from "react-bootstrap/Card";

function EducationCard({ title, institution, duration, description }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 ">
          {institution}
        </Card.Subtitle>
        <Card.Text>
          <small><b>{duration}</b></small>
          <br />
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
