import React, { useContext } from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <header id="header">
      <h1
        style={{
          fontFamily:
            language === "hebrew"
              ? "AmaticSC-Regular"
              : "JosefinSlab-ExtraLight",
        }}
      >
        <MultiLingualContent contentID="header1" />
      </h1>
      <h1>
        <MultiLingualContent contentID="header2" />
      </h1>
    </header>
  );
};

export default Header;
