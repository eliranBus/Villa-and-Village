import React, { useContext } from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import { LanguageContext } from "../context/LanguageContext";
import { hebrewReviews, englishReviews } from "../assets/reviews/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import quotes from "../assets/images/quotes.png";
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="reviews">
      <h2>
        <MultiLingualContent contentID="guestReviews" />
      </h2>
      <div className="reviews-wrapper">
        <div className="reviews-bg"></div>
        {language === "English" && (
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {englishReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <p className="author">{review.author}:</p>
                <img src={quotes} alt="quotes" />
                <p className="review">{review.review}</p>
                <img src={quotes} alt="quotes" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {language === "Hebrew" && (
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {hebrewReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <p className="author">{review.author}:</p>
                <img src={quotes} alt="quotes" />
                <p className="review">{review.review}</p>
                <img src={quotes} alt="quotes" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Reviews;
