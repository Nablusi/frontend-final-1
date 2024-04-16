import React from "react";
import * as LinkStyles from "./LinkImage.styles"; 
import { Link } from "react-router-dom";

export const LinkImage = ({ to, imgSrc,isFull, alt, isSmall, isOther }) => {
    return (
        <Link to={to} style={LinkStyles.link(isFull, isSmall, isOther)}>
            <img src={imgSrc} alt={alt} style={LinkStyles.image} />
        </Link>
    )
}

