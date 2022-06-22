import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import butterfly from "../assets/images/butterfly.png";
import { Paper, Button, Modal, Fade, Box, Backdrop } from "@mui/material";
import galleryImages from "../utilities/galleryImages";
import amenities from "../utilities/amenities";
import LazyLoad from "react-lazyload";
import MultiLingualContent from "../languages/MultiLingualContent";
import "swiper/css";
import "swiper/css/navigation";

const screenWidth = window.innerWidth;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Gallery = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
            <Button onClick={handleOpenModal}>Show all amenities</Button>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={modalStyle}>
            <p>
              Essentials Air conditioning Cleaning products Cooking basics
              Dedicated workspace Dishes and silverware Heating Kitchen TV
              Washer Wifi Bathtub Hot water Bed linens Clothing storage Drying
              rack for clothing Hangers Iron Room-darkening shades Safe Books
              and reading material Ethernet connection Ping pong table Board
              games Children’s books and toys Crib High chair Pack ’n
              play/Travel crib Ceiling fan First aid kit Barbecue utensils
              Coffee Coffee maker Dining table Dishwasher Freezer Hot water
              kettle Microwave Oven Refrigerator Stove Toaster Wine glasses
              Backyard BBQ grill Outdoor dining area Outdoor furniture Patio or
              balcony Free parking on premises Free street parking Single level
              home
            </p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Gallery;
