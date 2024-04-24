import React, { useContext } from "react";
import { Container, Box, useTheme, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useMediaQuery } from "react-responsive";
import * as FooterStyles from "./FooterStyles";
import { useNavBarContext } from "../../contexts/NavBarContext";
import { ShopBy } from "./ShopBy";
import { SharedParentContext } from "../../contexts/CategoryPageFilter";
import { useNavigate } from "react-router-dom";


export default function Footer() {
    const theme = useTheme();
    const date = new Date();
    const year = date.getFullYear();
    const isPhone = useMediaQuery({ query: '(max-width: 991px)' });
    const { categories } = useNavBarContext();
    const iconButtonItems = [
        <FacebookIcon sx={FooterStyles.icon(theme)} />,
        <InstagramIcon sx={FooterStyles.icon(theme)} />,
        <TwitterIcon sx={FooterStyles.icon(theme)} />,
        <YouTubeIcon sx={FooterStyles.icon(theme)} />];
    const shopBy = ["", "handpicked collection", "brands", "trendy"];
    const { setDiscount, setPopular, setLimitedEdition } = useContext(SharedParentContext)
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        navigate('/');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const contextHandler = () => {
        setDiscount(() => 0);
        setPopular(() => false);
        setLimitedEdition(() => false);
    }



    return (
        <Box sx={FooterStyles.footer(theme)}>
            <Container sx={FooterStyles.container}>
                <Box sx={FooterStyles.outerContainer}>
                    <Box sx={FooterStyles.shopByProducts(isPhone)}>
                        <ShopBy products={categories} title={"Shop by Category"} type={true} theme={theme} click={contextHandler} />
                        <ShopBy products={shopBy} title={"Shop by Products"} type={false} theme={theme} click={scrollToSection} />
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