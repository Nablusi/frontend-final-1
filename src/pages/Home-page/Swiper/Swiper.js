import React from "react";
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme} from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as SwiperStyles from "./SwiperStyles";
import { useMediaQuery } from 'react-responsive'; 

export default function Swiper() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" });
    const isPadScreen = useMediaQuery({query: "(min-width: 992px ) and (max-width: 1199px)"});
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px ) and (max-width: 991px)"})
    const isSmallScreen = useMediaQuery({query: "(max-width: 767px)"})
    const isPhoneScreen = useMediaQuery({query: "(max-width: 480px)"}); 

    return (
        <div style={SwiperStyles.slider}>
            <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop>
                <div style={SwiperStyles.imgContainer(isLargeScreen, isPadScreen, isMediumScreen, isSmallScreen)}>
                    <img src={require('../../../assets/image/hero.png')} alt="Slide 1" style={SwiperStyles.image} />
                    <Box component={'div'} sx={SwiperStyles.Box(isSmallScreen, isPhoneScreen)}>
                        <Typography variant='h1' sx={SwiperStyles.topic(theme)}>
                            Carry your Funk
                        </Typography>
                        <Typography component={'p'} variant='h4' sx={SwiperStyles.trendy(theme, isMediumScreen, isSmallScreen)}>
                            Trendy handbags collection for your party animal
                        </Typography>
                        <Button sx={SwiperStyles.button(theme)}>
                            <ArrowForwardIcon />
                            See more
                        </Button>
                    </Box>
                </div>
                <div style={SwiperStyles.imgContainer(isLargeScreen, isPadScreen, isMediumScreen, isSmallScreen)}>
                    <img src={require('../../../assets/image/hero.png')} alt="Slide 1" style={SwiperStyles.image} />
                    <Box component={'div'} sx={SwiperStyles.Box(isSmallScreen, isPhoneScreen)}>
                        <Typography variant='h1' sx={SwiperStyles.topic(theme)}>
                            Carry your Funk
                        </Typography>
                        <Typography component={'p'} variant='h4' sx={SwiperStyles.trendy(theme, isMediumScreen, isSmallScreen)}>
                            Trendy handbags collection for your party animal
                        </Typography>
                        <Button sx={SwiperStyles.button(theme)}>
                            <ArrowForwardIcon />
                            See more
                        </Button>
                    </Box>
                </div>
                <div style={SwiperStyles.imgContainer(isLargeScreen, isPadScreen, isMediumScreen, isSmallScreen)}>
                    <img src={require('../../../assets/image/hero.png')} alt="Slide 1" style={SwiperStyles.image} />
                    <Box component={'div'} sx={SwiperStyles.Box(isSmallScreen, isPhoneScreen)}>
                        <Typography variant='h1' sx={SwiperStyles.topic(theme)}>
                            Carry your Funk
                        </Typography>
                        <Typography component={'p'} variant='h4' sx={SwiperStyles.trendy(theme, isMediumScreen, isSmallScreen)}>
                            Trendy handbags collection for your party animal
                        </Typography>
                        <Button sx={SwiperStyles.button(theme)}>
                            <ArrowForwardIcon />
                            See more
                        </Button>
                    </Box>
                </div>
            </Carousel>
        </div>
    )
}

