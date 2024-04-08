import React from "react";
import { Box, Container } from "@mui/material";
// import Carousel from "./Carousel/Carousel";
import Swiper from "./Swiper/Swiper";

export default function Home() {
  return (
    <Container>
      <Box component={"div"}>
        <Swiper />

        {/* <Carousel /> */}
      </Box>
    </Container>
  );
}
