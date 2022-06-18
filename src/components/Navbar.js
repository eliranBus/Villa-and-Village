import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Hebrew from "../assets/images/Hebrew.png";
import English from "../assets/images/English.png";
import MultiLingualContent from "../languages/MultiLingualContent";

const NavBar = ({ setOpen, open }) => {
  const navbar = useRef();
  const { language, hebrewLanguage, englishLanguage } =
    useContext(LanguageContext);

  let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 100) {
      navbar.current.classList.add("show");
    } else {
      navbar.current.classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", myScrollFunc);
  }, []);

  return (
    <nav id="nav" ref={navbar} className="nav hide">
      <div className="navcolumn1">
        <span className="nav-logo">
          <a className="logo" href="#header">
            <MultiLingualContent contentID="logo" />
          </a>
        </span>
        <div className="languages">
          <button className="language" onClick={hebrewLanguage}>
            <img src={Hebrew} alt="Hebrew" />
          </button>
          <button className="language" onClick={englishLanguage}>
            <img src={English} alt="English" />
          </button>
        </div>
      </div>
      <div
        className="navcolumn2"
        style={{ direction: language === "hebrew" ? "rtl" : "ltr" }}
      >
        <span className="nav-text-link">
          <a href="#about">
            <MultiLingualContent contentID="aboutLink" />
          </a>
        </span>
        <span className="nav-text-link">
          <a href="#gallery">
            <MultiLingualContent contentID="galleryLink" />
          </a>
        </span>
        <span className="nav-text-link">
          <a href="#reviews">
            <MultiLingualContent contentID="guestReviewLink" />
          </a>
        </span>
        <span className="nav-text-link">
          <a href="#contact">
            <MultiLingualContent contentID="contactLink" />
          </a>
        </span>
        <span className="nav-text-link">
          <a href="#location">
            <MultiLingualContent contentID="locationLink" />
          </a>
        </span>
      </div>
      <div className="hamburger">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            onClick={() => setOpen(!open)}
          />
          <div className={`hamburger-lines ${!open ? "closed" : "open"}`}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
