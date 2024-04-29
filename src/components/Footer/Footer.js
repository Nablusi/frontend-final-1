import React, { useContext, useLayoutEffect } from "react";
import { Container, Box, useTheme, Typography, IconButton, Button } from '@mui/material';
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
import { Link } from "react-router-dom";

export default function Footer() {
    const theme = useTheme();
    const date = new Date();
    const year = date.getFullYear();
    const isPhone = useMediaQuery({ query: '(max-width: 991px)' });
    const { categories } = useNavBarContext();
    const { setDiscount, setPopular, setLimitedEdition, trendy, brands, handpicked } = useContext(SharedParentContext);

    const contextHandler = () => {
        setDiscount(() => 0);
        setPopular(() => false);
        setLimitedEdition(() => false);
    }

    const moveToTrendy = () => {
        setTimeout(() => {
            window.scrollTo({
                behavior: 'smooth',
                left: '100',
                top: '1900'
            });
        }, 500)
    }

    const moveToHandPicked = () => {
        setTimeout(() => {
            window.scrollTo({
                top: handpicked.current.offsetTop,
                behavior: 'smooth',
            });
        }, 500)
    }

    const moveToBrands = () => {
        setTimeout(() => {
            window.scrollTo({
                left: '100',
                top: '1700',
                behavior: 'smooth',
            });
        }, 500)
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            const hash = window.location.hash;
            if (hash === "/#trendy") {
                window.scrollTo({
                    left: '100',
                    top: '1900',
                    behavior: 'smooth',
                });
            }
            if (hash === "/#brands") {
                window.scrollTo({
                    left: '100',
                    top: brands.current.offsetTop,
                    behavior: 'smooth',
                });
            }
            if (hash === "/#handpicked") {
                window.scrollTo({
                    top: handpicked.current.offsetTop,
                    behavior: 'smooth',
                });
            }
        }, 400);
    }, [trendy, brands, handpicked]);

    return (
        <Box sx={FooterStyles.footer(theme)}>
            <Container sx={FooterStyles.container}>
                <Box sx={FooterStyles.outerContainer}>
                    <Box sx={FooterStyles.shopByProducts(isPhone)}>
                        <ShopBy products={categories} title={"Shop by Category"} type={true} theme={theme} click={contextHandler} />
                        <Box sx={FooterStyles.shopByContainer}>
                            <Typography sx={FooterStyles.shopByTypograpphy(theme)}>Shop by products</Typography>
                            <Link to={'/#trendy'} onClick={moveToTrendy} style={FooterStyles.shopByLink(theme)} >trendy</Link>
                            <Link to={'/#brands'} onClick={moveToBrands} style={FooterStyles.shopByLink(theme)}>brands</Link>
                            <Link to={'/#handpicked'} onClick={moveToHandPicked} style={FooterStyles.shopByLink(theme)} >handpicked</Link>
                        </Box>
                    </Box>
                    {isPhone ? <div style={FooterStyles.divider(theme)}></div> : ''}
                    <Box sx={FooterStyles.socialMediaContainer}>
                        <Box sx={FooterStyles.social(isPhone)}>
                            <IconButton sx={FooterStyles.iconButton(theme)}><FacebookIcon /></IconButton>
                            <IconButton sx={FooterStyles.iconButton(theme)}><InstagramIcon /></IconButton>
                            <IconButton sx={FooterStyles.iconButton(theme)}><TwitterIcon /></IconButton>
                            <IconButton sx={FooterStyles.iconButton(theme)}><YouTubeIcon /></IconButton>
                        </Box>
                        <Box sx={FooterStyles.location(theme, isPhone)}><LocationOnIcon /> United States </Box>
                        <Typography sx={FooterStyles.copyRight(theme)}>&copy; {year} | Cora Leviene All Rights Reserved</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
