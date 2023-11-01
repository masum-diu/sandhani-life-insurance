import { Box } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const HomeShowcaseSlider = () => {
  return (
    <Box>
       <Swiper
       style={{
        
        "--swiper-pagination-color": "#104870",
        "--swiper-pagination-bullet-inactive-color": "#fff",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "15px"
      }}
      
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true} 
        keyboard={true}
        loop={true}
       
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="assets/Slide.png" alt="" width={"100%"} /></SwiperSlide>
        <SwiperSlide><img src="assets/Slide.png" alt="" width={"100%"}  /></SwiperSlide>
        <SwiperSlide><img src="assets/Slide.png" alt="" width={"100%"}  /></SwiperSlide>
        
      </Swiper>
    </Box>
  )
}

export default HomeShowcaseSlider
