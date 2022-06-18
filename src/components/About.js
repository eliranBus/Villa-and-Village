import React, { useContext } from "react";
import corner from "../assets/images/corner.png";
import devider from "../assets/images/devider.png";
import MultiLingualContent from "../languages/MultiLingualContent";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="section" id="about">
      <img className="devider" src={devider} alt="devider" />
      <img className="corner-top-left" src={corner} alt="" />
      <img className="corner-bottom-right" src={corner} alt="" />
      <div className="about-wrapper inner-section">
        <h2
          style={{
            fontFamily:
              language === "hebrew"
                ? "AmaticSC-Regular"
                : "JosefinSlab-ExtraLight",
          }}
        >
          <MultiLingualContent contentID="about" />
        </h2>
        <p>
          <MultiLingualContent contentID="aboutText" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutCallForAction" />
        </p>
      </div>
    </div>
  );
};

export default About;
