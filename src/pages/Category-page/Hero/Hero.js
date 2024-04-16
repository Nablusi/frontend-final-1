import React from "react";
import heroImage from "../../../assets/image/heroCategory.png";
// import * as HeroStyles from "./HeroStyles";
// import { useMediaQuery } from "react-responsive";// uncomment it when u wanna use it because it gives a  warning


export default function Hero() {
  //const isLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  // uncomment it when u wanna use it because it gives a  warning
  return (
    <img
      src={heroImage}
      style={{
        width: "100%",
        height: "auto", 
        marginTop: "33px"
      }}
      alt="los"
    />
    // <div style={HeroStyles.img(heroImage)}></div>
  );
}
