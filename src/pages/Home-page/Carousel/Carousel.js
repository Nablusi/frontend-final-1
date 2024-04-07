import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as CarouselStyle from "./CarouselStyles";
import { Box, Button, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function Carousel() {
    const theme = useTheme();
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div >
            <Slider {...settings} style={CarouselStyle.slider} >
                <div style={CarouselStyle.imgContainer}>
                    <img src={require('../../../assets/image/hero.png')} alt="Slide 1" style={CarouselStyle.image} />
                    <Box component={'div'} sx={{ backgroundColor: 'rgb(222 222 222 / 70%)', right:'0' , width:'50%',top:'45px',borderRadius:'10px', padding:'30px', width:'54%', position:'absolute' }}>
                        <Typography variant='h1' sx={{ color: theme.palette.primary.carouselColor }}>Carry your Funk</Typography>
                        <Typography component={'p'} variant='h4' sx={{ color: theme.palette.primary.carouselColor }}>Trendy handbags collection for your party animal</Typography>
                        <Button sx={{ backgroundColor: theme.palette.primary.carouselColor, color: theme.palette.primary.textWhiteColor }}><ArrowForwardIcon /> See more </Button>
                    </Box>
                </div>
                <div style={CarouselStyle.imgContainer}>
                    <img src={require('../../../assets/image/hero.png')} alt="Slide 1" style={CarouselStyle.image} />
                    <Box component={'div'} sx={{ backgroundColor: 'rgb(222 222 222 / 70%)' , width:'50%',top:'45px',borderRadius:'10px', padding:'30px', width:'54%', position:'absolute' }}>
                        <Typography variant='h1' sx={{ color: theme.palette.primary.carouselColor }}>Carry your Funk</Typography>
                        <Typography component={'p'} variant='h4' sx={{ color: theme.palette.primary.carouselColor }}>Trendy handbags collection for your party animal</Typography>
                        <Button sx={{ backgroundColor: theme.palette.primary.carouselColor, color: theme.palette.primary.textWhiteColor }}><ArrowForwardIcon /> See more </Button>
                    </Box>
                </div>

            </Slider>

        </div>
    );
};




