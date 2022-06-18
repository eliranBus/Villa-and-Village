import React from "react";
import corner from "../assets/images/corner.png";
import devider from "../assets/images/devider.png";

const About = () => {
  return (
    <div className="section" id="about">
      <img className="devider" src={devider} alt="devider" />
      <img className="corner-top-left" src={corner} alt="" />
      <img className="corner-bottom-right" src={corner} alt="" />
      <div className="about-wrapper inner-section">
        <h2>ABOUT</h2>
        <p>
          On the slopes of the Jerusalem mountains in a small village near the
          forest, there is a luxurious guest villa surrounded by a fruit tree
          garden. We invite you to relax from the day-to-day routine in one of
          our stunning apartments, and feel the freedom close to nature.
        </p>
        <p>Book your next vacation today.</p>
      </div>
    </div>
  );
};

export default About;
