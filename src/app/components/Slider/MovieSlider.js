"use client";

import { Box, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MovieSlider.css"; // Custom styles

const moviePosters = [
  "https://rukminim3.flixcart.com/image/850/1000/poster/q/r/v/posterskart-interstellar-movie-poster-pkis04-medium-original-imaebctvytcgcgcx.jpeg?q=90&crop=false",
  "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/GtEAAOSw1W9eN1cY/$_57.JPG?set_id=8800005007",
  "https://support.musicgateway.com/wp-content/uploads/2021/05/movie-poster-examples-rogue-one-1-1.jpg",
  "https://entertainment.time.com/wp-content/uploads/sites/3/2013/08/oblivion-poster.jpg",
];

export default function MovieSlider() {
  return (
    <Box className="slider-container">
      <Swiper
        spaceBetween={-60} /* Adjust spacing for overlap */
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {moviePosters.map((poster, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <Card className="poster-card">
              <CardMedia component="img" image={poster} alt={`Movie ${index + 1}`} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
