import React from "react";
import { Box, Container } from "@mui/material";
// import Carousel from "./Carousel/Carousel";
import Swiper from "./Swiper/Swiper";
import { ShopBrands } from "./ShopBrands";

export default function Home() {
  return (
    <Container>
      <Box component={"div"}>
        <Swiper />
        <ShopBrands/>

        {/* <Carousel /> */}
      </Box>
    </Container>
  );
}
