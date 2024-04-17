import React from "react";
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as SwiperStyles from "./SwiperStyles";
import { useTheme } from "@mui/material";
import { useMediaQuery } from 'react-responsive'; 
import { Link } from "react-router-dom";

const SwiperSlide = ({ imageSrc, title, description, buttonLabel, to }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" });
    const isPadScreen = useMediaQuery({query: "(min-width: 992px ) and (max-width: 1199px)"});
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px ) and (max-width: 991px)"})
    const isSmallScreen = useMediaQuery({query: "(max-width: 767px)"})
    const isPhoneScreen = useMediaQuery({query: "(max-width: 480px)"}); 

    return (
        <div style={SwiperStyles.imgContainer(isLargeScreen, isPadScreen, isMediumScreen, isSmallScreen)}>
            <img src={imageSrc} alt="Slide" style={SwiperStyles.image} />
            <Box component={'div'} sx={SwiperStyles.Box(isSmallScreen, isPhoneScreen, isPadScreen)}>
                <Typography variant='h1' sx={SwiperStyles.topic(theme, isPhoneScreen, isPadScreen)}>
                    {title}
                </Typography>
                <Typography component={'p'} variant='h4' sx={SwiperStyles.trendy(theme, isMediumScreen, isSmallScreen, isPhoneScreen)}>
                    {description}
                </Typography>
                <Link to={to} style={SwiperStyles.button(theme)}>
                    <ArrowForwardIcon />
                    {buttonLabel}
                </Link>
            </Box>
        </div>
    );
}

export default SwiperSlide;
