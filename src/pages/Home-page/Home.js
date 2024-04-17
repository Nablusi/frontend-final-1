import React from "react";
import { Box, Container } from "@mui/material";
import Swiper from "./Swiper/Swiper";
import { ShopBrands } from "./ShopBrands";
import NewArrivals from "./NewArrivals/NewArrivals";
import Handpicked from "./Handpicked/Handpicked";
import FilteredShoppingOption from "./Filtered-Shopping-Options/FilteredHeroOption";

export default function Home() {
  
  return (
    <Container>
      <Box component={"div"}>
        <Swiper />
        <NewArrivals />
        <Handpicked />
        <ShopBrands/>
        <FilteredShoppingOption />      
      </Box>
    </Container>
  );
}
