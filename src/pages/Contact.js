import React from "react";

function Contact() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-header text-center" style={{ backgroundColor: "#f8f9fa", fontWeight: "bold" }}>
          Contact Me
        </div>
        <div className="card-body text-center">
          <p>Email: <a href="mailto:anmolsharma14003@gmail.com">anmolsharma14003@gmail.com</a></p>
          <p>
            <a href="http://www.linkedin.com/in/anmol-sharma-6b8552226" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
            <a href="https://github.com/Anmolsharma20" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href="https://public.tableau.com/app/profile/anmol.sharma1795" target="_blank" rel="noopener noreferrer">Tableau</a>
          </p>
          <a href="https://docs.google.com/document/d/1U2aOHIZFcSej0FRdz-xUfDRnP3Nmv6BnxNV67-1nD3E/export?format=pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
