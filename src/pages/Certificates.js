import React, { useEffect } from "react";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Certificates() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".certificate-card");

    gsap.fromTo(
      cards,
      { x: -50, opacity: 0 }, // start off-screen and invisible
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.5, // smoother stagger for less lag
        scrollTrigger: {
          trigger: ".certificates-list",
          start: "top 90%", // only animate when cards enter viewport
          end: "bottom 10%",
          toggleActions: "play reverse play reverse", // fade in/out when scrolling up/down
        },
      }
    );
  }, []);

  return (
    <div className="certificates-container" style={{ padding: "0 6rem 6rem 6rem" }}>
      <h2 style={{ marginTop: "5rem", marginBottom: "3rem" }}>Certificates</h2>

      <div
        className="certificates-list"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            {...cert}
            className="certificate-card" // important for animation
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
