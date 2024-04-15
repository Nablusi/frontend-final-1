import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as SwiperStyles from "./SwiperStyles";
import SwiperSlide from "./SwiperSlide";

export default function Swiper() {
    return (
        <div style={SwiperStyles.slider}>
            <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop>
                <SwiperSlide
                    imageSrc={require('../../../assets/image/hero.png')}
                    title="Carry your Funk"
                    description="Trendy handbags collection for your party animal"
                    buttonLabel="See more"
                    to ={'/category/categoryName'}
                />
                <SwiperSlide
                    imageSrc={require('../../../assets/image/hero.png')}
                    title="Carry your Funk"
                    description="Trendy handbags collection for your party animal"
                    buttonLabel="See more"
                    to ={'/category/categoryName'}
                />
                <SwiperSlide
                    imageSrc={require('../../../assets/image/hero.png')}
                    title="Carry your Funk"
                    description="Trendy handbags collection for your party animal"
                    buttonLabel="See more"
                    to ={'/category/categoryName'}
                />
            </Carousel>
        </div>
    );
}
