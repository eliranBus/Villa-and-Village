import React, { useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import "./style/app.css";

function App() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("hebrew");

  function hebrewLanguage() {
    setLanguage("hebrew");
  }

  function englishLanguage() {
    setLanguage("english");
  }

  return (
    <div
      className="App"
      style={{
        direction: language === "hebrew" ? "rtl" : "ltr",
        fontFamily:
          language === "hebrew" ? "AmaticSC-Regular" : "JosefinSlab-ExtraLight",
      }}
    >
      <LanguageContext.Provider
        value={{ language, hebrewLanguage, englishLanguage }}
      >
        <Navbar open={open} setOpen={setOpen} />
        <Header />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
        <Map />
        <Footer />
        <BurgerMenu open={open} setOpen={setOpen} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
