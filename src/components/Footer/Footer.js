import React from "react";
import { Container, Box, useTheme, Typography, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useMediaQuery } from "react-responsive";
import * as FooterStyles from "./FooterStyles";
import { useNavBarContext } from "../../contexts/NavBarContext";


export default function Footer() {
    const theme = useTheme();
    const date = new Date();
    const year = date.getFullYear();
    const isPhone = useMediaQuery({ query: '(max-width: 590px)' });
    const { categories } = useNavBarContext(); 
    const iconButtonItems = [
    <FacebookIcon sx={FooterStyles.icon(theme)} />,
    <InstagramIcon sx={FooterStyles.icon(theme)} />,
    <TwitterIcon sx={FooterStyles.icon(theme)} />,
    <YouTubeIcon sx={FooterStyles.icon(theme)} />];

    return (
        <Box sx={FooterStyles.footer(theme)}>
            <Container sx={FooterStyles.container}>
                <Box sx={FooterStyles.outerContainer}>
                    <Box sx={FooterStyles.categoryContainer}>
                        <Typography sx={FooterStyles.topics(theme)}> Shop by Category </Typography>
                        {
                            categories?.slice(1).map((category) =>
                                <Link to={`/category/${category.id}`} style={FooterStyles.link(theme)} key={category.id}>
                                    <Typography component={'p'} sx={FooterStyles.categoryStyle(theme)} > {category.name}</Typography>
                                </Link>
                            )
                        }
                    </Box>
                    {isPhone ? <div style={FooterStyles.divider(theme)}></div> : ''}

                    <Box sx={FooterStyles.socialMediaContainer}>
                        <Box sx={FooterStyles.social(isPhone)}>
                            {iconButtonItems.map((item, index) =>
                                <IconButton key={index} sx={FooterStyles.iconButton(theme)}>{item}</IconButton>

                            )}
                        </Box>
                        <Box sx={FooterStyles.location(theme, isPhone)} ><LocationOnIcon /> United States </Box>
                        <Typography sx={FooterStyles.copyRight(theme)} >&copy; {year} | Cora Leviene All Rights Reserved</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}