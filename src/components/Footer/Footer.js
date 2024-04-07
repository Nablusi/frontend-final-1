import React from "react";
import { Container, Box, useTheme, Typography, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Footer() {
    const ShopByCategory = ['Skincare', 'Personal Care', 'Handbags', 'Apparels', 'Watches', 'Jewellery'];
    const theme = useTheme();
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Box sx={{ width: '100%', backgroundColor: theme.palette.primary.carouselColor }}>
            <Container sx={{ margin: '0px 80px', paddingTop: '25px', pb: '25px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography sx={{ fontWeight: '400', color: theme.palette.primary.textWhiteColor }}> Shop by Category </Typography>
                        {
                            ShopByCategory.map((category) =>
                                <Link to={`/category/${category}`} style={{ color: theme.palette.primary.greyColor, textDecoration: 'none' }} key={category}>
                                    <Typography component={'p'} sx={{ '&:hover': { color: theme.palette.primary.textWhiteColor } }} > {category}</Typography>
                                </Link>
                            )
                        }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                            <IconButton><FacebookIcon /></IconButton>
                            <IconButton><InstagramIcon /></IconButton>
                            <IconButton><TwitterIcon /></IconButton>
                            <IconButton><YouTubeIcon /></IconButton>
                        </Box>
                        <Typography sx={{color: theme.palette.primary.textWhiteColor}} ><LocationOnIcon /> United States </Typography>
                        <Typography sx={{color:theme.palette.primary.greyColor}} >&copy; {year} | Cora Leviene All Rights Reserved</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}