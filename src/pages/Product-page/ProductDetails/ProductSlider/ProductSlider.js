import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export default function ProductSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1204 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // Custom arrow components
  const CustomLeftArrow = ({ onClick, ...rest }) => (
    <Box
      component={IconButton}
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 1,
        display: "flex", // Make sure the arrow is always visible
        alignItems: "center",
        Color: "#fff", // Example background color
      }}
      onClick={onClick}
      {...rest}
    >
      <ArrowBackIosNewIcon />
    </Box>
  );

  const CustomRightArrow = ({ onClick, ...rest }) => (
    <Box
      component={IconButton}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-15px",
        transform: "translateY(-50%)",
        zIndex: 1,
        display: "flex", // Make sure the arrow is always visible
        alignItems: "center",
        Color: "#fff", // Example background color
      }}
      onClick={onClick}
      {...rest}
    >
      <ArrowForwardIosIcon />
    </Box>
  );

  return (
    <Box sx={{ padding: "20px 0", width: '80%', margin: "20px auto", textAlign: 'center', position: "relative" }}>
      <Carousel responsive={responsive} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
        <div> <img src={require('../../../../images/product-image.png')} width="90%" style={{ borderRadius: '5px' }} alt="Product Image" /> </div>
        <div> <img src={require('../../../../images/product-image.png')} width="90%" style={{ borderRadius: '5px' }} alt="Product Image" /> </div>
        <div> <img src={require('../../../../images/product-image.png')} width="90%" style={{ borderRadius: '5px' }} alt="Product Image" /> </div>
        <div> <img src={require('../../../../images/product-image.png')} width="90%" style={{ borderRadius: '5px' }} alt="Product Image" /> </div>
        <div> <img src={require('../../../../images/product-image.png')} width="90%" style={{ borderRadius: '5px' }} alt="Product Image" /> </div>
      </Carousel>
    </Box>
  );
}
