import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";

const Location = () => {
  return (
    <div className="map-wrapper" id="location">
      <h2>
        <MultiLingualContent contentID="location" />
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.834100650126!2d35.01097968484372!3d31.74772898129494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e3cdc06928deb30!2svilla%26village!5e0!3m2!1siw!2sil!4v1645102551539!5m2!1siw!2sil"
        width="600"
        height="450"
        style={{ border: 0, width: "100%", opacity: "0.8", height: "40em" }}
        loading="lazy"
        title="Villa & village"
      ></iframe>
    </div>
  );
};

export default Location;
