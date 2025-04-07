"use client";
import Image from "next/image";
import { Box, Card, CardMedia, useMediaQuery, useTheme, Button } from "@mui/material";
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
    <div className="main-div">

    
    <div className="slider-wrapper">
      <Image
        src="/assets/images/banner.svg"
        alt="Background"
        fill
        style={{
          objectFit: 'cover',
          opacity: 0.6,
          zIndex: -1,
        }}
      />
      
      {/* Header with logo and sign-in button */}
      <Box sx={{
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0px',
        boxSizing: 'border-box'
      }}>
        <Image 
          src="/assets/images/logo.svg" 
          alt="Film Ghar Logo"
          width={120}
          height={50}
        />
        <Button 
          variant="contained" 
          color="error"
          startIcon={<Image src="/assets/images/login.svg" width={16} height={16} alt="Sign In" />}
          sx={{
            borderRadius: '20px',
            textTransform: 'none',
            padding: '8px 16px'
          }}
        >
          Sign In
        </Button>
      </Box>

      <Box className="slider-container">
        <Swiper
          spaceBetween={isMobile ? 0 : -70}
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
    </div>
  );
}