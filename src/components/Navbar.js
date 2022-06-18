import React, { useEffect, useRef } from "react";

const NavBar = ({setOpen, open}) => {
  const navbar = useRef();

  var myScrollFunc = function () {
    var y = window.scrollY;
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
            Villa <span className="and-wrapper"><span className="and">&</span></span> Village{" "}
          </a>
        </span>
      </div>
      <div className="navcolumn2">
        <span className="nav-text-link">
          <a href="#about">About</a>
        </span>
        <span className="nav-text-link">
          <a href="#gallery">Gallery</a>
        </span>
        <span className="nav-text-link">
          <a href="#reviews">Guest Reviews</a>
        </span>
        <span className="nav-text-link">
          <a href="#contact">Contact</a>
        </span>
        <span className="nav-text-link">
          <a href="#location">Location</a>
        </span>
      </div>
      <div className="hamburger">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" onClick={() => setOpen(!open)} />
          <div className={`hamburger-lines ${!open ? 'closed' : 'open'}`}>
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
