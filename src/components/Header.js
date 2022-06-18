import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";

const Header = () => {
  return (
    <header id="header">
      <h1>
        <MultiLingualContent contentID="header1" />
      </h1>
      <h1
        style={{
          fontFamily: "GlassAntiqua-Regular",
          letterSpacing: "6px",
          fontSize: "4em",
        }}
        className="header-logo"
      >
        <MultiLingualContent contentID="logo" />
      </h1>
    </header>
  );
};

export default Header;
