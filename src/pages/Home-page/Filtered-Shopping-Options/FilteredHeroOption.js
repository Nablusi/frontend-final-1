import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { LinkImage } from "./LinkImage";
import * as FilteredHeroStyles from "./FilteredHeroOption.styles"; 


export default function FilteredShoppingOption() {
    const isSmall = useMediaQuery({query: "(max-width: 767px)"})
    return (
        <Box sx={FilteredHeroStyles.hero}>       
            <LinkImage 
                to={'/category/less-than-20-in-stock'}
                imgSrc={require('../../../assets/image/makeup.jpg')}
                alt={'less than 20%'}
                isSmall={isSmall}
                isFull={true}
                isOther={false}
                flip = {false}
            />
            <LinkImage 
                to={'/category/products-that-have-a-discount-of-15%-or-more'}
                imgSrc={require('../../../assets/image/skincare.png')}
                alt={'have discount 15%'}
                isSmall={isSmall}
                isFull={false}
                isOther={false}
                variant={"flip"}
                flip = {true}
                first= {true}
            />
            <LinkImage 
                to={'/category/any-products-that-have-a-rating-of-4.5-or-more'}
                imgSrc={require('../../../assets/image/skincare-one.png')}
                alt={'have rating 4.5'}
                isSmall={isSmall}
                isFull={false}
                isOther={true}
                variant={"flip"}
                flip = {true}
            />
        </Box>
    )
}
