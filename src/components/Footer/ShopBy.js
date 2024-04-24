import React from "react";
import * as ShopByStyles from "./ShopBy.styles";
import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export const ShopBy = ({ products, click, title, theme, type }) => {
    return (
        <Box sx={ShopByStyles.categoryContainer}>
            <Typography sx={ShopByStyles.topics(theme)}> {title} </Typography>
            {
                products?.slice(1).map((category, index) => (
                    <Link
                        to={type ? `/category/${category.id}` : `#${category}`}
                        style={ShopByStyles.link(theme)}
                        key={type ? category.id : index}
                        onClick={() => click(category)}
                    >
                        <Typography component={'p'} sx={ShopByStyles.categoryStyle(theme)}>{type ? category.name : category}</Typography>
                    </Link>
                ))
            }
        </Box>
    )
}
