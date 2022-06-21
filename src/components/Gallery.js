import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import butterfly from "../assets/images/butterfly.png";
import { Paper } from "@mui/material";
import galleryImages from "../utilities/galleryImages";
import amenities from "../utilities/amenities";
import LazyLoad from "react-lazyload";
import MultiLingualContent from "../languages/MultiLingualContent";
import "swiper/css";
import "swiper/css/navigation";

const screenWidth = window.innerWidth;

const Gallery = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  useEffect(() => {
    lightboxDisplay === true
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [lightboxDisplay]);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <div className="gallery-wrapper inner-section" id="gallery">
      <img className="butterfly" src={butterfly} alt="butterfly" />
      <h2>
        <MultiLingualContent contentID="gallery" />
      </h2>
      {galleryImages.map(({ name, images }) => (
        <div key={name} className="house-swiper" style={{ direction: "ltr" }}>
          <Paper elevation={3} className="house-wrapper">
            <h3 className="apartment-name">
              <MultiLingualContent contentID={name} />
            </h3>
            <Swiper
              slidesPerView={screenWidth < 800 ? 1 : 3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {images.map(({ src, title }) => (
                <SwiperSlide key={src} className="swiper-slide-wrapper">
                  <LazyLoad>
                    <img
                      loading="lazy"
                      className="image-card"
                      onClick={() => showImage(src)}
                      src={process.env.PUBLIC_URL + src}
                      title={<MultiLingualContent contentID={title} />}
                      alt={<MultiLingualContent contentID={title} />}
                    />
                  </LazyLoad>
                  <p className="swiper-image-title">
                    <MultiLingualContent contentID={title} />
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
            <ul className="house-amenities">
              {amenities.map((house) => {
                if (house.houseName === name) {
                  return house.list.map(({ imageSrc, title, text }) => (
                    <li>
                      <img
                        src={process.env.PUBLIC_URL + imageSrc}
                        alt="icon"
                        className={title}
                      />
                      <p>
                        <MultiLingualContent contentID={text} />
                      </p>
                    </li>
                  ));
                }
              })}
            </ul>
          </Paper>
        </div>
      ))}

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <img id="lightbox-img" src={imageToShow} alt=""></img>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gallery;
