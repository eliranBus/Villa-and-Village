import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import quotes from "../assets/images/quotes.png";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    author: "Ehud",
    review: "Extremely nice, clean, new and equipped apartment. Really nice porch to sit, sip a glass of wine and watch the beautiful sunset over the mountains. Communication with Eliran were efficient. Thanks!"
  },
  {
    author: "Mendy",
    review: "Great, clean place. Eliran was very patient answering every question quickly and very accommodating."
  },
  {
    author: "Tamara",
    review: "What an amazing stay! Above and beyond our expectations. Eliran’s place was stunning: pacious, bright, modern, stocked with all the touches and amenities needed, sparkling clean and in a perfect location for us. Everything was as listed. Comfortable beds, smooth wifi connection, amazing porch, view, coffee and much more. We were a family with three kids and our stay was two weeks. We wish we could have stayed longer. Check in/out were super easy and    flexible. Eliran was an exceptional host. Friendly, responsive, easy to communicate with and made sure we felt at home in every sense, which made the difference. Overall -I couldn’t be morec thankful with Eliran and his property. Highly recommend!"
  },
  {
    author: "Meytal",
    review: "I arrived at the apartment with five more friends, we received an answer to every question even before arrival. The apartment was clean and beautiful, the balcony is perfect, the kitchen contains everything you need. Shimon and Eliran were available for everything. We had a lot of fun."
  },
  {
    author: "Havi",
    review: "Stunning new apartment! Everything is clean and well maintained Spacious, very pleasant and equipped with everything you need Very kind host, took care of everything We let you check out later highly recommend"
  },
  {
    author: "Inbal",
    review: "Amazing apartment, furnished and equipped down to the smallest detail! Great location, thin terrace with crazy views and really pleasant. We got exactly what we saw in the pictures and the hosts Eliran and Shimon took care of everything for us! It was amazing"
  },
  {
    author: "Naama",
    review: "We arrived a group of friends and really enjoyed the apartment. The apartment was very clean and looked like in the pictures, the balcony was big and cozy and Eliran and his father took care of everything we needed. warmly recommended."
  },
  {
    author: "Elisheva",
    review: "The hospitality was really nice, the apartment was new and very clean, and the communication with Eliran was really nice."
  },
  {
    author: "Keren",
    review: "The place is very beautiful and organized. There is everything and nothing is missing. The landlord was nice and kind!"
  },
]

const Reviews = () => {
  return (
    <div id="reviews">
      <h2>GUEST REVIEWS</h2>
      <div className="reviews-wrapper" >
        <div className="reviews-bg"></div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <p className="author">{review.author}:</p>
            <img src={quotes} alt="" />
            <p>{review.review}</p>
            <img src={quotes} alt="" />
          </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
