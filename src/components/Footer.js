import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        {" "}
        &#169; {year} <MultiLingualContent contentID="allrightsReservedTo" />
        <a className="logo footer-logo" href="#header">
          Villa{" "}
          <span className="and-wrapper">
            <span className="and">&</span>
          </span>{" "}
          Village{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
