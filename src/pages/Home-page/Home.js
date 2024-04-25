import { React, useEffect, useState } from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import Swiper from "./Swiper/Swiper";
import { ShopBrands } from "./ShopBrands/ShopBrands";
import NewArrivals from "./NewArrivals/NewArrivals";
import Handpicked from "./Handpicked/Handpicked";
import FilteredShoppingOption from "./Filtered-Shopping-Options/FilteredHeroOption";
import useAxios from "../../services/Hooks/useAxios";

export default function Home() {
  const [newArrivals, setnewArrivals] = useState([]);
  const { res, loading } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/products/new`
  );

  useEffect(() => {
    if (res) {
      setnewArrivals(res);
    }
  }, [res]);
  if (loading) {
    return <LinearProgress />;
  } else {
    return (
      <Container>
        <Box component={"div"}>
          <Swiper />
          <NewArrivals newArrivals={newArrivals} />
          <Handpicked />
          <ShopBrands />
          <FilteredShoppingOption />
        </Box>
      </Container>
    );
  }
}
