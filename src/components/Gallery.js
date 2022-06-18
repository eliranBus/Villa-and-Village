import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import butterfly from "../assets/images/butterfly.png";
import devider from "../assets/images/devider.png";
import galleryImages from "../utilities/galleryImages";
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
        <div key={name} className="house-swiper">
          <h2 className="apartment-name">
            <MultiLingualContent contentID={name} />
          </h2>
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
          <img className="swiperDevider" src={devider} alt="devider" />
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
