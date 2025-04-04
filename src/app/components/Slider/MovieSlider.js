// MovieSlider.js (updated responsive version)
"use client";
import Image from "next/image";
import { Box, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./MovieSlider.css";

const moviePosters = [
  "https://rukminim3.flixcart.com/image/850/1000/poster/q/r/v/posterskart-interstellar-movie-poster-pkis04-medium-original-imaebctvytcgcgcx.jpeg?q=90&crop=false",
  "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/GtEAAOSw1W9eN1cY/$_57.JPG?set_id=8800005007",
  "https://support.musicgateway.com/wp-content/uploads/2021/05/movie-poster-examples-rogue-one-1-1.jpg",
  "https://entertainment.time.com/wp-content/uploads/sites/3/2013/08/oblivion-poster.jpg",
];

export default function MovieSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <div className="slider-wrapper">
      <Image
        src="/assets/images/banner.svg"
        alt="Background"
        fill
        style={{
          objectFit: 'cover',
          opacity: 0.2,
          zIndex: -1
        }}
      />
      <Box className="slider-container">
        <Swiper
          spaceBetween={isMobile ? 0 : -100}
          slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
          centeredSlides={!isMobile}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
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
    </div>
  );
}