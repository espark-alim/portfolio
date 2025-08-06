"use client";
import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Stepone from "./steps/Stepone";

const Portfolio = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {[1, 2, 3, 4]?.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <Stepone />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Portfolio;
