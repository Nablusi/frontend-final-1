import React from "react";
import * as HeroStyles from "./HeroStyles";
import heroImage from "../../../assets/image/heroCategory.png";
import { useMediaQuery } from "react-responsive";


export default function Hero() {
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });
    return (
        <img src={heroImage} style={{width:'100%', marginTop:'33px'}} alt="los" />
        // <div style={HeroStyles.img(heroImage)}></div>
    )
}