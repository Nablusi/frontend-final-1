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
                imgSrc={require('../../../assets/image/Group1.png')}
                alt={'less than 20%'}
                isSmall={isSmall}
                isFull={true}
                isOther={false}
            />
            <LinkImage 
                to={'/category/products-that-have-a-discount-of-15%-or-more'}
                imgSrc={require('../../../assets/image/Group3.png')}
                alt={'have discount 15%'}
                isSmall={isSmall}
                isFull={false}
                isOther={false}
            />
            <LinkImage 
                to={'/category/any-products-that-have-a-rating-of-4.5-or-more'}
                imgSrc={require('../../../assets/image/Group2.png')}
                alt={'have rating 4.5'}
                isSmall={isSmall}
                isFull={false}
                isOther={true}
            />
        </Box>
    )
}
