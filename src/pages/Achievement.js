import React, { useEffect } from "react";
import AchievementCard from "../components/AchievementCard";
import achievements from "../data/achievement";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".achievement-card");

    gsap.fromTo(
      cards,
      { x: -50, opacity: 0 }, // start slightly left and invisible
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.5, // cards appear one by one
        scrollTrigger: {
          trigger: ".achievements-list",
          start: "top 90%",   // when the container enters viewport
          end: "bottom 10%",
          toggleActions: "play reverse play reverse", // fade in/out
        },
      }
    );
  }, []);

  return (
    <div className="achievements-container" style={{ padding: "0 6rem 6rem 6rem" }}>
      <h2 style={{ marginTop: "5rem", marginBottom: "3rem" }}>Achievements</h2>

      <div className="achievements-list">
        {achievements.map((ach, index) => (
          <AchievementCard
            key={index}
            title={ach.title}
            company={ach.company}
            description={ach.description}
            details={ach.details}
            className="achievement-card" // important for animation
          />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
