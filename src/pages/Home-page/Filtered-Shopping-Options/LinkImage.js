import React from "react";
import * as LinkStyles from "./LinkImage.styles";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const LinkImage = ({ to, imgSrc, isFull, alt, isSmall, isOther, variant, flip, first, click }) => {
    const theme = useTheme();

    const contentDefault = (
        <Link to={to} style={LinkStyles.link(isFull, isSmall, isOther, flip)} onClick={click}>
            <img src={imgSrc} alt={alt} style={LinkStyles.image} />
            <Box component={'div'} sx={LinkStyles.defaultContent}>
                <Typography component={'p'} variant="h6" sx={LinkStyles.limitedEdition(theme)}>
                    Life Style
                </Typography>
                <Typography component={'h4'} variant="h4" sx={LinkStyles.limited(theme)}>
                    Limited Edition Products
                </Typography>
            </Box>
        </Link>
    );

    const contentFlip = (
        <Box style={LinkStyles.link(isFull, isSmall, isOther, flip)}>
            <img src={imgSrc} alt={alt} style={LinkStyles.image} />
            <Box component={'div'} sx={LinkStyles.contentFlip}>
                <Typography component={'h4'} variant="h4" sx={LinkStyles.contentTypo(theme,first)}>
                    { first ? '15% off and more!' :'Popular in the community!'} 
                </Typography>
                <Link to={to} onClick={click} >
                    <IconButton variant="contained" color="primary"><ArrowForwardIcon sx={LinkStyles.contentButton(theme,first)} /></IconButton>
                </Link>
            </Box>
        </Box>
    );

    return variant === 'flip' ? contentFlip : contentDefault;
}
