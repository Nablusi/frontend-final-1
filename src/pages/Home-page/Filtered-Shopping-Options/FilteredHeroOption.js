import React, {useContext} from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { LinkImage } from "./LinkImage";
import * as FilteredHeroStyles from "./FilteredHeroOption.styles";
import { SharedParentContext } from "../../../contexts/CategoryPageFilter"; 


export default function FilteredShoppingOption() {
    const isSmall = useMediaQuery({query: "(max-width: 767px)"})
    const {setDiscount, setPopular, setLimitedEdition, trendy } = useContext(SharedParentContext); 
    

    const popularHandler = () => {
        setPopular(()=> true)
    }

    const limitedEditionHandler = () => { 
        setLimitedEdition(()=> true); 
    }

    const discountHandler = () => {
        setDiscount(()=> 15)
    }

    return (
        <Box sx={FilteredHeroStyles.hero} ref={trendy}>       
            <LinkImage 
                to={'/category/limitedEdition'}
                imgSrc={require('../../../assets/image/makeup.jpg')}
                alt={'less than 20%'}
                isSmall={isSmall}
                isFull={true}
                isOther={false}
                flip = {false}
                click={limitedEditionHandler}
                
            />
            <LinkImage 
                to={'/category/discount=15}'}
                imgSrc={require('../../../assets/image/skincare.png')}
                alt={'have discount 15%'}
                isSmall={isSmall}
                isFull={false}
                isOther={false}
                variant={"flip"}
                flip = {true}
                first= {true}
                click={discountHandler}
            />
            <LinkImage 
                to={'/category/popular'}
                imgSrc={require('../../../assets/image/skincare-one.png')}
                alt={'have rating 4.5'}
                isSmall={isSmall}
                isFull={false}
                isOther={true}
                variant={"flip"}
                flip = {true}
                click={popularHandler}
            />
        </Box>
    )
}
