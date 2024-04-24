import React from "react";
import heroImage from "../../../assets/image/hero.png";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import * as HeroStyles from "./HeroStyles"; 
export default function Hero() {
  
  const isPhone = useMediaQuery({
    query: '(max-width: 480px)'
  })
  const isSmall = useMediaQuery({
    query: '(max-width: 767px)'
  })
  return (
    <Box sx={HeroStyles.heroContainer(isPhone)}>
      <img
        src={heroImage}
        style={HeroStyles.img}
        alt="los"
      />
      <Box component={"div"} sx={HeroStyles.heroText(isPhone)}>
        <Typography variant="h4" sx={HeroStyles.heroTextOne(isSmall)} >
          UPTO 70% OFF
        </Typography>
        <Typography variant="h4" sx={HeroStyles.heroTextTwo(isSmall)}>
          BLACK FRIDAY
        </Typography>
      </Box>

    </Box>
  );
}
